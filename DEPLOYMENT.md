# 免费公开部署方案

这个项目是纯静态网站，不需要数据库和后端服务即可公开访问。价格监控由 GitHub Actions 定时运行，数据变化后自动提交 `data/prices.js`，静态站会读取最新数据。

## 推荐方案：GitHub Pages

适合先上线 MVP，成本最低，配置也最少。

1. 在 GitHub 新建公开仓库。
2. 把本项目推送到仓库默认分支。
3. 打开仓库 `Settings -> Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main` 或 `master`，目录选择 `/ (root)`。
6. 保存后等待 Pages 生成公开 URL。
7. 打开 `Actions`，确认 `Update model prices` 工作流处于启用状态。

优点：免费、部署简单、和定时采集在同一个仓库里。

限制：GitHub Actions 的定时任务不是强实时，官方最短间隔是 5 分钟，实际执行可能延迟。当前项目默认每 30 分钟轮询一次，更适合价格监控场景。

## 备选方案：Cloudflare Pages

适合需要更快全球访问、绑定域名和更强缓存控制的场景。

1. 登录 Cloudflare Dashboard。
2. 进入 `Workers & Pages -> Create application -> Pages`。
3. 连接 GitHub 仓库。
4. Framework preset 选择 `None`。
5. Build command 留空。
6. Output directory 填 `/`。
7. 部署完成后会得到 `*.pages.dev` 免费域名。

项目根目录的 `_headers` 会在 Cloudflare Pages 上生效，让 HTML 和数据文件尽量不被长时间缓存。

## 备选方案：Vercel / Netlify

两者都可以托管这个静态站：

- Build command 留空。
- Output directory 填 `/`。
- 不需要设置环境变量。

如果只用 Vercel/Netlify 托管页面，仍建议保留 GitHub Actions 负责价格采集，因为采集脚本已经在仓库里配置好了。

## 自定义域名

推荐域名形态：

```text
prices.yourdomain.com
llm-price.yourdomain.com
```

GitHub Pages 和 Cloudflare Pages 都支持免费绑定自定义域名。Cloudflare Pages 对缓存和 DNS 管理更方便，适合后续做正式产品。

## 监控口径

免费方案下的“实时监控”建议定义为准实时轮询：

- 默认每 30 分钟抓取一次官方价格页。
- 只有解析出的价格发生变化时才提交数据。
- 动态页面、控制台登录后价格、异常波动会标记为需人工复核。
- 后续可以接入企业微信、飞书、Telegram 或邮件通知。
