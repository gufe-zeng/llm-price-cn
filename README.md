# 国内大模型价格对比站

一个零依赖静态 MVP，用于对比国内大模型 API 的官方直连价格、云平台聚合价格和订阅套餐。

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

价格数据位于 `data/prices.js`。采集脚本会读取当前数据，尝试从官方页面抓取可稳定解析的价格，并保留来源与采集时间。

```powershell
python scripts/update_prices.py --write
```

GitHub Actions 工作流位于 `.github/workflows/update-prices.yml`，默认每 30 分钟轮询一次。脚本只有在价格数据发生变化时才改写 `data/prices.js`，避免无意义提交。

## 免费公开部署

推荐阅读 [DEPLOYMENT.md](DEPLOYMENT.md)。最简单路径：

1. 推送到 GitHub 公开仓库。
2. 在仓库 Settings -> Pages 中选择从 `main` 或 `master` 分支根目录发布。
3. 等待 GitHub Pages 生成公开访问地址。

Cloudflare Pages 也适合这个项目：连接 GitHub 仓库，Build command 留空，Output directory 填 `/`。

## 数据口径

- 默认展示每百万 tokens 的输入价、输出价、缓存命中价。
- 美元报价按页面内置汇率折算为人民币，用于横向比较；最终账单应以官方结算页面为准。
- 阶梯价、套餐价、限时折扣会保留在 `condition`、`status` 和 `notes` 字段中。
- 动态页面或控制台专属价格会标记为 `needs-review`，避免误当成稳定自动采集结果。
