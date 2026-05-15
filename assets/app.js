(function () {
  const data = window.PRICE_DATA;
  const els = {
    generatedAt: document.getElementById("generatedAt"),
    reviewCount: document.getElementById("reviewCount"),
    modelCount: document.getElementById("modelCount"),
    providerCount: document.getElementById("providerCount"),
    cheapestInput: document.getElementById("cheapestInput"),
    cheapestOutput: document.getElementById("cheapestOutput"),
    searchInput: document.getElementById("searchInput"),
    providerFilter: document.getElementById("providerFilter"),
    platformFilter: document.getElementById("platformFilter"),
    categoryFilter: document.getElementById("categoryFilter"),
    sortSelect: document.getElementById("sortSelect"),
    inputTokens: document.getElementById("inputTokens"),
    outputTokens: document.getElementById("outputTokens"),
    cacheRate: document.getElementById("cacheRate"),
    cacheRateText: document.getElementById("cacheRateText"),
    currencySelect: document.getElementById("currencySelect"),
    rateNote: document.getElementById("rateNote"),
    bestList: document.getElementById("bestList"),
    priceRows: document.getElementById("priceRows"),
    resultCount: document.getElementById("resultCount"),
    coverage: document.getElementById("coverage"),
    unitRows: document.getElementById("unitRows"),
    unitCount: document.getElementById("unitCount"),
    plans: document.getElementById("plans"),
    schedule: document.getElementById("schedule")
  };

  const state = {
    search: "",
    provider: "all",
    platform: "all",
    category: "all",
    sort: "total",
    currency: "CNY",
    inputTokens: 1000000,
    outputTokens: 200000,
    cacheRate: 0
  };

  function unique(values) {
    return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b, "zh-CN"));
  }

  function optionList(select, values, allLabel) {
    select.innerHTML = "";
    select.append(new Option(allLabel, "all"));
    values.forEach((value) => select.append(new Option(value, value)));
  }

  function toCny(record, value) {
    if (value == null) return null;
    return record.currency === "USD" ? value * data.currencyRates.USD_CNY : value;
  }

  function fromCny(value) {
    if (value == null) return null;
    return state.currency === "USD" ? value / data.currencyRates.USD_CNY : value;
  }

  function money(value) {
    if (value == null || Number.isNaN(value)) return "-";
    const prefix = state.currency === "USD" ? "$" : "¥";
    const digits = value >= 100 ? 0 : value >= 1 ? 2 : 4;
    return `${prefix}${value.toLocaleString("zh-CN", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    })}`;
  }

  function perMillion(record, field) {
    return money(fromCny(toCny(record, record[field])));
  }

  function effectiveInputCny(record) {
    const input = toCny(record, record.input);
    if (input == null) return null;
    const cacheHit = record.cacheHit == null ? input : toCny(record, record.cacheHit);
    return input * (1 - state.cacheRate) + cacheHit * state.cacheRate;
  }

  function estimateCny(record) {
    const input = effectiveInputCny(record);
    const output = toCny(record, record.output);
    const flat = toCny(record, record.flatPrice);
    if (input != null && output != null) {
      return (state.inputTokens / 1000000) * input + (state.outputTokens / 1000000) * output;
    }
    if (flat != null) {
      return ((state.inputTokens + state.outputTokens) / 1000000) * flat;
    }
    return null;
  }

  function recordText(record) {
    return [
      record.provider,
      record.platform,
      record.model,
      record.category,
      record.condition,
      record.notes,
      ...(record.tags || [])
    ]
      .join(" ")
      .toLowerCase();
  }

  function filteredRecords() {
    const search = state.search.trim().toLowerCase();
    return data.records
      .filter((record) => state.provider === "all" || record.provider === state.provider)
      .filter((record) => state.platform === "all" || record.platform === state.platform)
      .filter((record) => state.category === "all" || record.category === state.category)
      .filter((record) => !search || recordText(record).includes(search))
      .sort((a, b) => {
        if (state.sort === "provider") return `${a.provider}${a.model}`.localeCompare(`${b.provider}${b.model}`, "zh-CN");
        if (state.sort === "input") return (effectiveInputCny(a) ?? Infinity) - (effectiveInputCny(b) ?? Infinity);
        if (state.sort === "output") return (toCny(a, a.output) ?? toCny(a, a.flatPrice) ?? Infinity) - (toCny(b, b.output) ?? toCny(b, b.flatPrice) ?? Infinity);
        return (estimateCny(a) ?? Infinity) - (estimateCny(b) ?? Infinity);
      });
  }

  function statusClass(record) {
    if (record.confidence === "needs-review") return "review";
    if (record.status && record.status.includes("折扣")) return "discount";
    if (record.status && record.status.includes("下线")) return "deprecated";
    if (record.status && record.status.includes("关注")) return "watch";
    return "active";
  }

  function renderSummary(records) {
    const providers = unique(data.records.map((record) => `${record.provider} / ${record.platform}`));
    const reviewCount = (data.coverage || []).filter((item) => !String(item.status).includes("complete")).length;
    const cheapestInput = data.records
      .filter((record) => effectiveInputCny(record) != null)
      .sort((a, b) => effectiveInputCny(a) - effectiveInputCny(b))[0];
    const cheapestOutput = data.records
      .filter((record) => toCny(record, record.output) != null)
      .sort((a, b) => toCny(a, a.output) - toCny(b, b.output))[0];

    els.modelCount.textContent = data.records.length;
    els.providerCount.textContent = providers.length;
    els.reviewCount.textContent = `${reviewCount} 个来源需继续补解析`;
    els.cheapestInput.textContent = cheapestInput ? `${perMillion(cheapestInput, "input")}/M` : "-";
    els.cheapestOutput.textContent = cheapestOutput ? `${perMillion(cheapestOutput, "output")}/M` : "-";
    els.resultCount.textContent = `${records.length} 条结果`;
  }

  function renderBest(records) {
    const ranked = records.filter((record) => estimateCny(record) != null).slice(0, 3);
    els.bestList.innerHTML = ranked
      .map((record, index) => {
        const cost = money(fromCny(estimateCny(record)));
        return `
          <article class="best-card">
            <span>低成本候选 ${index + 1}</span>
            <strong>${cost}</strong>
            <div class="model-name">${record.model}</div>
            <span>${record.provider} / ${record.platform}</span>
          </article>
        `;
      })
      .join("");
  }

  function renderRows(records) {
    els.priceRows.innerHTML = records
      .map((record) => {
        const tags = (record.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("");
        const estimate = estimateCny(record) == null ? "-" : money(fromCny(estimateCny(record)));
        const input = record.flatPrice != null ? `${perMillion(record, "flatPrice")}/M 综合` : `${perMillion(record, "input")}/M`;
        const output = record.output == null ? "-" : `${perMillion(record, "output")}/M`;
        const cache = record.cacheHit == null ? "-" : `${perMillion(record, "cacheHit")}/M`;
        const source = `<a class="source-link" href="${record.sourceUrl}" target="_blank" rel="noreferrer">官方</a>`;
        return `
          <tr>
            <td>
              <div class="model-name">${record.model}</div>
              <div class="tag-row">${tags}</div>
              <div class="subtle">${record.context || ""}</div>
            </td>
            <td>${record.provider}<br><span class="subtle">${record.platform}</span></td>
            <td>${record.condition || "-"}<br><span class="subtle">${record.notes || ""}</span></td>
            <td>${input}</td>
            <td>${output}</td>
            <td>${cache}</td>
            <td><strong>${estimate}</strong></td>
            <td><span class="status ${statusClass(record)}">${record.status || "已收录"}</span></td>
            <td>${source}</td>
          </tr>
        `;
      })
      .join("");
  }

  function renderCoverage() {
    const coverage = data.coverage || [];
    els.coverage.innerHTML = coverage
      .map((item) => {
        const ok = String(item.status).includes("complete");
        const cls = ok ? "active" : "review";
        const source = item.sourceUrl ? `<a class="source-link" href="${item.sourceUrl}" target="_blank" rel="noreferrer">来源</a>` : "";
        return `
          <article class="coverage-card">
            <strong>${item.provider}</strong>
            <div class="coverage-meta">
              <span class="status ${cls}">${item.status}</span>
              <span class="tag">Token ${item.tokenRows || 0}</span>
              <span class="tag">单项 ${item.unitRows || 0}</span>
              ${source}
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderUnitRows() {
    const rows = data.unitRecords || [];
    els.unitCount.textContent = `${rows.length} 条`;
    els.unitRows.innerHTML = rows
      .map((row) => {
        const price = row.price == null ? row.unit : `${row.currency === "USD" ? "$" : "¥"}${row.price} ${row.unit}`;
        return `
          <tr>
            <td><strong>${row.model}</strong><br><span class="subtle">${row.provider} / ${row.platform}</span></td>
            <td>${row.service}</td>
            <td>${price}</td>
          </tr>
        `;
      })
      .join("");
  }

  function renderPlans() {
    els.plans.innerHTML = data.plans
      .map((plan) => `
        <article class="plan-card">
          <strong>${plan.name}</strong>
          <span class="subtle">${plan.provider}</span>
          <dl>
            <dt>价格</dt><dd>${plan.price}</dd>
            <dt>额度</dt><dd>${plan.quota}</dd>
            <dt>模型</dt><dd>${plan.models}</dd>
            <dt>限制</dt><dd>${plan.note}</dd>
          </dl>
        </article>
      `)
      .join("");
  }

  function renderSchedule() {
    els.schedule.innerHTML = data.schedule
      .map((item) => `<li><strong>${item.time}</strong><span>${item.task}</span></li>`)
      .join("");
  }

  function render() {
    const records = filteredRecords();
    els.cacheRateText.textContent = `${Math.round(state.cacheRate * 100)}%`;
    renderSummary(records);
    renderBest(records);
    renderRows(records);
  }

  function bind() {
    const update = (key, transform = (value) => value) => (event) => {
      state[key] = transform(event.target.value);
      render();
    };

    els.searchInput.addEventListener("input", update("search"));
    els.providerFilter.addEventListener("change", update("provider"));
    els.platformFilter.addEventListener("change", update("platform"));
    els.categoryFilter.addEventListener("change", update("category"));
    els.sortSelect.addEventListener("change", update("sort"));
    els.currencySelect.addEventListener("change", update("currency"));
    els.inputTokens.addEventListener("input", update("inputTokens", Number));
    els.outputTokens.addEventListener("input", update("outputTokens", Number));
    els.cacheRate.addEventListener("input", update("cacheRate", (value) => Number(value) / 100));
  }

  function init() {
    const generated = new Date(data.generatedAt);
    els.generatedAt.textContent = `数据版本：${generated.toLocaleString("zh-CN", { hour12: false })}`;
    els.rateNote.textContent = `USD/CNY ${data.currencyRates.USD_CNY}，${data.currencyRates.note}`;
    optionList(els.providerFilter, unique(data.records.map((record) => record.provider)), "全部厂商");
    optionList(els.platformFilter, unique(data.records.map((record) => record.platform)), "全部平台");
    optionList(els.categoryFilter, unique(data.records.map((record) => record.category)), "全部类型");
    renderPlans();
    renderSchedule();
    renderCoverage();
    renderUnitRows();
    bind();
    render();
  }

  init();
})();
