# 部署指南：Cloudflare Pages（Git 集成，www.odestech.cn）

Cloudflare Pages 直接连接本仓库，每次推送由 Cloudflare 自己构建：
`main` = 正式站；其他分支 = 预览站 `<分支名>.<项目名>.pages.dev`（已设 noindex）。
GitHub Actions（`.github/workflows/deploy.yml`）只做构建检查，不发布任何东西。

站点语言（显示顺序）：英文 `/`、西班牙语（拉美）`/es/`、法语 `/fr/`、葡萄牙语（巴西）`/pt/`、中文 `/zh/`。

## 合并到 main 之前必须核对（否则构建会失败）

旧站是 Hugo。如果 Cloudflare 项目还保留 Hugo 的构建设置，新代码合并后会构建失败，线上仍是旧版本。

位置：Cloudflare → Workers & Pages → 你的项目 → Settings → Build

| 设置 | 必须是 |
|------|--------|
| Framework preset | None（或 Vite） |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | 留空（仓库根目录） |
| Production branch | `main` |
| 环境变量 `HUGO_VERSION` 等 | 删除（不再需要） |

Node 版本由仓库里的 `.node-version`（22）指定，Cloudflare 构建镜像会自动读取。

## 上线后检查

| # | 动作 | 位置 | 完成标志 |
|---|------|------|----------|
| 1 | 打开 `/`、`/zh/`、`/es/`，点顶部 EN · 中文 · ES 切换 | 浏览器 | 三种语言同一页面互相跳转 |
| 2 | 用西语表单提交一条测试询盘 | `/es/contact/` | Formspree 邮件标题含 "(ES)" |
| 3 | 访问 `/business/industrial/` | 浏览器 | 301 跳到 `/business/energy/` |
| 4 | 关闭 GitHub Pages（如果还开着） | GitHub → Settings → Pages | 不再有第二个站点 |
| 5 | 根域跳转 `odestech.cn/*` → `https://www.odestech.cn/$1`（301） | 已由 `functions/_middleware.js` 实现；可选再加 Rules → Redirect Rules（图片和 /assets 也跳转） | `curl -I https://odestech.cn/about/` 返回 301 到 www |

## 影响 SEO / GEO 的 Cloudflare 开关

| 设置 | 位置 | 应设为 | 原因 |
|------|------|--------|------|
| Block AI bots / AI Crawl Control | Security → Bots；AI Crawl Control | 允许 | 拦截 GPTBot、ClaudeBot、PerplexityBot 等于关掉 GEO |
| Managed robots.txt | AI Crawl Control | 关闭 | 开启时 Cloudflare 会改写站内 robots.txt |
| Bot Fight Mode | Security → Bots | 关闭，或确认不拦截已验证爬虫 | 防止误伤 Googlebot / Bingbot |
| Always Use HTTPS | SSL/TLS → Edge Certificates | 开 | canonical 全部是 https |
| Web Analytics | 项目 → Metrics | 开 | 免代码访问统计 |
| Email Address Obfuscation | Security → Settings（Scrape Shield） | 关闭 | 开启时把每个 mailto 链接改写成 `/cdn-cgi/l/email-protection`，该地址对爬虫返回 404，Ahrefs 报“Page has links to broken page” |
| WebMCP | Agent Readiness → WebMCP | 关闭（站点没有 `/mcp` 服务） | 开启时每页注入 75 kB 的 `/.webmcp/bridge.js`，并请求 `/mcp`（404） |

## AI 代理（GEO）相关机制

- `robots.txt` 第一组写了 `Content-Signal: search=yes, ai-input=yes, ai-train=yes`（Cloudflare Content Signals Policy）。若不想被用于模型训练，把 `scripts/prerender.mjs` 和 `functions/_middleware.js` 里的 `ai-train` 改为 `no`。
- 每个页面在构建时额外生成 `index.md`。`functions/_middleware.js` 在请求头 `Accept` 偏好 `text/markdown` 时返回 Markdown（与 Cloudflare 付费版 "Markdown for Agents" 同样的协议），浏览器仍拿到 HTML。
- Cloudflare 对 Function 路由不执行 `_redirects` / `_headers`，所以旧地址 301 和安全头也在中间件里实现；跳转清单只在 `scripts/redirects.mjs` 维护一处。
- Function 只在页面地址上运行（`dist/_routes.json` 排除 `/assets/*`、`/images/*`），免费额度为每天 10 万次请求。

## 搜索引擎提交

1. Google Search Console：提交 `https://www.odestech.cn/sitemap.xml`（包含三种语言、互相标注 hreflang）。
2. Bing Webmaster Tools：导入站点并提交 sitemap。ChatGPT 搜索和 Copilot 依赖 Bing 索引。
3. 百度搜索资源平台：提交 `/zh/` 页面。
4. 西语市场的 Google 结果按国家区分，可在 Search Console → 效果 → 国家 查看墨西哥、哥伦比亚、智利等的展示量。

## 说明

- hreflang 和页面 `lang` 都用 `es`，不用 `es-419`：Google 只认 ISO 3166-1 两位国家码，`es-419` 会被忽略；Ahrefs 把 `lang="es-419"` 报为 “HTML lang attribute invalid” 错误。文案仍是拉美西语。
- 询盘表单沿用 Formspree，三种语言共用同一个地址；邮件标题分别为 "ODES website enquiry"、"ODES 网站询盘"、"Consulta desde el sitio web de ODES (ES)"。

## 本地开发

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

文案：`src/content/en.ts`、`es.ts`、`fr.ts`、`pt.ts`、`zh.ts`；公司信息只在 `src/site.ts` 改一处。
