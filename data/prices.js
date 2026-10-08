window.PRICE_DATA = {
  "generatedAt": "2026-10-09T00:44:01+08:00",
  "currencyRates": {
    "USD_CNY": 7.12,
    "note": "用于页面横向估算，最终以官方结算货币为准"
  },
  "coverage": [
    {
      "provider": "DeepSeek",
      "status": "complete",
      "tokenRows": 2,
      "unitRows": 0
    },
    {
      "provider": "<lambda>",
      "status": "ERROR: single positional indexer is out-of-bounds",
      "tokenRows": 0,
      "unitRows": 0
    },
    {
      "provider": "阿里云百炼",
      "status": "complete-machine-readable",
      "tokenRows": 0,
      "unitRows": 0
    },
    {
      "provider": "百度千帆",
      "status": "complete-machine-readable",
      "tokenRows": 56,
      "unitRows": 0
    },
    {
      "provider": "腾讯 TokenHub",
      "status": "complete-from-official-page",
      "tokenRows": 31,
      "unitRows": 7
    },
    {
      "provider": "月之暗面 Kimi",
      "status": "homepage-current-models",
      "tokenRows": 1,
      "unitRows": 0
    },
    {
      "provider": "火山方舟",
      "status": "dynamic-page-pending-playwright",
      "tokenRows": 0,
      "unitRows": 0,
      "sourceUrl": "https://www.volcengine.com/docs/82379/1544106?lang=zh"
    },
    {
      "provider": "智谱 BigModel",
      "status": "model-docs-partial; price-center-needs-dedicated-parser",
      "tokenRows": 0,
      "unitRows": 0,
      "sourceUrl": "https://docs.bigmodel.cn/"
    },
    {
      "provider": "硅基流动 SiliconFlow",
      "status": "pricing-page-dynamic; public list parser pending",
      "tokenRows": 0,
      "unitRows": 0,
      "sourceUrl": "https://www2.siliconflow.cn/pricing"
    }
  ],
  "records": [
    {
      "id": "deepseek-api-model-openai-anthropic-api-none-non-8ccd2c8f1843",
      "provider": "DeepSeek",
      "platform": "官方 API",
      "model": "MODEL",
      "category": "文本/推理",
      "currency": "USD",
      "input": null,
      "output": null,
      "condition": "官方 OpenAI/Anthropic 兼容 API",
      "context": "CONTEXT LENGTH context",
      "status": "官方收录",
      "sourceUrl": "https://api-docs.deepseek.com/quick_start/pricing",
      "notes": "",
      "tags": [
        "官方 API",
        "缓存"
      ],
      "confidence": "official-table"
    },
    {
      "id": "deepseek-api-deepseek-flash-1-openai-anthropic-a-9a64d1749e16",
      "provider": "DeepSeek",
      "platform": "官方 API",
      "model": "deepseek-flash(1)",
      "category": "文本/推理",
      "currency": "USD",
      "input": null,
      "output": null,
      "condition": "官方 OpenAI/Anthropic 兼容 API",
      "context": "1M context",
      "status": "官方收录",
      "sourceUrl": "https://api-docs.deepseek.com/quick_start/pricing",
      "notes": "",
      "tags": [
        "官方 API",
        "缓存"
      ],
      "confidence": "official-table"
    },
    {
      "id": "kimi-api-kimi-k2-6-6-5-27-0-none-442038935fc1",
      "provider": "月之暗面 Kimi",
      "platform": "官方 API",
      "model": "kimi-k2.6",
      "category": "文本/视觉/推理",
      "currency": "CNY",
      "input": 6.5,
      "output": 27.0,
      "condition": "官方首页最新模型价格",
      "context": "256K",
      "status": "官方收录",
      "sourceUrl": "https://platform.kimi.com/",
      "notes": "",
      "tags": [
        "官方 API",
        "缓存"
      ],
      "confidence": "official-homepage"
    },
    {
      "id": "api-deepseek-ocr-0-3-1-2-none-77a64f9eab59",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "DeepSeek-OCR",
      "category": "DeepSeek-OCR",
      "currency": "CNY",
      "input": 0.3,
      "output": 1.2,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-deepseek-v4-flash-0731-22-00-8-00-none-4-5-0-490f4e8f3b7b",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "DeepSeek-V4-Flash-0731",
      "category": "DeepSeek-V4-Flash-0731（命中缓存限时价格生效日期：9月9日-10月30日）",
      "currency": "CNY",
      "input": null,
      "output": 4.5,
      "cacheHit": 0.05,
      "condition": "空闲时段：22:00-次日8:00",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-deepseek-v4-flash-0731-8-00-22-00-none-9-0-0-b47126be3414",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "DeepSeek-V4-Flash-0731",
      "category": "DeepSeek-V4-Flash-0731（命中缓存限时价格生效日期：9月9日-10月30日）",
      "currency": "CNY",
      "input": null,
      "output": 9.0,
      "cacheHit": 0.1,
      "condition": "高峰时段：8:00-22:00",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-deepseek-v4-pro-12-0-24-0-1-0-863bea4b2be2",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "DeepSeek-V4-Pro",
      "category": "DeepSeek-V4-Pro",
      "currency": "CNY",
      "input": 12.0,
      "output": 24.0,
      "cacheHit": 1.0,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-deepseek-v4-1-flash-22-00-8-00-none-4-0-0-02-5c7b62ce02bf",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "DeepSeek-V4.1-Flash",
      "category": "DeepSeek-V4.1-Flash",
      "currency": "CNY",
      "input": null,
      "output": 4.0,
      "cacheHit": 0.02,
      "condition": "空闲时段：22:00-次日8:00",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-deepseek-v4-1-flash-8-00-22-00-2-0-8-0-0-04-30fef45cace2",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "DeepSeek-V4.1-Flash",
      "category": "DeepSeek-V4.1-Flash",
      "currency": "CNY",
      "input": 2.0,
      "output": 8.0,
      "cacheHit": 0.04,
      "condition": "高峰时段：8:00-22:00",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-4-5-turbo-128k-preview-0-8-3-2-0-2-2e40441b4bc8",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-4.5-Turbo-128K-Preview",
      "category": "ERNIE 4.5 Turbo",
      "currency": "CNY",
      "input": 0.8,
      "output": 3.2,
      "cacheHit": 0.2,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-4-5-turbo-20260402-0-8-3-2-0-2-d5d90ad7591b",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-4.5-Turbo-20260402",
      "category": "ERNIE 4.5 Turbo",
      "currency": "CNY",
      "input": 0.8,
      "output": 3.2,
      "cacheHit": 0.2,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-4-5-turbo-32k-0-8-3-2-0-2-c3ca691b071d",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-4.5-Turbo-32K",
      "category": "ERNIE 4.5 Turbo",
      "currency": "CNY",
      "input": 0.8,
      "output": 3.2,
      "cacheHit": 0.2,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-4-5-turbo-vl-3-0-9-0-0-75-459d622e272a",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-4.5-Turbo-VL",
      "category": "ERNIE 4.5 Turbo VL",
      "currency": "CNY",
      "input": 3.0,
      "output": 9.0,
      "cacheHit": 0.75,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-4-5-turbo-vl-32k-3-0-9-0-0-75-b291a49c0ef8",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-4.5-Turbo-VL-32K",
      "category": "ERNIE 4.5 Turbo VL",
      "currency": "CNY",
      "input": 3.0,
      "output": 9.0,
      "cacheHit": 0.75,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-0-32k-128k-40-0-none-none-8991792d6318",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.0",
      "category": "ERNIE 5.0",
      "currency": "CNY",
      "input": 40.0,
      "output": null,
      "condition": "32k<输入=<128k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-0-32k-24-0-none-none-0ad26ae1dac9",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.0",
      "category": "ERNIE 5.0",
      "currency": "CNY",
      "input": 24.0,
      "output": null,
      "condition": "输入=<32k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-0-thinking-exp-32k-128k-40-0-none-no-50d7a5f10cc2",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.0-Thinking-Exp",
      "category": "ERNIE 5.0",
      "currency": "CNY",
      "input": 40.0,
      "output": null,
      "condition": "32k<输入=<128k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-0-thinking-exp-32k-24-0-none-none-06a84af67db9",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.0-Thinking-Exp",
      "category": "ERNIE 5.0",
      "currency": "CNY",
      "input": 24.0,
      "output": null,
      "condition": "输入=<32k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-0-thinking-latest-32k-128k-40-0-none-7247e87d456e",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.0-Thinking-Latest",
      "category": "ERNIE 5.0",
      "currency": "CNY",
      "input": 40.0,
      "output": null,
      "condition": "32k<输入=<128k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-0-thinking-latest-32k-24-0-none-none-00e0b6de66aa",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.0-Thinking-Latest",
      "category": "ERNIE 5.0",
      "currency": "CNY",
      "input": 24.0,
      "output": null,
      "condition": "输入=<32k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-0-thinking-preview-32k-128k-40-0-non-6624c4d0cc8d",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.0-Thinking-Preview",
      "category": "ERNIE 5.0",
      "currency": "CNY",
      "input": 40.0,
      "output": null,
      "condition": "32k<输入=<128k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-0-thinking-preview-32k-24-0-none-non-039b6141646f",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.0-Thinking-Preview",
      "category": "ERNIE 5.0",
      "currency": "CNY",
      "input": 24.0,
      "output": null,
      "condition": "输入=<32k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-1-32k-128k-22-0-none-none-c179105be286",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.1",
      "category": "ERNIE 5.1",
      "currency": "CNY",
      "input": 22.0,
      "output": null,
      "condition": "32k<输入<=128k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-5-1-32k-18-0-none-none-38e83eced85d",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-5.1",
      "category": "ERNIE 5.1",
      "currency": "CNY",
      "input": 18.0,
      "output": null,
      "condition": "输入<=32k",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-x1-1-preview-1-0-4-0-none-2177fbb231ec",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "ERNIE-X1.1-Preview（即将下线）",
      "category": "ERNIE X1.1",
      "currency": "CNY",
      "input": 1.0,
      "output": 4.0,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-embedding-v1-0-5-none-none-42fc04e06448",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Embedding-V1",
      "category": "Embedding-V1",
      "currency": "CNY",
      "input": 0.5,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-glm-5-1-token-0-32k-6-0-24-0-1-3-5356fe0d1307",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5.1",
      "category": "GLM-5.1",
      "currency": "CNY",
      "input": 6.0,
      "output": 24.0,
      "cacheHit": 1.3,
      "condition": "输入Token数：[0,32k)",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-glm-5-1-token-32k-200k-8-0-28-0-2-0-bffe2c90dedc",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5.1",
      "category": "GLM-5.1",
      "currency": "CNY",
      "input": 8.0,
      "output": 28.0,
      "cacheHit": 2.0,
      "condition": "输入Token数：（32k，200k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-glm-5-2-8-0-28-0-2-0-75eda7a658e6",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5.2",
      "category": "GLM-5.2",
      "currency": "CNY",
      "input": 8.0,
      "output": 28.0,
      "cacheHit": 2.0,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-glm-5-3-8-0-28-0-2-0-2283589de67d",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5.3",
      "category": "GLM-5.3",
      "currency": "CNY",
      "input": 8.0,
      "output": 28.0,
      "cacheHit": 2.0,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-glm-5-3-flash-0-8-2-8-0-23-a771184918e8",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5.3-Flash",
      "category": "GLM-5.3-Flash",
      "currency": "CNY",
      "input": 0.8,
      "output": 2.8,
      "cacheHit": 0.23,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-glm-5-token-0-32k-4-0-18-0-1-0-d5bcfb5ac0e3",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5（即将下线）",
      "category": "GLM-5",
      "currency": "CNY",
      "input": 4.0,
      "output": 18.0,
      "cacheHit": 1.0,
      "condition": "输入Token数：[0,32k)",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-glm-5-token-32k-200k-6-0-22-0-1-5-3bd38c98abc8",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5（即将下线）",
      "category": "GLM-5",
      "currency": "CNY",
      "input": 6.0,
      "output": 22.0,
      "cacheHit": 1.5,
      "condition": "输入Token数：（32k，200k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-internvl3-38b-8-0-24-0-none-eb1d6e24ddfc",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "InternVL3-38B",
      "category": "InternVL3",
      "currency": "CNY",
      "input": 8.0,
      "output": 24.0,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-kimi-k2-6-6-5-27-0-1-1-86b6338561e4",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Kimi-K2.6（即将下线）",
      "category": "Kimi-K2.6",
      "currency": "CNY",
      "input": 6.5,
      "output": 27.0,
      "cacheHit": 1.1,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qianfan-ocr-0-45-1-8-none-c824220d33ed",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qianfan-OCR",
      "category": "Qianfan-OCR",
      "currency": "CNY",
      "input": 0.45,
      "output": 1.8,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-embedding-0-6b-0-5-none-none-a720782a5933",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3-Embedding-0.6B",
      "category": "Qwen3-Embedding-0.6B",
      "currency": "CNY",
      "input": 0.5,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-embedding-4b-0-5-none-none-691240976226",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3-Embedding-4B",
      "category": "Qwen3-Embedding-4B",
      "currency": "CNY",
      "input": 0.5,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-embedding-8b-0-5-none-none-9b0262e7b7f0",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3-Embedding-8B",
      "category": "Qwen3-Embedding-8B",
      "currency": "CNY",
      "input": 0.5,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-reranker-0-6b-0-8-none-none-ad7be00f281c",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3-Reranker-0.6B",
      "category": "Qwen3-Reranker-0.6B",
      "currency": "CNY",
      "input": 0.8,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-reranker-4b-0-8-none-none-18cbe782244a",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3-Reranker-4B",
      "category": "Qwen3-Reranker-4B",
      "currency": "CNY",
      "input": 0.8,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-reranker-8b-0-8-none-none-6ee25c00d565",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3-Reranker-8B",
      "category": "Qwen3-Reranker-8B",
      "currency": "CNY",
      "input": 0.8,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-5-122b-a10b-token-128k-256-2-0-16-0-no-015e71d096b5",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3.5-122B-A10B",
      "category": "Qwen3.5",
      "currency": "CNY",
      "input": 2.0,
      "output": 16.0,
      "condition": "输入Token数：(128k,256]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-5-122b-a10b-token-0-128k-0-8-6-4-none-37b1e94b3de5",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3.5-122B-A10B",
      "category": "Qwen3.5",
      "currency": "CNY",
      "input": 0.8,
      "output": 6.4,
      "condition": "输入Token数：[0,128k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-5-27b-token-128k-256-1-8-14-4-none-811afc9c5f1a",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3.5-27B",
      "category": "Qwen3.5",
      "currency": "CNY",
      "input": 1.8,
      "output": 14.4,
      "condition": "输入Token数：(128k,256]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-5-27b-token-0-128k-0-6-4-8-none-d974fb8604a2",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3.5-27B",
      "category": "Qwen3.5",
      "currency": "CNY",
      "input": 0.6,
      "output": 4.8,
      "condition": "输入Token数：[0,128k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-5-35b-a3b-token-128k-256-1-6-12-8-none-80898bca115a",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3.5-35B-A3B",
      "category": "Qwen3.5",
      "currency": "CNY",
      "input": 1.6,
      "output": 12.8,
      "condition": "输入Token数：(128k,256]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-5-35b-a3b-token-0-128k-0-4-3-2-none-33ca17d03dfa",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3.5-35B-A3B",
      "category": "Qwen3.5",
      "currency": "CNY",
      "input": 0.4,
      "output": 3.2,
      "condition": "输入Token数：[0,128k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-5-397b-a17b-token-128k-256-3-0-18-0-no-d55acc75eadd",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3.5-397B-A17B",
      "category": "Qwen3.5",
      "currency": "CNY",
      "input": 3.0,
      "output": 18.0,
      "condition": "输入Token数：(128k,256]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-qwen3-5-397b-a17b-token-0-128k-1-2-7-2-none-174f90322069",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "Qwen3.5-397B-A17B",
      "category": "Qwen3.5",
      "currency": "CNY",
      "input": 1.2,
      "output": 7.2,
      "condition": "输入Token数：[0,128k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-bce-reranker-base-0-5-none-none-77486972ede4",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "bce-reranker-base",
      "category": "bce-reranker-base",
      "currency": "CNY",
      "input": 0.5,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-bge-large-en-0-5-none-none-4187e1a91c89",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "bge-large-en",
      "category": "bge-large-en",
      "currency": "CNY",
      "input": 0.5,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-bge-large-zh-0-5-none-none-5e999e2cc451",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "bge-large-zh",
      "category": "bge-large-zh",
      "currency": "CNY",
      "input": 0.5,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-tao-8k-0-5-none-none-4012d445f332",
      "provider": "百度千帆",
      "platform": "官方 API - 在线推理",
      "model": "tao-8k",
      "category": "tao-8k",
      "currency": "CNY",
      "input": 0.5,
      "output": null,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-4-5-turbo-128k-preview-0-32-1-28-none-d96462da4d38",
      "provider": "百度千帆",
      "platform": "官方 API - 批量推理",
      "model": "ERNIE-4.5-Turbo-128K-Preview",
      "category": "ERNIE 4.5 Turbo",
      "currency": "CNY",
      "input": 0.32,
      "output": 1.28,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-4-5-turbo-32k-0-32-1-28-none-0280a5dd0036",
      "provider": "百度千帆",
      "platform": "官方 API - 批量推理",
      "model": "ERNIE-4.5-Turbo-32K",
      "category": "ERNIE 4.5 Turbo",
      "currency": "CNY",
      "input": 0.32,
      "output": 1.28,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-4-5-turbo-vl-1-2-3-6-none-80584371dc5b",
      "provider": "百度千帆",
      "platform": "官方 API - 批量推理",
      "model": "ERNIE-4.5-Turbo-VL",
      "category": "ERNIE 4.5 Turbo VL",
      "currency": "CNY",
      "input": 1.2,
      "output": 3.6,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-ernie-4-5-turbo-vl-32k-1-2-3-6-none-36d98f420dbc",
      "provider": "百度千帆",
      "platform": "官方 API - 批量推理",
      "model": "ERNIE-4.5-Turbo-VL-32K",
      "category": "ERNIE 4.5 Turbo VL",
      "currency": "CNY",
      "input": 1.2,
      "output": 3.6,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "api-internvl3-38b-3-2-9-6-none-916a3bd7a81a",
      "provider": "百度千帆",
      "platform": "官方 API - 批量推理",
      "model": "InternVL3-38B",
      "category": "InternVL3",
      "currency": "CNY",
      "input": 3.2,
      "output": 9.6,
      "condition": "无阶梯计价",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "",
      "tags": [
        "官方 API",
        "官方表格全量"
      ],
      "confidence": "official-table"
    },
    {
      "id": "tokenhub-api-deepseek-v4-flash-1-2-0-2-9b7cc2be0485",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "DeepSeek-V4-Flash",
      "category": "语言模型",
      "currency": "CNY",
      "input": 1,
      "output": 2,
      "cacheHit": 0.2,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-deepseek-v4-pro-12-24-1-71588f0f51ee",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "DeepSeek-V4-Pro",
      "category": "语言模型",
      "currency": "CNY",
      "input": 12,
      "output": 24,
      "cacheHit": 1,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-deepseek-r1-0528-4-16-none-642ff8fa8908",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Deepseek-r1-0528",
      "category": "语言模型",
      "currency": "CNY",
      "input": 4,
      "output": 16,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-deepseek-v3-0324-2-8-none-f4d72fa35304",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Deepseek-v3-0324",
      "category": "语言模型",
      "currency": "CNY",
      "input": 2,
      "output": 8,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-deepseek-v3-1-4-12-none-e0b8cd159cc6",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Deepseek-v3.1",
      "category": "语言模型",
      "currency": "CNY",
      "input": 4,
      "output": 12,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-deepseek-v3-2-2-3-none-4f5a06590216",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Deepseek-v3.2",
      "category": "语言模型",
      "currency": "CNY",
      "input": 2,
      "output": 3,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-32k-6-22-1-5-d64f5cd656c4",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5",
      "category": "语言模型",
      "currency": "CNY",
      "input": 6,
      "output": 22,
      "cacheHit": 1.5,
      "condition": "输入长度 32k+",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-0-32k-4-18-1-1913d3f0a15e",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5",
      "category": "语言模型",
      "currency": "CNY",
      "input": 4,
      "output": 18,
      "cacheHit": 1,
      "condition": "输入长度（0, 32k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-turbo-32k-7-26-1-8-13309701c5a7",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5-Turbo",
      "category": "语言模型",
      "currency": "CNY",
      "input": 7,
      "output": 26,
      "cacheHit": 1.8,
      "condition": "输入长度 32k+",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-turbo-0-32k-5-22-1-2-e338803d2587",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5-Turbo",
      "category": "语言模型",
      "currency": "CNY",
      "input": 5,
      "output": 22,
      "cacheHit": 1.2,
      "condition": "输入长度（0, 32k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-1-32k-8-28-2-1f81859102c8",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5.1",
      "category": "语言模型",
      "currency": "CNY",
      "input": 8,
      "output": 28,
      "cacheHit": 2,
      "condition": "输入长度 32k+",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-1-0-32k-6-24-1-3-551798ea10c9",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5.1",
      "category": "语言模型",
      "currency": "CNY",
      "input": 6,
      "output": 24,
      "cacheHit": 1.3,
      "condition": "输入长度（0, 32k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5v-turbo-32k-7-26-1-8-2ae5a589774c",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5V-Turbo",
      "category": "语言模型",
      "currency": "CNY",
      "input": 7,
      "output": 26,
      "cacheHit": 1.8,
      "condition": "输入长度 32k+",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5v-turbo-0-32k-5-22-1-2-fd60c5ed2a31",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "GLM-5V-Turbo",
      "category": "语言模型",
      "currency": "CNY",
      "input": 5,
      "output": 22,
      "cacheHit": 1.2,
      "condition": "输入长度（0, 32k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-hy-2-0-instruct-0-32k-3-18-7-95-non-8aa0e7b4b0a0",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "HY 2.0 Instruct",
      "category": "语言模型",
      "currency": "CNY",
      "input": 3.18,
      "output": 7.95,
      "condition": "输入长度（0, 32k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-hy-2-0-instruct-32k-128k-4-505-11-1-69ad2f980eba",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "HY 2.0 Instruct",
      "category": "语言模型",
      "currency": "CNY",
      "input": 4.505,
      "output": 11.13,
      "condition": "输入长度（32k, 128k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-hy-2-0-think-0-32k-3-975-15-9-none-31b926c34e39",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "HY 2.0 Think",
      "category": "语言模型",
      "currency": "CNY",
      "input": 3.975,
      "output": 15.9,
      "condition": "输入长度（0, 32k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-hy-2-0-think-32k-128k-5-3-21-2-none-75bc84642832",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "HY 2.0 Think",
      "category": "语言模型",
      "currency": "CNY",
      "input": 5.3,
      "output": 21.2,
      "condition": "输入长度（32k, 128k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-hunyuan-role-2-4-9-6-none-ee05d9f3912a",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Hunyuan-role",
      "category": "语言模型",
      "currency": "CNY",
      "input": 2.4,
      "output": 9.6,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-hy3-preview-16k-32k-1-6-6-4-0-6-71f0f9f71797",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Hy3 preview",
      "category": "语言模型",
      "currency": "CNY",
      "input": 1.6,
      "output": 6.4,
      "cacheHit": 0.6,
      "condition": "输入长度 [16k, 32k）",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-hy3-preview-32k-2-8-0-8-1694cfd21ee0",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Hy3 preview",
      "category": "语言模型",
      "currency": "CNY",
      "input": 2,
      "output": 8,
      "cacheHit": 0.8,
      "condition": "输入长度 [32k+)",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-hy3-preview-0-16k-1-2-4-0-4-f32390a6ed3e",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Hy3 preview",
      "category": "语言模型",
      "currency": "CNY",
      "input": 1.2,
      "output": 4,
      "cacheHit": 0.4,
      "condition": "输入长度（0, 16k）",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-kimi-k2-5-4-21-0-7-1d0cc21db27e",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Kimi-K2.5",
      "category": "语言模型",
      "currency": "CNY",
      "input": 4,
      "output": 21,
      "cacheHit": 0.7,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-kimi-k2-6-6-5-27-1-1-db76d97cf55a",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "Kimi-K2.6",
      "category": "语言模型",
      "currency": "CNY",
      "input": 6.5,
      "output": 27,
      "cacheHit": 1.1,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-minimax-m2-5-2-1-8-4-0-21-c974685c40c1",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "MiniMax-M2.5",
      "category": "语言模型",
      "currency": "CNY",
      "input": 2.1,
      "output": 8.4,
      "cacheHit": 0.21,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-minimax-m2-7-2-1-8-4-0-42-1684bf5cede0",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "MiniMax-M2.7",
      "category": "语言模型",
      "currency": "CNY",
      "input": 2.1,
      "output": 8.4,
      "cacheHit": 0.42,
      "condition": "-",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "官方价格页"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-yt-vita-1-2-3-5-none-2eea54f33282",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 在线推理",
      "model": "YT-VITA",
      "category": "多模态理解",
      "currency": "CNY",
      "input": 1.2,
      "output": 3.5,
      "condition": "多模态理解模型",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-32k-3-11-0-75-4d9a75327d75",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 批量推理",
      "model": "GLM-5",
      "category": "语言模型",
      "currency": "CNY",
      "input": 3,
      "output": 11,
      "cacheHit": 0.75,
      "condition": "输入长度 32k+",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "批量价"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-0-32k-2-9-0-5-25104c1983af",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 批量推理",
      "model": "GLM-5",
      "category": "语言模型",
      "currency": "CNY",
      "input": 2,
      "output": 9,
      "cacheHit": 0.5,
      "condition": "输入长度（0, 32k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "批量价"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-1-32k-4-14-1-f90dfc0f6051",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 批量推理",
      "model": "GLM-5.1",
      "category": "语言模型",
      "currency": "CNY",
      "input": 4,
      "output": 14,
      "cacheHit": 1,
      "condition": "输入长度 32k+",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "批量价"
      ],
      "confidence": "official-dynamic-page"
    },
    {
      "id": "tokenhub-api-glm-5-1-0-32k-3-12-0-65-daea4269de97",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API - 批量推理",
      "model": "GLM-5.1",
      "category": "语言模型",
      "currency": "CNY",
      "input": 3,
      "output": 12,
      "cacheHit": 0.65,
      "condition": "输入长度（0, 32k]",
      "context": "",
      "status": "官方收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "TokenHub",
        "批量价"
      ],
      "confidence": "official-dynamic-page"
    }
  ],
  "unitRecords": [
    {
      "id": "tokenhub-api-hy-3d-3-0-3d-none-15-60-1-0-12-8fab19f9fd92",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API",
      "model": "HY-3D-3.0",
      "service": "3D 生成",
      "price": null,
      "unit": "15-60积分/次; 1 积分=0.12 元",
      "currency": "CNY",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "confidence": "official-table"
    },
    {
      "id": "tokenhub-api-hy-3d-3-1-3d-none-15-60-1-0-12-f4111d11b851",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API",
      "model": "HY-3D-3.1",
      "service": "3D 生成",
      "price": null,
      "unit": "15-60积分/次; 1 积分=0.12 元",
      "currency": "CNY",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "confidence": "official-table"
    },
    {
      "id": "tokenhub-api-hy-3d-express-3d-none-15-25-1-0-12-02014bd25aaf",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API",
      "model": "HY-3D-Express",
      "service": "3D 生成",
      "price": null,
      "unit": "15-25积分/次; 1 积分=0.12 元",
      "currency": "CNY",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "confidence": "official-table"
    },
    {
      "id": "tokenhub-api-hy-image-lite-0-099-c4cddb8d0f33",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API",
      "model": "HY-Image-Lite",
      "service": "图像生成",
      "price": 0.099,
      "unit": "元/张",
      "currency": "CNY",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "confidence": "official-table"
    },
    {
      "id": "tokenhub-api-hy-image-v3-0-0-2-51e264b69c8f",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API",
      "model": "HY-Image-V3.0",
      "service": "图像生成",
      "price": 0.2,
      "unit": "元/张",
      "currency": "CNY",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "confidence": "official-table"
    },
    {
      "id": "tokenhub-api-hy-video-1-5-1-5-1-1-2-1616609fa4b9",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API",
      "model": "HY-Video-1.5",
      "service": "视频生成",
      "price": 1.5,
      "unit": "积分/次; 1 积分=1.2 元",
      "currency": "CNY",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "confidence": "official-table"
    },
    {
      "id": "tokenhub-api-yt-video-2-0-none-480p-2-720p-1080p-29b59e0155f9",
      "provider": "腾讯 TokenHub",
      "platform": "官方 API",
      "model": "YT-Video-2.0",
      "service": "视频生成",
      "price": null,
      "unit": "480p 2积分/次; 720p/1080p 5积分/次",
      "currency": "CNY",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "confidence": "official-table"
    }
  ],
  "plans": [
    {
      "provider": "腾讯 TokenHub",
      "name": "通用 Token Plan Lite",
      "price": "39 元/月",
      "quota": "3500 万 tokens/月",
      "models": "MiniMax-M2.7、GLM-5、Kimi-K2.5、HY 2.0 等",
      "note": "仅限指定 AI 工具场景，官方禁止非交互式批量 API 调用"
    },
    {
      "provider": "腾讯 TokenHub",
      "name": "Hy Token Plan Standard",
      "price": "78 元/月",
      "quota": "1 亿 tokens/月",
      "models": "Hy3 preview",
      "note": "套餐包输入/输出/缓存统一扣减"
    },
    {
      "provider": "MiniMax",
      "name": "Token Plan Plus",
      "price": "49 元/月",
      "quota": "M2.7 1500 次请求/5 小时",
      "models": "M2.7、Speech 2.8、image-01 等",
      "note": "请求制套餐，不等价于按量 token 单价"
    }
  ],
  "schedule": [
    {
      "time": "每 30 分钟",
      "task": "从官方价格页重建全量 token 报价目录"
    },
    {
      "time": "08:00",
      "task": "复核动态页面和不支持 HTML 表格的官方来源"
    },
    {
      "time": "18:00",
      "task": "检查云平台聚合价格：千帆、TokenHub、火山方舟"
    },
    {
      "time": "23:30",
      "task": "生成 diff、标记异常波动、准备发布"
    }
  ]
};
