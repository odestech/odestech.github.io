# 部署指南：Cloudflare Pages（www.odestech.cn）

本站由 GitHub Actions 构建（Vite + React，构建时预渲染为静态 HTML），推送后自动发布到 Cloudflare Pages。
`main` 分支 = 正式站；其他分支 = 预览站 `<分支名>.odestech.pages.dev`（已设 noindex，不会被搜索引擎收录）。

## 一次性配置（按顺序，约 30 分钟）

| # | 动作 | 在哪里 | 负责人 | 完成标志 |
|---|------|--------|--------|----------|
| 1 | 创建 API Token：模板 **Edit Cloudflare Workers** 或自定义权限 **Account → Cloudflare Pages → Edit** | Cloudflare → My Profile → API Tokens | Luis | 得到一串 token（只显示一次） |
| 2 | 复制 **Account ID** | Cloudflare → 任一域名概览页右侧 / Workers & Pages 页面 | Luis | 32 位 ID |
| 3 | 添加仓库 Secrets：`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID` | GitHub 仓库 → Settings → Secrets and variables → Actions | Luis | 两个 secret 已列出 |
| 4 | 重新运行最近一次工作流（Actions → Build and deploy → Re-run） | GitHub → Actions | Luis | 日志里出现 `https://xxxx.odestech.pages.dev` |
| 5 | 在预览地址检查中英文各页、提交一次测试询盘 | 浏览器 | Luis | Formspree 收到邮件 |
| 6 | 合并到 `main`（生产部署） | GitHub PR | Luis | `odestech.pages.dev` 显示新站 |
| 7 | 绑定自定义域名 `www.odestech.cn` 和 `odestech.cn` | Workers & Pages → odestech → Custom domains | Luis | 状态 Active |
| 8 | 根域跳转：`odestech.cn/*` → `https://www.odestech.cn/$1`（301） | 域名 → Rules → Redirect Rules | Luis | 访问根域自动跳到 www |
| 9 | 关闭 GitHub Pages（第 7 步生效后再做） | GitHub 仓库 → Settings → Pages → Unpublish / Source: None | Luis | 旧站下线 |

### 第 7 步的两种情况
- **odestech.cn 的 DNS 已在 Cloudflare**：添加自定义域名时 Cloudflare 自动建记录，几分钟生效。
- **DNS 还在注册商（阿里云/腾讯云等）**：
  - 只接 `www`：在注册商处把 `www` 的 CNAME 改为 `odestech.pages.dev`。
  - 根域 `odestech.cn` 也要接：必须把域名 NS 改到 Cloudflare（Cloudflare 支持 .cn 域名）。改 NS 前先在 Cloudflare 导入现有全部 DNS 记录，**尤其是 MX 邮件记录**，否则 info@odestech.cn 会收不到邮件。

## 影响 SEO / GEO 的 Cloudflare 开关（必须检查）

| 设置 | 位置 | 应设为 | 原因 |
|------|------|--------|------|
| Block AI bots / AI Crawl Control | Security → Bots；AI Crawl Control | **允许**（不拦截） | 新域名默认可能拦截 GPTBot、ClaudeBot、PerplexityBot，等于关掉 GEO |
| Managed robots.txt | AI Crawl Control / Security → Bots | **关闭** | 开启时 Cloudflare 会改写站内 robots.txt |
| Bot Fight Mode | Security → Bots | 关闭，或确认不拦截已验证爬虫 | 防止误伤 Googlebot / Bingbot |
| Always Use HTTPS | SSL/TLS → Edge Certificates | 开 | canonical 全部是 https |
| Web Analytics | Workers & Pages → odestech → Metrics | 开 | 免代码统计，不受 Google 在中国不可用影响 |

## 上线后 48 小时内

1. **Google Search Console**：提交 `https://www.odestech.cn/sitemap.xml`，对首页和两个业务页"请求编入索引"。
2. **Bing Webmaster Tools**：从 Search Console 导入站点并提交 sitemap。ChatGPT 搜索、Copilot 的检索依赖 Bing 索引，这是 GEO 的关键一步。
3. **百度搜索资源平台**：提交 `/zh/` 页面（国内采购方搜索中文）。
4. 用 [Rich Results Test](https://search.google.com/test/rich-results) 检查首页和 `/business/energy/` 的结构化数据无错误。
5. 访问 `https://www.odestech.cn/business/industrial/`，确认 301 到 `/business/energy/`（旧 Hugo 地址）。

## 已知限制

- Cloudflare 在中国大陆没有 ICP 备案就不能使用其中国网络，大陆访问走海外节点，速度一般但可用；`*.pages.dev` 在大陆部分地区被干扰，以自定义域名为准。
- 询盘表单走 Formspree（美国），表单里已有告知同意条款；免费版每月 50 条，超量需升级。

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

文案在 `src/content/en.ts` 与 `src/content/zh.ts`；公司信息（地址、电话、邮箱）只在 `src/site.ts` 改一处，页面、JSON-LD、sitemap、llms.txt 会同步更新。
