window.PRICE_DATA = {
  "generatedAt": "2026-05-15T19:48:41+08:00",
  "currencyRates": {
    "USD_CNY": 7.12,
    "note": "用于页面横向估算，最终以官方结算货币为准"
  },
  "records": [
    {
      "id": "deepseek-v4-flash-official",
      "provider": "DeepSeek",
      "platform": "官方 API",
      "model": "deepseek-v4-flash",
      "category": "文本/推理",
      "currency": "USD",
      "input": 0.14,
      "output": 0.28,
      "cacheHit": 0.0028,
      "condition": "统一 1M 上下文；支持思考与非思考模式",
      "context": "1M context, max output 384K",
      "status": "已收录",
      "sourceUrl": "https://api-docs.deepseek.com/quick_start/pricing",
      "notes": "deepseek-chat 与 deepseek-reasoner 为兼容别名，未来会弃用",
      "tags": [
        "官方直连",
        "缓存"
      ],
      "confidence": "verified"
    },
    {
      "id": "deepseek-v4-pro-official",
      "provider": "DeepSeek",
      "platform": "官方 API",
      "model": "deepseek-v4-pro",
      "category": "文本/推理",
      "currency": "USD",
      "input": 0.14,
      "output": 0.28,
      "cacheHit": 0.0028,
      "condition": "75% 折扣价，官方注明延长至 2026-05-31 15:59 UTC",
      "context": "1M context, max output 384K",
      "status": "限时折扣",
      "sourceUrl": "https://api-docs.deepseek.com/quick_start/pricing",
      "notes": "原价输入 $1.74/M，输出 $3.48/M",
      "tags": [
        "官方直连",
        "缓存",
        "折扣"
      ],
      "confidence": "verified"
    },
    {
      "id": "qwen3-max-bailian-cn-32k",
      "provider": "阿里云百炼",
      "platform": "官方 API",
      "model": "qwen3-max",
      "category": "文本/推理",
      "currency": "USD",
      "input": 0.359,
      "output": 1.434,
      "condition": "中国内地部署，0<Token<=32K",
      "context": "252K 阶梯上下文",
      "status": "已收录",
      "sourceUrl": "https://www.alibabacloud.com/help/zh/model-studio/model-pricing",
      "notes": "支持 Batch 半价与上下文缓存折扣，实际折扣以百炼控制台为准",
      "tags": [
        "官方直连",
        "阶梯价"
      ],
      "confidence": "verified"
    },
    {
      "id": "qwen3-max-bailian-cn-128k",
      "provider": "阿里云百炼",
      "platform": "官方 API",
      "model": "qwen3-max",
      "category": "文本/推理",
      "currency": "USD",
      "input": 0.574,
      "output": 2.294,
      "condition": "中国内地部署，32K<Token<=128K",
      "context": "252K 阶梯上下文",
      "status": "已收录",
      "sourceUrl": "https://www.alibabacloud.com/help/zh/model-studio/model-pricing",
      "notes": "支持 Batch 半价与上下文缓存折扣",
      "tags": [
        "官方直连",
        "阶梯价"
      ],
      "confidence": "verified"
    },
    {
      "id": "qwen-max-bailian-cn",
      "provider": "阿里云百炼",
      "platform": "官方 API",
      "model": "qwen-max",
      "category": "文本",
      "currency": "USD",
      "input": 0.345,
      "output": 1.377,
      "condition": "中国内地部署，无阶梯计价",
      "context": "百炼文本模型",
      "status": "已收录",
      "sourceUrl": "https://www.alibabacloud.com/help/zh/model-studio/model-pricing",
      "notes": "同价适用于 qwen-max-latest 与 qwen-max-2025-01-25",
      "tags": [
        "官方直连"
      ],
      "confidence": "verified"
    },
    {
      "id": "doubao-seed-code-volcengine",
      "provider": "火山方舟",
      "platform": "官方 API",
      "model": "doubao-seed-code",
      "category": "代码/多模态理解",
      "currency": "CNY",
      "input": 1.2,
      "output": 8,
      "condition": "官方页面显示起步价，具体阶梯需以模型价格页为准",
      "context": "256K context",
      "status": "关注复核",
      "sourceUrl": "https://www.volcengine.com/docs/82379/1544106?lang=zh",
      "notes": "火山文档为动态渲染，自动采集需要 Playwright 或控制台 API",
      "tags": [
        "官方直连",
        "动态页"
      ],
      "confidence": "needs-review"
    },
    {
      "id": "ernie-51-qianfan-32k",
      "provider": "百度千帆",
      "platform": "官方 API",
      "model": "ERNIE-5.1",
      "category": "文本/推理",
      "currency": "CNY",
      "input": 4,
      "output": 18,
      "condition": "输入<=32K",
      "context": "128K 阶梯上下文",
      "status": "已收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "百度页面单位为元/千 tokens，页面已换算为元/百万 tokens",
      "tags": [
        "官方直连",
        "阶梯价"
      ],
      "confidence": "verified"
    },
    {
      "id": "ernie-50-qianfan-32k",
      "provider": "百度千帆",
      "platform": "官方 API",
      "model": "ERNIE-5.0-Thinking",
      "category": "文本/推理",
      "currency": "CNY",
      "input": 6,
      "output": 24,
      "condition": "输入<=32K",
      "context": "128K 阶梯上下文",
      "status": "已收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "适用于 ERNIE-5.0 Thinking Preview/Latest/Exp",
      "tags": [
        "官方直连",
        "推理"
      ],
      "confidence": "verified"
    },
    {
      "id": "ernie-45-turbo-qianfan",
      "provider": "百度千帆",
      "platform": "官方 API",
      "model": "ERNIE-4.5-Turbo-32K",
      "category": "文本",
      "currency": "CNY",
      "input": 0.8,
      "output": 3.2,
      "cacheHit": 0.2,
      "condition": "32K 文本生成",
      "context": "32K context",
      "status": "已收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "搜索增强另计 0.004 元/次，页面未计入估算",
      "tags": [
        "官方直连",
        "缓存"
      ],
      "confidence": "verified"
    },
    {
      "id": "ernie-x1-turbo-qianfan",
      "provider": "百度千帆",
      "platform": "官方 API",
      "model": "ERNIE-X1-Turbo-32K",
      "category": "推理",
      "currency": "CNY",
      "input": 1.0,
      "output": 4.0,
      "condition": "深度思考，32K",
      "context": "32K context",
      "status": "已收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "深度思考模型，搜索增强另计",
      "tags": [
        "官方直连",
        "推理"
      ],
      "confidence": "verified"
    },
    {
      "id": "hy3-preview-tokenhub-16k",
      "provider": "腾讯混元",
      "platform": "TokenHub",
      "model": "Hy3 preview",
      "category": "文本/推理",
      "currency": "CNY",
      "input": 1.2,
      "output": 4,
      "cacheHit": 0.4,
      "condition": "输入长度 (0,16K)",
      "context": "256K context",
      "status": "已收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "腾讯 2026 年 4 月自研混元模型",
      "tags": [
        "云平台",
        "缓存",
        "阶梯价"
      ],
      "confidence": "verified"
    },
    {
      "id": "hy3-preview-tokenhub-32k",
      "provider": "腾讯混元",
      "platform": "TokenHub",
      "model": "Hy3 preview",
      "category": "文本/推理",
      "currency": "CNY",
      "input": 1.6,
      "output": 6.4,
      "cacheHit": 0.6,
      "condition": "输入长度 [16K,32K)",
      "context": "256K context",
      "status": "已收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "腾讯 2026 年 4 月自研混元模型",
      "tags": [
        "云平台",
        "缓存",
        "阶梯价"
      ],
      "confidence": "verified"
    },
    {
      "id": "hy20-think-tokenhub",
      "provider": "腾讯混元",
      "platform": "TokenHub",
      "model": "HY 2.0 Think",
      "category": "推理",
      "currency": "CNY",
      "input": 3.975,
      "output": 15.9,
      "condition": "输入长度 (0,32K]",
      "context": "128K 阶梯上下文",
      "status": "2026-06-10 下线",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "Token Plan 页面注明 HY 2.0 系列将于 2026-06-10 下线",
      "tags": [
        "云平台",
        "推理"
      ],
      "confidence": "verified"
    },
    {
      "id": "hunyuan-role-tokenhub",
      "provider": "腾讯混元",
      "platform": "TokenHub",
      "model": "Hunyuan-role",
      "category": "文本",
      "currency": "CNY",
      "input": 2.4,
      "output": 9.6,
      "condition": "无阶梯条件",
      "context": "角色对话",
      "status": "已收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "",
      "tags": [
        "云平台"
      ],
      "confidence": "verified"
    },
    {
      "id": "kimi-k26-official",
      "provider": "月之暗面 Kimi",
      "platform": "官方 API",
      "model": "kimi-k2.6",
      "category": "文本/视觉/推理",
      "currency": "CNY",
      "input": 6.5,
      "output": 27,
      "cacheHit": 1.1,
      "condition": "多模态模型，支持思考与非思考模式",
      "context": "256K context",
      "status": "已收录",
      "sourceUrl": "https://platform.kimi.com/docs/pricing/chat",
      "notes": "官网首页与价格文档显示 1M tokens 计价",
      "tags": [
        "官方直连",
        "缓存",
        "视觉"
      ],
      "confidence": "verified"
    },
    {
      "id": "kimi-k25-official",
      "provider": "月之暗面 Kimi",
      "platform": "官方 API",
      "model": "kimi-k2.5",
      "category": "文本/视觉/推理",
      "currency": "CNY",
      "input": 4,
      "output": 21,
      "cacheHit": 0.7,
      "condition": "多模态模型，支持思考与非思考模式",
      "context": "256K context",
      "status": "已收录",
      "sourceUrl": "https://platform.kimi.com/docs/pricing/chat-k25",
      "notes": "",
      "tags": [
        "官方直连",
        "缓存",
        "视觉"
      ],
      "confidence": "verified"
    },
    {
      "id": "kimi-k26-tokenhub",
      "provider": "月之暗面 Kimi",
      "platform": "腾讯 TokenHub",
      "model": "Kimi-K2.6",
      "category": "文本/推理",
      "currency": "CNY",
      "input": 6.5,
      "output": 27,
      "cacheHit": 1.1,
      "condition": "TokenHub 在线推理",
      "context": "256K context",
      "status": "已收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "第三方平台价与 Kimi 官方直连价一致时可作为冗余渠道比较",
      "tags": [
        "云平台",
        "缓存"
      ],
      "confidence": "verified"
    },
    {
      "id": "minimax-m27-official",
      "provider": "MiniMax",
      "platform": "官方 API",
      "model": "MiniMax-M2.7",
      "category": "代码/推理",
      "currency": "CNY",
      "input": 2.1,
      "output": 8.4,
      "cacheHit": 0.42,
      "cacheWrite": 2.625,
      "condition": "按量计费",
      "context": "约 200K context",
      "status": "已收录",
      "sourceUrl": "https://platform.minimaxi.com/docs/guides/pricing-paygo",
      "notes": "缓存写入另计，页面估算只使用缓存读取价",
      "tags": [
        "官方直连",
        "缓存",
        "代码"
      ],
      "confidence": "verified"
    },
    {
      "id": "minimax-m27-highspeed-official",
      "provider": "MiniMax",
      "platform": "官方 API",
      "model": "MiniMax-M2.7-highspeed",
      "category": "代码/推理",
      "currency": "CNY",
      "input": 4.2,
      "output": 16.8,
      "cacheHit": 0.42,
      "cacheWrite": 2.625,
      "condition": "高速版按量计费",
      "context": "约 200K context",
      "status": "已收录",
      "sourceUrl": "https://platform.minimaxi.com/docs/guides/pricing-paygo",
      "notes": "结果与标准版一致但速度更高",
      "tags": [
        "官方直连",
        "缓存",
        "高速"
      ],
      "confidence": "verified"
    },
    {
      "id": "glm-45-official",
      "provider": "智谱 BigModel",
      "platform": "官方 API",
      "model": "GLM-4.5",
      "category": "代码/推理",
      "currency": "CNY",
      "input": 0.8,
      "output": 2,
      "condition": "官方文档称 API 低至输入 0.8 元/M、输出 2 元/M",
      "context": "128K context, max output 96K",
      "status": "建议迁移 GLM-4.7",
      "sourceUrl": "https://docs.bigmodel.cn/cn/guide/models/text/glm-4.5",
      "notes": "文档注明 GLM-4.5/GLM-4.5-X 即将下线，建议选择 GLM-4.7",
      "tags": [
        "官方直连",
        "代码",
        "推理"
      ],
      "confidence": "verified"
    },
    {
      "id": "glm-4-plus-official-flat",
      "provider": "智谱 BigModel",
      "platform": "官方 API",
      "model": "GLM-4-Plus",
      "category": "文本",
      "currency": "CNY",
      "flatPrice": 5,
      "condition": "官方文档以单一价格展示，未拆分输入/输出",
      "context": "128K context",
      "status": "已收录",
      "sourceUrl": "https://docs.bigmodel.cn/cn/guide/models/text/glm-4",
      "notes": "综合价仅用于粗略比较，不与输入/输出拆分模型完全等价",
      "tags": [
        "官方直连",
        "综合价"
      ],
      "confidence": "verified"
    },
    {
      "id": "glm-5-tokenhub",
      "provider": "智谱 BigModel",
      "platform": "腾讯 TokenHub",
      "model": "GLM-5",
      "category": "文本/推理",
      "currency": "CNY",
      "input": 4,
      "output": 18,
      "cacheHit": 1,
      "condition": "输入长度 (0,32K]",
      "context": "200K 阶梯上下文",
      "status": "已收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "TokenHub 聚合价格",
      "tags": [
        "云平台",
        "缓存"
      ],
      "confidence": "verified"
    },
    {
      "id": "glm-51-tokenhub",
      "provider": "智谱 BigModel",
      "platform": "腾讯 TokenHub",
      "model": "GLM-5.1",
      "category": "文本/推理",
      "currency": "CNY",
      "input": 6,
      "output": 24,
      "cacheHit": 1.3,
      "condition": "输入长度 (0,32K]",
      "context": "200K 阶梯上下文",
      "status": "已收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "TokenHub 聚合价格",
      "tags": [
        "云平台",
        "缓存"
      ],
      "confidence": "verified"
    },
    {
      "id": "qwen3-235b-qianfan",
      "provider": "通义千问 Qwen",
      "platform": "百度千帆",
      "model": "Qwen3-235B-A22B-Instruct-2507",
      "category": "文本",
      "currency": "CNY",
      "input": 2,
      "output": 8,
      "condition": "千帆在线推理",
      "context": "千帆平台版本",
      "status": "已收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "第三方平台聚合价格",
      "tags": [
        "云平台"
      ],
      "confidence": "verified"
    },
    {
      "id": "qwen3-30b-qianfan",
      "provider": "通义千问 Qwen",
      "platform": "百度千帆",
      "model": "Qwen3-30B-A3B-Instruct-2507",
      "category": "文本",
      "currency": "CNY",
      "input": 0.75,
      "output": 3,
      "condition": "千帆在线推理",
      "context": "千帆平台版本",
      "status": "已收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "第三方平台聚合价格",
      "tags": [
        "云平台"
      ],
      "confidence": "verified"
    },
    {
      "id": "deepseek-v4-flash-tokenhub",
      "provider": "DeepSeek",
      "platform": "腾讯 TokenHub",
      "model": "DeepSeek-V4-Flash",
      "category": "文本/推理",
      "currency": "CNY",
      "input": 1,
      "output": 2,
      "cacheHit": 0.2,
      "condition": "TokenHub 在线推理",
      "context": "聚合平台",
      "status": "已收录",
      "sourceUrl": "https://cloud.tencent.com/document/product/1823/130055",
      "notes": "与官方美元价存在结算与汇率差异",
      "tags": [
        "云平台",
        "缓存"
      ],
      "confidence": "verified"
    },
    {
      "id": "deepseek-v4-pro-qianfan",
      "provider": "DeepSeek",
      "platform": "百度千帆",
      "model": "DeepSeek-V4-Pro",
      "category": "文本/推理",
      "currency": "CNY",
      "input": 12,
      "output": 24,
      "cacheHit": 1,
      "condition": "千帆在线推理",
      "context": "聚合平台",
      "status": "已收录",
      "sourceUrl": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya",
      "notes": "与 DeepSeek 官方限时美元折扣不同，应按渠道分别比较",
      "tags": [
        "云平台",
        "缓存"
      ],
      "confidence": "verified"
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
    },
    {
      "provider": "MiniMax",
      "name": "Token Plan Max 极速版",
      "price": "199 元/月",
      "quota": "M2.7-highspeed 4500 次请求/5 小时",
      "models": "M2.7-highspeed、Speech 2.8、image-01 等",
      "note": "适合高频交互，不适合用作后端批处理口径"
    }
  ],
  "schedule": [
    {
      "time": "每 30 分钟",
      "task": "准实时轮询官方页面，命中价格变化后自动更新数据文件"
    },
    {
      "time": "08:00",
      "task": "重点复核官方直连价格：DeepSeek、百炼、Kimi、MiniMax、智谱"
    },
    {
      "time": "18:00",
      "task": "抓取云平台聚合价格：千帆、TokenHub、火山方舟"
    },
    {
      "time": "23:30",
      "task": "生成 diff、标记异常波动、准备发布"
    }
  ]
};
