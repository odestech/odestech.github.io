# odestech.cn

Website of ODES Technology (Shanghai Odes Technology Co., Ltd.).

- **Stack**: Vite + React 19 + Tailwind CSS 4. Every route is prerendered to static HTML at build time (`scripts/prerender.mjs`) and hydrated in the browser, so crawlers and AI answer engines read full content without running JavaScript.
- **Languages**: English at `/`, Chinese at `/zh/`, linked with `hreflang`.
- **Hosting**: Cloudflare Pages via `.github/workflows/deploy.yml`. Setup steps: [docs/DEPLOY.md](docs/DEPLOY.md).

| What | Where |
|------|-------|
| Copy (EN / ZH) | `src/content/en.ts`, `src/content/zh.ts` |
| Company facts, URLs, routes | `src/site.ts` |
| Title, meta, hreflang, Open Graph, JSON-LD | `src/seo.ts` |
| Sitemap, robots.txt, llms.txt, `_redirects`, `_headers` | `scripts/prerender.mjs` |
| Images (pre-sized WebP + JPEG) | `public/images/` |

```bash
npm install
```

```bash
npm run build
```
