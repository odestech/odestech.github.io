# PROGRESS — odes-react-migration

**Goal**: Replace the Hugo site with the Manus React design, prerendered to static multi-page HTML (EN at `/`, ZH at `/zh/`), optimised for SEO + GEO, deployed to Cloudflare Pages via GitHub Actions.

## Stages
- ✅ 1. Scaffold lean Vite + React + Tailwind v4 project in repo root; remove Hugo; move images
- ✅ 2. Bilingual content model (two equal sectors, verified claims only)
- ✅ 3. Pages and components (port React design; real Formspree form)
- ✅ 4. Prerender script + SEO/GEO assets (head tags, JSON-LD, sitemap, robots, llms.txt, _redirects, _headers)
- ✅ 5. Cloudflare Pages workflow + deployment/DNS guide
- ✅ 6. QA (build, HTML checks, screenshots), commit, push to `claude/zen-fermat-elxkps`

## Output paths
- Source: `src/` (content in `src/content/en.ts`, `src/content/zh.ts`; facts in `src/site.ts`)
- Build: `scripts/prerender.mjs` → `dist/`
- Workflow: `.github/workflows/deploy.yml`; guide: `docs/DEPLOY.md`
- Repo: `odestech/odestech.github.io`, branch `claude/zen-fermat-elxkps`

## Key decisions (Luis, 2026-11-25)
- Architecture: React + build-time prerender (not SPA, not Hugo restyle)
- Positioning: two equal sectors (Pharma & Life Sciences; Energy, Chemicals & Materials)
- Claims: keep only verified; drop FDA 510(k)/registration, cold chain, US on-the-ground BD, "100% compliance", "10+ years", team science credentials
- Hosting: Cloudflare Pages primary; GitHub Pages off
- Registered Chinese name is 上海奥得斯科技有限公司 (React copy had 奥德斯 — corrected)
- Contact form posts to the existing Formspree endpoint (React version was a fake alert)

## Last step
QA passed: 12 pages hydrate with 0 console errors; 1 <h1> + canonical + hreflang + JSON-LD per page; sitemap valid; form validation and Formspree payload verified (request mocked); mobile width 390px, no horizontal scroll. Committed and pushed to `claude/zen-fermat-elxkps`.

## Next action (Luis)
Follow `docs/DEPLOY.md`: add CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID secrets → re-run workflow → review preview → merge to main → attach custom domain → disable GitHub Pages → check Cloudflare AI-bot settings → submit sitemap to Google/Bing/Baidu.

Updated: 2026-11-25 (all stages done)
