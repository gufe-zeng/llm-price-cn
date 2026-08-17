window.PRICE_DATA = {
  "generatedAt": "2026-08-17T20:33:20+08:00",
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
      "provider": "<lambda>",
      "status": "ERROR: invalid literal for int() with base 10: '3\"'",
      "tokenRows": 0,
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
      "id": "deepseek-api-deepseek-v4-flash-openai-anthropic--56810baa9332",
      "provider": "DeepSeek",
      "platform": "官方 API",
      "model": "deepseek-v4-flash",
      "category": "文本/推理",
      "currency": "USD",
      "input": null,
      "output": 0.007,
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
