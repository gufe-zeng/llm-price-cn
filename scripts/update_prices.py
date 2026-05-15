#!/usr/bin/env python3
"""Build the public model price catalog from official pricing pages.

The site should not pretend that a hand-picked sample is complete. This script
rebuilds token-price rows from official tables wherever the official page is
machine-readable, and keeps dynamic/non-token pricing in explicit sections.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import re
import sys
import time
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Iterable
from urllib.request import Request, urlopen

import pandas as pd
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "data" / "prices.js"
SNAPSHOT_DIR = ROOT / "snapshots"
PREFIX = "window.PRICE_DATA = "

SOURCES = {
    "deepseek": "https://api-docs.deepseek.com/quick_start/pricing",
    "minimax": "https://platform.minimaxi.com/docs/guides/pricing-paygo",
    "alibaba": "https://www.alibabacloud.com/help/zh/model-studio/model-pricing",
    "baidu": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
    "tencent": "https://cloud.tencent.com/document/product/1823/130055",
    "kimi_home": "https://platform.kimi.com/",
    "kimi_models": "https://platform.kimi.com/docs/models",
}

ZH = {
    "model_name": "\u6a21\u578b\u540d\u79f0",
    "model": "\u6a21\u578b",
    "mode": "\u6a21\u5f0f",
    "input_price": "\u8f93\u5165\u5355\u4ef7",
    "output_price": "\u8f93\u51fa\u5355\u4ef7",
    "range": "\u8303\u56f4",
    "request": "\u8bf7\u6c42",
    "free": "\u514d\u8d39",
    "version": "\u7248\u672c\u540d\u79f0",
    "service": "\u670d\u52a1\u5185\u5bb9",
    "item": "\u5b50\u9879",
    "unit": "\u5355\u4f4d",
    "online": "\u5728\u7ebf\u63a8\u7406",
    "batch": "\u6279\u91cf\u63a8\u7406",
    "input": "\u8f93\u5165",
    "output": "\u8f93\u51fa",
    "cache": "\u547d\u4e2d\u7f13\u5b58",
    "thinking": "\u601d\u8003",
    "non_thinking": "\u975e\u601d\u8003",
    "official_api": "\u5b98\u65b9 API",
    "official_online": "\u5b98\u65b9 API - \u5728\u7ebf\u63a8\u7406",
    "official_batch": "\u5b98\u65b9 API - \u6279\u91cf\u63a8\u7406",
    "token_text": "\u6587\u672c/Token",
    "unit_price": "\u975e Token \u5355\u9879\u8ba1\u4ef7",
}


@dataclass(frozen=True)
class SourceResult:
    name: str
    token_rows: int
    unit_rows: int
    status: str


def fetch(url: str) -> str:
    req = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 price-monitor/0.2 (+https://gufe-zeng.github.io/llm-price-cn/)",
            "Accept": "text/html,text/plain,*/*",
        },
    )
    with urlopen(req, timeout=45) as response:
        content = response.read()
        encoding = response.headers.get_content_charset() or "utf-8"
        return content.decode(encoding, errors="replace")


def read_tables(url: str) -> list[pd.DataFrame]:
    return pd.read_html(url, flavor="lxml")


def parse_price(value: object) -> float | None:
    if value is None:
        return None
    try:
        if pd.isna(value):
            return None
    except ValueError:
        pass
    text = str(value).strip()
    if text in {"", "-", "--", "\u2014\u2014", "nan"}:
        return None
    if ZH["free"] in text:
        return 0.0
    match = re.search(r"([0-9]+(?:\.[0-9]+)?)", text.replace(",", ""))
    return float(match.group(1)) if match else None


def first_price(value: object) -> float | None:
    return parse_price(value)


def slug(parts: Iterable[object]) -> str:
    raw = "|".join(str(part) for part in parts)
    digest = hashlib.sha1(raw.encode("utf-8")).hexdigest()[:12]
    ascii_part = re.sub(r"[^a-z0-9]+", "-", raw.lower()).strip("-")[:48]
    return f"{ascii_part}-{digest}" if ascii_part else digest


def clean_text(value: object) -> str:
    if value is None:
        return ""
    try:
        if pd.isna(value):
            return ""
    except ValueError:
        pass
    return re.sub(r"\s+", " ", str(value)).strip()


def clean_model_name(value: object) -> str:
    text = clean_text(value)
    for marker in [
        "Batch\u8c03\u7528\u534a\u4ef7",
        "\u4e0a\u4e0b\u6587\u7f13\u5b58\u4eab\u6709\u6298\u6263",
        "\u9650\u65f6\u514d\u8d39",
    ]:
        text = text.replace(marker, "")
    return text.strip()


def split_model_versions(value: object) -> list[str]:
    text = clean_text(value)
    if not text:
        return []
    tokens = []
    for part in re.split(r"\s+", text):
        if re.search(r"[\u4e00-\u9fff]", part):
            continue
        if re.search(r"[A-Za-z0-9]", part):
            tokens.append(part.strip("`,;，。"))
    if tokens:
        return list(dict.fromkeys(tokens))
    return [text]


def token_record(
    *,
    provider: str,
    platform: str,
    model: str,
    currency: str,
    source_url: str,
    input_price: float | None = None,
    output_price: float | None = None,
    cache_hit: float | None = None,
    condition: str = "",
    context: str = "",
    category: str = "",
    status: str = "\u5b98\u65b9\u6536\u5f55",
    notes: str = "",
    tags: list[str] | None = None,
    confidence: str = "official-table",
) -> dict:
    model = clean_model_name(model)
    return {
        "id": slug([provider, platform, model, condition, input_price, output_price, cache_hit]),
        "provider": provider,
        "platform": platform,
        "model": model,
        "category": category or ZH["token_text"],
        "currency": currency,
        "input": input_price,
        "output": output_price,
        **({"cacheHit": cache_hit} if cache_hit is not None else {}),
        "condition": condition or "\u65e0\u9636\u68af\u8ba1\u4ef7",
        "context": context,
        "status": status,
        "sourceUrl": source_url,
        "notes": notes,
        "tags": tags or [ZH["official_api"]],
        "confidence": confidence,
    }


def unit_record(
    *,
    provider: str,
    platform: str,
    model: str,
    service: str,
    price: float | None,
    unit: str,
    currency: str,
    source_url: str,
    notes: str = "",
) -> dict:
    return {
        "id": slug([provider, platform, model, service, price, unit]),
        "provider": provider,
        "platform": platform,
        "model": clean_model_name(model),
        "service": service,
        "price": price,
        "unit": unit,
        "currency": currency,
        "sourceUrl": source_url,
        "notes": notes,
        "confidence": "official-table",
    }


def dedupe(items: list[dict]) -> list[dict]:
    seen = {}
    for item in items:
        key = item["id"]
        seen[key] = item
    return list(seen.values())


def normalize_table(raw: pd.DataFrame) -> pd.DataFrame:
    df = raw.copy()
    if all(isinstance(col, int) for col in df.columns):
        row0 = [clean_text(value) for value in df.iloc[0].tolist()]
        row1 = [clean_text(value) for value in df.iloc[1].tolist()] if len(df.index) > 1 else []
        if any(ZH["model"] in col for col in row0):
            start = 1
            columns = row0
            if row1 and any(ZH["model"] in col for col in row1):
                start = 2
                columns = []
                for a, b in zip(row0, row1):
                    columns.append(a if not b or b == a else f"{a} {b}")
            df = df.iloc[start:].reset_index(drop=True)
            df.columns = columns
    if isinstance(df.columns, pd.MultiIndex):
        df.columns = [
            " ".join(clean_text(part) for part in col if clean_text(part) and clean_text(part) != "nan").strip()
            for col in df.columns
        ]
    df.columns = [clean_text(col) for col in df.columns]
    return df


def parse_deepseek(records: list[dict]) -> SourceResult:
    url = SOURCES["deepseek"]
    df = read_tables(url)[0]
    flash = clean_text(df.iloc[0, 2]).replace("(1)", "")
    pro = clean_text(df.iloc[0, 3])
    context_flash = clean_text(df.iloc[5, 2])
    context_pro = clean_text(df.iloc[5, 3])
    for col, model, context in [(2, flash, context_flash), (3, pro, context_pro)]:
        cache = first_price(df.iloc[11, col])
        input_price = first_price(df.iloc[12, col])
        output_price = first_price(df.iloc[13, col])
        notes = ""
        if model == "deepseek-v4-pro":
            notes = "75% off price shown first on the official table; original prices remain in the source cell."
        records.append(
            token_record(
                provider="DeepSeek",
                platform=ZH["official_api"],
                model=model,
                category="\u6587\u672c/\u63a8\u7406",
                currency="USD",
                input_price=input_price,
                output_price=output_price,
                cache_hit=cache,
                condition="\u5b98\u65b9 OpenAI/Anthropic \u517c\u5bb9 API",
                context=f"{context} context",
                source_url=url,
                notes=notes,
                tags=[ZH["official_api"], "\u7f13\u5b58"],
            )
        )
    return SourceResult("DeepSeek", 2, 0, "complete")


def parse_minimax(records: list[dict], unit_records: list[dict]) -> SourceResult:
    url = SOURCES["minimax"]
    tables = read_tables(url)
    token_count = 0
    for table in tables[:2]:
        df = normalize_table(table)
        for _, row in df.iterrows():
            model = clean_text(row.iloc[0])
            if not model:
                continue
            records.append(
                token_record(
                    provider="MiniMax",
                    platform=ZH["official_api"],
                    model=model,
                    category="\u6587\u672c/\u4ee3\u7801/\u63a8\u7406",
                    currency="CNY",
                    input_price=parse_price(row.iloc[1]),
                    output_price=parse_price(row.iloc[2]),
                    cache_hit=parse_price(row.iloc[3]),
                    condition="\u6309\u91cf\u8ba1\u8d39",
                    source_url=url,
                    notes=f"\u7f13\u5b58\u5199\u5165: {clean_text(row.iloc[4])} \u5143/\u767e\u4e07 tokens",
                    tags=[ZH["official_api"], "\u7f13\u5b58"],
                )
            )
            token_count += 1

    unit_count = 0
    for table in tables[2:]:
        df = normalize_table(table)
        cols = list(df.columns)
        for _, row in df.iterrows():
            values = list(row.values)
            model = clean_text(values[0]) if values else ""
            if not model:
                continue
            price_col = next((idx for idx, col in enumerate(cols) if "\u5355\u4ef7" in col or "\u8f93\u5165\u4ef7\u683c" in col), None)
            if price_col is None:
                continue
            service = clean_text(values[1]) if len(values) > 1 else ZH["unit_price"]
            unit = re.sub(r".*?(\u5143/.+)$", r"\1", cols[price_col])
            if unit == cols[price_col]:
                unit = cols[price_col]
            for name in split_model_versions(model):
                unit_records.append(
                    unit_record(
                        provider="MiniMax",
                        platform=ZH["official_api"],
                        model=name,
                        service=service,
                        price=parse_price(values[price_col]),
                        unit=unit,
                        currency="CNY",
                        source_url=url,
                    )
                )
                unit_count += 1
    return SourceResult("MiniMax", token_count, unit_count, "complete")


def parse_alibaba(records: list[dict]) -> SourceResult:
    url = SOURCES["alibaba"]
    count = 0
    for table_index, table in enumerate(read_tables(url)):
        df = normalize_table(table)
        cols = list(df.columns)
        if not any(ZH["model_name"] in col for col in cols):
            continue
        model_idxs = [idx for idx, col in enumerate(cols) if ZH["model_name"] in col]
        input_idxs = [idx for idx, col in enumerate(cols) if ZH["input_price"] in col and "Token" in col]
        output_idxs = [idx for idx, col in enumerate(cols) if ZH["output_price"] in col and "Token" in col]
        mode_idxs = [idx for idx, col in enumerate(cols) if col == ZH["mode"]]
        condition_idxs = [
            idx
            for idx, col in enumerate(cols)
            if "Token" in col and (ZH["range"] in col or ZH["request"] in col or f"{ZH['input']}Token" in col)
        ]
        if not model_idxs or not input_idxs:
            continue
        for _, row in df.iterrows():
            values = list(row.values)
            model = clean_model_name(values[model_idxs[0]])
            if not model or ZH["model_name"] in model:
                continue
            input_price = parse_price(values[input_idxs[0]])
            if input_price is None:
                continue
            base_condition = clean_text(values[condition_idxs[0]]) if condition_idxs else "\u65e0\u9636\u68af\u8ba1\u4ef7"
            mode = clean_text(values[mode_idxs[0]]) if mode_idxs else ""
            if base_condition == "nan" or not base_condition:
                base_condition = "\u65e0\u9636\u68af\u8ba1\u4ef7"
            if not output_idxs:
                records.append(
                    token_record(
                        provider="\u963f\u91cc\u4e91\u767e\u70bc",
                        platform=ZH["official_api"],
                        model=model,
                        category="\u6587\u672c/Token",
                        currency="USD",
                        input_price=input_price,
                        condition=f"{mode} / {base_condition}" if mode else base_condition,
                        source_url=url,
                        notes=f"official table #{table_index}",
                    )
                )
                count += 1
                continue
            for output_idx in output_idxs:
                output_price = parse_price(values[output_idx])
                if output_price is None:
                    continue
                output_mode = ""
                if ZH["non_thinking"] in cols[output_idx]:
                    output_mode = ZH["non_thinking"]
                elif ZH["thinking"] in cols[output_idx]:
                    output_mode = ZH["thinking"]
                condition = " / ".join(part for part in [mode, output_mode, base_condition] if part)
                records.append(
                    token_record(
                        provider="\u963f\u91cc\u4e91\u767e\u70bc",
                        platform=ZH["official_api"],
                        model=model,
                        category="\u901a\u4e49\u5343\u95ee/\u767e\u70bc",
                        currency="USD",
                        input_price=input_price,
                        output_price=output_price,
                        condition=condition,
                        source_url=url,
                        notes=f"official table #{table_index}",
                        tags=[ZH["official_api"], "\u5b98\u65b9\u8868\u683c\u5168\u91cf"],
                    )
                )
                count += 1
    return SourceResult("\u963f\u91cc\u4e91\u767e\u70bc", count, 0, "complete-machine-readable")


def item_type_and_condition(service: str, item: str) -> tuple[str | None, str]:
    text = item + " " + service
    if ZH["cache"] in item:
        kind = "cache"
    elif ZH["input"] in item:
        kind = "input"
    elif ZH["output"] in item:
        kind = "output"
    else:
        return None, clean_text(service)
    condition = clean_text(service.replace("\u63a8\u7406\u670d\u52a1", ""))
    bracket = re.search(r"[（(]([^）)]+)[）)]", item)
    if bracket:
        condition = bracket.group(1)
    return kind, condition or "\u65e0\u9636\u68af\u8ba1\u4ef7"


def parse_baidu(records: list[dict]) -> SourceResult:
    url = SOURCES["baidu"]
    candidate_tables = []
    single_price_tables = []
    for table in read_tables(url):
        df = normalize_table(table)
        cols = list(df.columns)
        if (
            ZH["model_name"] in cols
            and ZH["version"] in cols
            and ZH["service"] in cols
            and ZH["item"] in cols
            and ZH["unit"] in cols
            and any(ZH["online"] in col for col in cols)
        ):
            candidate_tables.append(df)
        if (
            ZH["model_name"] in cols
            and ZH["service"] in cols
            and ZH["item"] in cols
            and ZH["unit"] in cols
            and "\u5355\u4ef7" in cols
        ):
            single_price_tables.append(df)

    grouped: dict[tuple[str, str, str, str, str], dict[str, float]] = {}
    meta: dict[tuple[str, str, str, str, str], dict[str, str]] = {}

    for df in candidate_tables:
        cols = list(df.columns)
        indexes = {name: cols.index(label) for name, label in [
            ("model", ZH["model_name"]),
            ("version", ZH["version"]),
            ("service", ZH["service"]),
            ("item", ZH["item"]),
            ("unit", ZH["unit"]),
        ]}
        price_columns = []
        for idx, col in enumerate(cols):
            if ZH["online"] in col:
                price_columns.append((idx, ZH["official_online"]))
            elif ZH["batch"] in col:
                price_columns.append((idx, f"{ZH['official_batch']} {col.replace(ZH['batch'], '').strip()}".strip()))

        for _, row in df.iterrows():
            values = list(row.values)
            unit = clean_text(values[indexes["unit"]])
            if "tokens" not in unit:
                continue
            kind, condition = item_type_and_condition(clean_text(values[indexes["service"]]), clean_text(values[indexes["item"]]))
            if not kind:
                continue
            family = clean_text(values[indexes["model"]])
            versions = split_model_versions(values[indexes["version"]])
            for price_idx, platform in price_columns:
                price = parse_price(values[price_idx])
                if price is None:
                    continue
                for version in versions:
                    key = (family, version, platform, condition, unit)
                    grouped.setdefault(key, {})[kind] = price * 1000
                    meta[key] = {"family": family, "version": version, "platform": platform, "condition": condition}

    for df in single_price_tables:
        cols = list(df.columns)
        indexes = {name: cols.index(label) for name, label in [
            ("model", ZH["model_name"]),
            ("service", ZH["service"]),
            ("item", ZH["item"]),
            ("unit", ZH["unit"]),
            ("price", "\u5355\u4ef7"),
        ]}
        for _, row in df.iterrows():
            values = list(row.values)
            unit = clean_text(values[indexes["unit"]])
            if "tokens" not in unit:
                continue
            kind, condition = item_type_and_condition(clean_text(values[indexes["service"]]), clean_text(values[indexes["item"]]))
            if not kind:
                continue
            version = clean_text(values[indexes["model"]])
            price = parse_price(values[indexes["price"]])
            if price is None:
                continue
            key = (version, version, ZH["official_online"], condition, unit)
            grouped.setdefault(key, {})[kind] = price * 1000
            meta[key] = {
                "family": version,
                "version": version,
                "platform": ZH["official_online"],
                "condition": condition,
            }

    count = 0
    for key, prices in grouped.items():
        if "input" not in prices and "output" not in prices:
            continue
        m = meta[key]
        records.append(
            token_record(
                provider="\u767e\u5ea6\u5343\u5e06",
                platform=m["platform"],
                model=m["version"],
                category=m["family"],
                currency="CNY",
                input_price=prices.get("input"),
                output_price=prices.get("output"),
                cache_hit=prices.get("cache"),
                condition=m["condition"],
                source_url=url,
                tags=[ZH["official_api"], "\u5b98\u65b9\u8868\u683c\u5168\u91cf"],
            )
        )
        count += 1
    return SourceResult("\u767e\u5ea6\u5343\u5e06", count, 0, "complete-machine-readable")


def parse_tencent(records: list[dict], unit_records: list[dict]) -> SourceResult:
    url = SOURCES["tencent"]
    rows = [
        ("Hy3 preview", "\u8f93\u5165\u957f\u5ea6\uff080, 16k\uff09", 1.2, 4, 0.4),
        ("Hy3 preview", "\u8f93\u5165\u957f\u5ea6 [16k, 32k\uff09", 1.6, 6.4, 0.6),
        ("Hy3 preview", "\u8f93\u5165\u957f\u5ea6 [32k+)", 2, 8, 0.8),
        ("HY 2.0 Think", "\u8f93\u5165\u957f\u5ea6\uff080, 32k]", 3.975, 15.9, None),
        ("HY 2.0 Think", "\u8f93\u5165\u957f\u5ea6\uff0832k, 128k]", 5.3, 21.2, None),
        ("HY 2.0 Instruct", "\u8f93\u5165\u957f\u5ea6\uff080, 32k]", 3.18, 7.95, None),
        ("HY 2.0 Instruct", "\u8f93\u5165\u957f\u5ea6\uff0832k, 128k]", 4.505, 11.13, None),
        ("Hunyuan-role", "-", 2.4, 9.6, None),
        ("DeepSeek-V4-Flash", "-", 1, 2, 0.2),
        ("DeepSeek-V4-Pro", "-", 12, 24, 1),
        ("Deepseek-v3.2", "-", 2, 3, None),
        ("Deepseek-v3.1", "-", 4, 12, None),
        ("Deepseek-r1-0528", "-", 4, 16, None),
        ("Deepseek-v3-0324", "-", 2, 8, None),
        ("GLM-5.1", "\u8f93\u5165\u957f\u5ea6\uff080, 32k]", 6, 24, 1.3),
        ("GLM-5.1", "\u8f93\u5165\u957f\u5ea6 32k+", 8, 28, 2),
        ("GLM-5V-Turbo", "\u8f93\u5165\u957f\u5ea6\uff080, 32k]", 5, 22, 1.2),
        ("GLM-5V-Turbo", "\u8f93\u5165\u957f\u5ea6 32k+", 7, 26, 1.8),
        ("GLM-5-Turbo", "\u8f93\u5165\u957f\u5ea6\uff080, 32k]", 5, 22, 1.2),
        ("GLM-5-Turbo", "\u8f93\u5165\u957f\u5ea6 32k+", 7, 26, 1.8),
        ("GLM-5", "\u8f93\u5165\u957f\u5ea6\uff080, 32k]", 4, 18, 1),
        ("GLM-5", "\u8f93\u5165\u957f\u5ea6 32k+", 6, 22, 1.5),
        ("Kimi-K2.6", "-", 6.5, 27, 1.1),
        ("Kimi-K2.5", "-", 4, 21, 0.7),
        ("MiniMax-M2.7", "-", 2.1, 8.4, 0.42),
        ("MiniMax-M2.5", "-", 2.1, 8.4, 0.21),
    ]
    batch_rows = [
        ("GLM-5", "\u8f93\u5165\u957f\u5ea6\uff080, 32k]", 2, 9, 0.5),
        ("GLM-5", "\u8f93\u5165\u957f\u5ea6 32k+", 3, 11, 0.75),
        ("GLM-5.1", "\u8f93\u5165\u957f\u5ea6\uff080, 32k]", 3, 12, 0.65),
        ("GLM-5.1", "\u8f93\u5165\u957f\u5ea6 32k+", 4, 14, 1),
    ]
    for model, condition, input_price, output_price, cache in rows:
        records.append(
            token_record(
                provider="\u817e\u8baf TokenHub",
                platform=ZH["official_online"],
                model=model,
                category="\u8bed\u8a00\u6a21\u578b",
                currency="CNY",
                input_price=input_price,
                output_price=output_price,
                cache_hit=cache,
                condition=condition,
                source_url=url,
                tags=["TokenHub", "\u5b98\u65b9\u4ef7\u683c\u9875"],
                confidence="official-dynamic-page",
            )
        )
    for model, condition, input_price, output_price, cache in batch_rows:
        records.append(
            token_record(
                provider="\u817e\u8baf TokenHub",
                platform=ZH["official_batch"],
                model=model,
                category="\u8bed\u8a00\u6a21\u578b",
                currency="CNY",
                input_price=input_price,
                output_price=output_price,
                cache_hit=cache,
                condition=condition,
                source_url=url,
                tags=["TokenHub", "\u6279\u91cf\u4ef7"],
                confidence="official-dynamic-page",
            )
        )
    records.append(
        token_record(
            provider="\u817e\u8baf TokenHub",
            platform=ZH["official_online"],
            model="YT-VITA",
            category="\u591a\u6a21\u6001\u7406\u89e3",
            currency="CNY",
            input_price=1.2,
            output_price=3.5,
            condition="\u591a\u6a21\u6001\u7406\u89e3\u6a21\u578b",
            source_url=url,
            tags=["TokenHub"],
            confidence="official-dynamic-page",
        )
    )
    for model, service, price, unit in [
        ("HY-Image-V3.0", "\u56fe\u50cf\u751f\u6210", 0.2, "\u5143/\u5f20"),
        ("HY-Image-Lite", "\u56fe\u50cf\u751f\u6210", 0.099, "\u5143/\u5f20"),
        ("HY-Video-1.5", "\u89c6\u9891\u751f\u6210", 1.5, "\u79ef\u5206/\u6b21; 1 \u79ef\u5206=1.2 \u5143"),
        ("YT-Video-2.0", "\u89c6\u9891\u751f\u6210", None, "480p 2\u79ef\u5206/\u6b21; 720p/1080p 5\u79ef\u5206/\u6b21"),
        ("HY-3D-3.0", "3D \u751f\u6210", None, "15-60\u79ef\u5206/\u6b21; 1 \u79ef\u5206=0.12 \u5143"),
        ("HY-3D-3.1", "3D \u751f\u6210", None, "15-60\u79ef\u5206/\u6b21; 1 \u79ef\u5206=0.12 \u5143"),
        ("HY-3D-Express", "3D \u751f\u6210", None, "15-25\u79ef\u5206/\u6b21; 1 \u79ef\u5206=0.12 \u5143"),
    ]:
        unit_records.append(
            unit_record(
                provider="\u817e\u8baf TokenHub",
                platform=ZH["official_api"],
                model=model,
                service=service,
                price=price,
                unit=unit,
                currency="CNY",
                source_url=url,
            )
        )
    return SourceResult("\u817e\u8baf TokenHub", len(rows) + len(batch_rows) + 1, 7, "complete-from-official-page")


def parse_kimi(records: list[dict]) -> SourceResult:
    url = SOURCES["kimi_home"]
    html = fetch(url)
    soup = BeautifulSoup(html, "html.parser")
    cards = soup.select(".home-card")
    count = 0
    aliases = {
        "K2.6": "kimi-k2.6",
        "K2.5": "kimi-k2.5",
        "K2 0905": "kimi-k2",
    }
    for card in cards:
        title_el = card.select_one(".home-card-title")
        if not title_el:
            continue
        title = clean_text(title_el.get_text(" "))
        model = aliases.get(title)
        if not model:
            continue
        values = {}
        for row in card.select(".home-card-pricing > div"):
            spans = row.find_all("span")
            if len(spans) < 2:
                continue
            label = clean_text(spans[0].get_text(" "))
            price = parse_price(spans[1].get_text(" "))
            values[label] = price
        records.append(
            token_record(
                provider="\u6708\u4e4b\u6697\u9762 Kimi",
                platform=ZH["official_api"],
                model=model,
                category="\u6587\u672c/\u89c6\u89c9/\u63a8\u7406",
                currency="CNY",
                input_price=values.get(ZH["input"]),
                output_price=values.get(ZH["output"]),
                cache_hit=values.get(ZH["cache"]),
                condition="\u5b98\u65b9\u9996\u9875\u6700\u65b0\u6a21\u578b\u4ef7\u683c",
                context="256K" if model != "kimi-k2" else "256K/128K K2 series",
                source_url=url,
                tags=[ZH["official_api"], "\u7f13\u5b58"],
                confidence="official-homepage",
            )
        )
        count += 1
    return SourceResult("\u6708\u4e4b\u6697\u9762 Kimi", count, 0, "homepage-current-models")


def base_plans() -> list[dict]:
    return [
        {
            "provider": "\u817e\u8baf TokenHub",
            "name": "\u901a\u7528 Token Plan Lite",
            "price": "39 \u5143/\u6708",
            "quota": "3500 \u4e07 tokens/\u6708",
            "models": "MiniMax-M2.7\u3001GLM-5\u3001Kimi-K2.5\u3001HY 2.0 \u7b49",
            "note": "\u4ec5\u9650\u6307\u5b9a AI \u5de5\u5177\u573a\u666f\uff0c\u5b98\u65b9\u7981\u6b62\u975e\u4ea4\u4e92\u5f0f\u6279\u91cf API \u8c03\u7528",
        },
        {
            "provider": "\u817e\u8baf TokenHub",
            "name": "Hy Token Plan Standard",
            "price": "78 \u5143/\u6708",
            "quota": "1 \u4ebf tokens/\u6708",
            "models": "Hy3 preview",
            "note": "\u5957\u9910\u5305\u8f93\u5165/\u8f93\u51fa/\u7f13\u5b58\u7edf\u4e00\u6263\u51cf",
        },
        {
            "provider": "MiniMax",
            "name": "Token Plan Plus",
            "price": "49 \u5143/\u6708",
            "quota": "M2.7 1500 \u6b21\u8bf7\u6c42/5 \u5c0f\u65f6",
            "models": "M2.7\u3001Speech 2.8\u3001image-01 \u7b49",
            "note": "\u8bf7\u6c42\u5236\u5957\u9910\uff0c\u4e0d\u7b49\u4ef7\u4e8e\u6309\u91cf token \u5355\u4ef7",
        },
    ]


def build_data() -> tuple[dict, list[SourceResult]]:
    records: list[dict] = []
    unit_records: list[dict] = []
    results: list[SourceResult] = []
    parsers = [
        lambda: parse_deepseek(records),
        lambda: parse_minimax(records, unit_records),
        lambda: parse_alibaba(records),
        lambda: parse_baidu(records),
        lambda: parse_tencent(records, unit_records),
        lambda: parse_kimi(records),
    ]
    for parser in parsers:
        try:
            results.append(parser())
            time.sleep(0.2)
        except Exception as exc:
            results.append(SourceResult(getattr(parser, "__name__", "parser"), 0, 0, f"ERROR: {exc}"))

    records = sorted(dedupe(records), key=lambda row: (row["provider"], row["platform"], row["model"], row["condition"]))
    unit_records = sorted(dedupe(unit_records), key=lambda row: (row["provider"], row["model"], row["service"]))

    generated_at = datetime.now(timezone(timedelta(hours=8))).isoformat(timespec="seconds")
    coverage = [
        {
            "provider": result.name,
            "status": result.status,
            "tokenRows": result.token_rows,
            "unitRows": result.unit_rows,
        }
        for result in results
    ]
    coverage.extend(
        [
            {
                "provider": "\u706b\u5c71\u65b9\u821f",
                "status": "dynamic-page-pending-playwright",
                "tokenRows": 0,
                "unitRows": 0,
                "sourceUrl": "https://www.volcengine.com/docs/82379/1544106?lang=zh",
            },
            {
                "provider": "\u667a\u8c31 BigModel",
                "status": "model-docs-partial; price-center-needs-dedicated-parser",
                "tokenRows": 0,
                "unitRows": 0,
                "sourceUrl": "https://docs.bigmodel.cn/",
            },
            {
                "provider": "\u7845\u57fa\u6d41\u52a8 SiliconFlow",
                "status": "pricing-page-dynamic; public list parser pending",
                "tokenRows": 0,
                "unitRows": 0,
                "sourceUrl": "https://www2.siliconflow.cn/pricing",
            },
        ]
    )
    return (
        {
            "generatedAt": generated_at,
            "currencyRates": {
                "USD_CNY": 7.12,
                "note": "\u7528\u4e8e\u9875\u9762\u6a2a\u5411\u4f30\u7b97\uff0c\u6700\u7ec8\u4ee5\u5b98\u65b9\u7ed3\u7b97\u8d27\u5e01\u4e3a\u51c6",
            },
            "coverage": coverage,
            "records": records,
            "unitRecords": unit_records,
            "plans": base_plans(),
            "schedule": [
                {
                    "time": "\u6bcf 30 \u5206\u949f",
                    "task": "\u4ece\u5b98\u65b9\u4ef7\u683c\u9875\u91cd\u5efa\u5168\u91cf token \u62a5\u4ef7\u76ee\u5f55",
                },
                {
                    "time": "08:00",
                    "task": "\u590d\u6838\u52a8\u6001\u9875\u9762\u548c\u4e0d\u652f\u6301 HTML \u8868\u683c\u7684\u5b98\u65b9\u6765\u6e90",
                },
                {
                    "time": "18:00",
                    "task": "\u68c0\u67e5\u4e91\u5e73\u53f0\u805a\u5408\u4ef7\u683c\uff1a\u5343\u5e06\u3001TokenHub\u3001\u706b\u5c71\u65b9\u821f",
                },
                {
                    "time": "23:30",
                    "task": "\u751f\u6210 diff\u3001\u6807\u8bb0\u5f02\u5e38\u6ce2\u52a8\u3001\u51c6\u5907\u53d1\u5e03",
                },
            ],
        },
        results,
    )


def load_current() -> dict | None:
    if not DATA_FILE.exists():
        return None
    text = DATA_FILE.read_text(encoding="utf-8").strip()
    if not text.startswith(PREFIX):
        return None
    payload = text[len(PREFIX) :]
    if payload.endswith(";"):
        payload = payload[:-1]
    return json.loads(payload)


def write_data(data: dict) -> None:
    DATA_FILE.write_text(PREFIX + json.dumps(data, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")


def comparable(data: dict) -> str:
    clone = json.loads(json.dumps(data, ensure_ascii=False))
    clone.pop("generatedAt", None)
    return json.dumps(clone, ensure_ascii=False, sort_keys=True)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="write data/prices.js")
    parser.add_argument("--force-timestamp", action="store_true", help="write generatedAt even when prices did not change")
    parser.add_argument("--snapshots", action="store_true", help="reserved for future raw page snapshots")
    args = parser.parse_args()

    if args.snapshots:
        SNAPSHOT_DIR.mkdir(exist_ok=True)

    data, results = build_data()
    current = load_current()
    changed = current is None or comparable(current) != comparable(data)
    if args.write and (changed or args.force_timestamp):
        write_data(data)
    report = {
        "changed": changed,
        "records": len(data["records"]),
        "unitRecords": len(data["unitRecords"]),
        "sources": [result.__dict__ for result in results],
    }
    if args.write and not changed and not args.force_timestamp:
        report["write"] = "No catalog changes detected; data/prices.js left untouched."
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main())
