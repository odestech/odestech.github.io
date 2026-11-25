# odestech.cn

Website of ODES Technology (Shanghai Odes Technology Co., Ltd.).

- **Stack**: Vite + React 19 + Tailwind CSS 4. Every route is prerendered to static HTML at build time (`scripts/prerender.mjs`) and hydrated in the browser, so crawlers and AI answer engines read full content without running JavaScript.
- **Languages**: English at `/`, Chinese at `/zh/`, Spanish (Latin America) at `/es/`, linked with `hreflang`.
- **Hosting**: Cloudflare Pages Git integration (Cloudflare builds every push: `npm run build` → `dist`). The GitHub workflow is a build check only. Setup: [docs/DEPLOY.md](docs/DEPLOY.md).

| What | Where |
|------|-------|
| Copy (EN / ZH / ES) | `src/content/en.ts`, `src/content/zh.ts`, `src/content/es.ts` |
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
