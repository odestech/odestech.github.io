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
Phase 2 QA passed: 18 pages + 3 not-found pages; all sampled EN/ZH/ES pages hydrate with 0 console errors; 4 hreflang links per page; ES form submit verified (mocked); desktop header fits at 1100 px; mobile 390 px no overflow. Pushed to `claude/zen-fermat-elxkps`.

## Next action (Luis)
Check Cloudflare build settings (docs/DEPLOY.md, "合并到 main 之前") → merge to main → run the post-launch checks.

## Phase 2 — Spanish (Latin America) + Cloudflare Git integration (2026-11-25)
- ✅ 7. Spanish locale at /es/ (3-language routing, switcher, hreflang, JSON-LD, sitemap, llms)
- ✅ 8. Switch deploy to Cloudflare Git integration (Actions = build check only), update docs
- ✅ 9. QA + push (branch)
- ✅ 10. Cloudflare Pages project `odestech-github-io` build settings changed via API (2026-11-25): build `npm run build`, output `dist`, env vars GO_VERSION/HUGO_VERSION removed, NODE_VERSION=22 (production + preview). Preview build of branch succeeded: deployment 6988c996, https://6988c996.odestech-github-io.pages.dev ("prerendered 18 pages + 3 not-found pages").
- ✅ 11. Merged to main (fast-forward b1b8f02→b9ec15d, Luis approved). Production build succeeded: deployment 533db11d, live at https://odestech-github-io.pages.dev
- ✅ 12. Custom domains reactivated; DNS CNAMEs odestech.cn + www changed from odestech.github.io to odestech-github-io.pages.dev (proxied). Both domains active 05:44 UTC. DNS backup: scratchpad/dns-backup.json
- ✅ 13. SPF changed to `v=spf1 include:spf.mail.qq.com ~all` (Luis approved)
- ✅ 14. DKIM TXT `myhd2611._domainkey` added (1024-bit RSA, read-back identical); verified in Tencent Exmail by Luis
- ⬜ 15. Luis: Redirect Rule apex→www, AI Crawl Control allow, unpublish GitHub Pages, submit sitemaps; DMARC p=quarantine after 2–4 weeks of SPF+DKIM pass
Finding: the Pages project had NO custom domain — www.odestech.cn is not served by Cloudflare Pages yet.
## Phase 3 — GEO/SEO hardening on Cloudflare free plan (2026-11-25)
- ✅ 16. Content-Signal in robots.txt + per-page Markdown (index.md) + Pages Function for Accept: text/markdown negotiation
- ✅ 17. Middleware unit tests 20/20 pass; preview 4719b927 built (Worker compiled); merged to main b9ec15d→b4cbe5e (Luis approved); production deployment f05db8ea success
- ✅ 19. Proxy/VPN visitors: Security Level medium→low via API (Luis approved, 2026-11-25). Browser Integrity Check left on. Bot Fight Mode switched off by Luis (not API-verifiable: token lacks Bot Management read).
- ⬜ 18. Luis: Rescan Agent Readiness; Crawler Hints (IndexNow) on; Bing Webmaster sitemap; apex→www Redirect Rule; content plan (product/guide pages)
## Phase 4 — 5 languages EN · ES · FR · PT · 中文 (2026-11-25)
- ✅ 20. Language order + /fr/ and /pt/ routing; dropdown switcher for 5 languages
- ✅ 21. French copy (fr.ts) and Brazilian Portuguese copy (pt.ts)
- ✅ 22. Build, QA (hydration, header widths, forms, markdown), push branch, preview build
- ⬜ 23. Merge to main after Luis confirms
Build: 30 pages + 5 not-found pages, 30 Markdown variants (success). QA: 30/30 pages hydrate, 0 console errors, 6 hreflang each; header no overflow at 1024/1280 in all 5 languages; dropdown closes on outside click; mobile 360px no overflow; middleware 20/20 + FR/PT markdown; FR/PT forms OK (mocked); sitemap 30 URLs; FR titles shortened to ≤60.
Decisions: label PT (not "PO": ISO 639-1 is pt); hreflang fr / pt (pt-BR would exclude Portugal), html lang fr / pt-BR; x-default stays EN.
Decisions: Formspree unchanged; no China network; hreflang "es" (Google does not accept es-419), html lang es-419.

Updated: 2026-11-25
