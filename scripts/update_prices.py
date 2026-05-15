#!/usr/bin/env python3
"""Fetch official model pricing pages and refresh data/prices.js.

The parser intentionally stays conservative. If a source is dynamic or a
pattern cannot be found, the existing curated record is preserved and the run
reports the miss instead of guessing.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "data" / "prices.js"
SNAPSHOT_DIR = ROOT / "snapshots"
PREFIX = "window.PRICE_DATA = "

SOURCES = {
    "deepseek": "https://api-docs.deepseek.com/quick_start/pricing",
    "minimax": "https://platform.minimaxi.com/docs/guides/pricing-paygo",
    "tencent": "https://cloud.tencent.com/document/product/1823/130055",
    "baidu": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
    "zhipu_glm45": "https://docs.bigmodel.cn/cn/guide/models/text/glm-4.5",
}


def load_data() -> dict:
    text = DATA_FILE.read_text(encoding="utf-8").strip()
    if not text.startswith(PREFIX):
        raise ValueError(f"{DATA_FILE} does not start with {PREFIX!r}")
    payload = text[len(PREFIX) :]
    if payload.endswith(";"):
        payload = payload[:-1]
    return json.loads(payload)


def write_data(data: dict) -> None:
    rendered = PREFIX + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    DATA_FILE.write_text(rendered, encoding="utf-8")


def fetch(url: str) -> str:
    req = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 price-monitor/0.1 (+https://example.local)",
            "Accept": "text/html,text/plain,*/*",
        },
    )
    with urlopen(req, timeout=30) as response:
        content = response.read()
        encoding = response.headers.get_content_charset() or "utf-8"
        return content.decode(encoding, errors="replace")


def compact(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text


def set_record(records: list[dict], record_id: str, **updates: object) -> bool:
    for record in records:
        if record["id"] == record_id:
            record.update({key: value for key, value in updates.items() if value is not None})
            return True
    return False


def parse_deepseek(html: str, records: list[dict]) -> list[str]:
    text = compact(html)
    hits = []
    flash = re.search(
        r"deepseek-v4-flash.*?CACHE HIT.*?\$(\d+(?:\.\d+)?).*?CACHE MISS\)\$(\d+(?:\.\d+)?).*?OUTPUT TOKENS\$(\d+(?:\.\d+)?)",
        text,
        re.I,
    )
    pro = re.search(
        r"deepseek-v4-pro.*?CACHE HIT.*?\$(\d+(?:\.\d+)?).*?CACHE MISS\).*?\$(\d+(?:\.\d+)?).*?OUTPUT TOKENS.*?\$(\d+(?:\.\d+)?)",
        text,
        re.I,
    )
    if flash:
      cache, input_price, output_price = map(float, flash.groups())
      set_record(records, "deepseek-v4-flash-official", cacheHit=cache, input=input_price, output=output_price)
      hits.append("deepseek-v4-flash")
    if pro:
      cache, input_price, output_price = map(float, pro.groups())
      set_record(records, "deepseek-v4-pro-official", cacheHit=cache, input=input_price, output=output_price)
      hits.append("deepseek-v4-pro")
    return hits


def parse_minimax(html: str, records: list[dict]) -> list[str]:
    text = compact(html)
    hits = []
    for record_id, model in [
        ("minimax-m27-official", "MiniMax-M2.7"),
        ("minimax-m27-highspeed-official", "MiniMax-M2.7-highspeed"),
    ]:
        pattern = rf"{re.escape(model)}\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)"
        match = re.search(pattern, text)
        if match:
            input_price, output_price, cache_hit, cache_write = map(float, match.groups())
            set_record(records, record_id, input=input_price, output=output_price, cacheHit=cache_hit, cacheWrite=cache_write)
            hits.append(model)
    return hits


def parse_tencent(html: str, records: list[dict]) -> list[str]:
    text = compact(html)
    mappings = [
        ("hy3-preview-tokenhub-16k", r"Hy3 preview\s+输入长度（0, 16k）\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)"),
        ("hunyuan-role-tokenhub", r"Hunyuan-role\s+-\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+-"),
        ("kimi-k26-tokenhub", r"Kimi-K2\.6\s+-\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)"),
        ("glm-5-tokenhub", r"GLM-5\s+输入长度（0, 32k]\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)"),
    ]
    hits = []
    for record_id, pattern in mappings:
        match = re.search(pattern, text, re.I)
        if not match:
            continue
        values = list(map(float, match.groups()))
        updates = {"input": values[0], "output": values[1]}
        if len(values) > 2:
            updates["cacheHit"] = values[2]
        set_record(records, record_id, **updates)
        hits.append(record_id)
    return hits


def parse_baidu(html: str, records: list[dict]) -> list[str]:
    text = compact(html)
    mappings = [
        ("ernie-51-qianfan-32k", r"ERNIE 5\.1 .*?输入（输入<=32k）\s+(\d+(?:\.\d+)?).*?输出（输入<=32k）\s+(\d+(?:\.\d+)?)"),
        ("ernie-45-turbo-qianfan", r"ERNIE-4\.5-Turbo-32K .*?输入\s+(\d+(?:\.\d+)?).*?命中缓存\s+(\d+(?:\.\d+)?).*?输出\s+(\d+(?:\.\d+)?)"),
        ("ernie-x1-turbo-qianfan", r"ERNIE-X1-Turbo-32K.*?输入\s+(\d+(?:\.\d+)?).*?输出\s+(\d+(?:\.\d+)?)"),
    ]
    hits = []
    for record_id, pattern in mappings:
        match = re.search(pattern, text)
        if not match:
            continue
        nums = [float(value) * 1000 for value in match.groups()]
        if len(nums) == 3:
            set_record(records, record_id, input=nums[0], cacheHit=nums[1], output=nums[2])
        else:
            set_record(records, record_id, input=nums[0], output=nums[1])
        hits.append(record_id)
    return hits


PARSERS = {
    "deepseek": parse_deepseek,
    "minimax": parse_minimax,
    "tencent": parse_tencent,
    "baidu": parse_baidu,
}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="write data/prices.js")
    parser.add_argument("--force-timestamp", action="store_true", help="write generatedAt even when prices did not change")
    parser.add_argument("--snapshots", action="store_true", help="save raw page snapshots")
    args = parser.parse_args()

    data = load_data()
    records = data["records"]
    before = json.dumps(records, ensure_ascii=False, sort_keys=True)
    report = {}

    if args.snapshots:
        SNAPSHOT_DIR.mkdir(exist_ok=True)

    for name, url in SOURCES.items():
        try:
            html = fetch(url)
            if args.snapshots:
                ts = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
                (SNAPSHOT_DIR / f"{ts}-{name}.html").write_text(html, encoding="utf-8")
            parser_fn = PARSERS.get(name)
            report[name] = parser_fn(html, records) if parser_fn else []
            time.sleep(0.4)
        except Exception as exc:
            report[name] = f"ERROR: {exc}"

    after = json.dumps(records, ensure_ascii=False, sort_keys=True)
    changed = before != after
    if changed or args.force_timestamp:
        data["generatedAt"] = datetime.now(timezone(timedelta(hours=8))).isoformat(timespec="seconds")

    if args.write and (changed or args.force_timestamp):
        write_data(data)
    elif args.write:
        report["_write"] = "No price changes detected; data/prices.js left untouched."

    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
