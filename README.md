# 国内大模型价格对比站

一个静态价格监控站，用于对比国内大模型 API 的官方直连价格、云平台聚合价格和订阅套餐。

## 本地预览

直接用浏览器打开：

```text
D:\Users\gsy\Documents\New project\index.html
```

也可以启动一个静态服务器：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 数据更新

价格数据位于 `data/prices.js`。采集脚本会从官方价格页重建目录，而不是只更新少量样本。

```powershell
python scripts/update_prices.py --write
```

GitHub Actions 工作流位于 `.github/workflows/update-prices.yml`，默认每 30 分钟轮询一次。脚本只有在价格数据发生变化时才改写 `data/prices.js`，避免无意义提交。

首次安装或 GitHub Actions 环境需要解析依赖：

```powershell
pip install -r requirements.txt
```

当前完整性口径：

- DeepSeek：官方价格表全量解析。
- MiniMax：官方按量 token 价格全量解析，图片/视频/语音等单项价格进入非 Token 报价区。
- 阿里云百炼：官方价格页中机器可读的 token 输入/输出价格表全量解析。
- 百度千帆：官方在线推理、批量推理、Embedding、Rerank、OCR token 价格表全量解析。
- 腾讯 TokenHub：官方动态价格页按语言模型、批量任务、多模态和单项价格收录。
- Kimi：官方首页公开的最新模型价格收录，模型列表页用于完整性核对。
- 火山方舟、智谱 BigModel、硅基流动：先在“官方覆盖状态”中标记为待补专用解析器，避免误标为完整。

## 免费公开部署

推荐阅读 [DEPLOYMENT.md](DEPLOYMENT.md)。最简单路径：

1. 推送到 GitHub 公开仓库。
2. 在仓库 Settings -> Pages 中选择 GitHub Actions。
3. 等待 `Deploy static site` 工作流生成公开访问地址。

Cloudflare Pages 也适合这个项目：连接 GitHub 仓库，Build command 留空，Output directory 填 `/`。

## 数据口径

- 默认展示每百万 tokens 的输入价、输出价、缓存命中价。
- 美元报价按页面内置汇率折算为人民币，用于横向比较；最终账单应以官方结算页面为准。
- 阶梯价、套餐价、限时折扣会保留在 `condition`、`status` 和 `notes` 字段中。
- 动态页面或控制台专属价格会显示在“官方覆盖状态”中，避免误当成完整自动采集结果。
