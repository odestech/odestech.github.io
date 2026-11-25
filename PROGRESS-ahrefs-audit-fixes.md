# PROGRESS — ahrefs-audit-fixes

**Goal**: Find and fix the errors Ahrefs Site Audit reports for odestech.cn (email received 2026-11-25), then verify on a preview build.

## Stages
- ✅ 1. Collect data: crawl live site (apex + www) like Ahrefs — 144 internal URLs, 0 timeouts
- ✅ 2. Diagnose: issue list mapped to Ahrefs issue names + root cause (below)
- ✅ 3. Code fixes (#2–#8; #1 code part = robots.txt `Disallow: /cdn-cgi/`)
- ✅ 4. Build + QA: tsc OK; build 30 pages + 5 404s; check:seo 0 problems (old main build: 171); middleware tests 12/12; Playwright 10 pages × 2 viewports: hydrated, 0 console errors, 0 empty alt, no overflow
- ✅ 5. Pushed c2fe379, 50b0851, 7d528da. Preview 27ad2e37 deploy success; crawl of branch preview: 0 broken links, 0 empty alt, 0 long titles/descriptions, html lang es, robots Disallow /cdn-cgi/. Left: noindex (pages.dev only), ZH short by char count (by design), PT hreflang pt vs lang pt-BR (same language), srcset/OG images >100 kB (Ahrefs checks img src only). GitHub build check was already failing on main since run 34 ("manuseio" matched the Manus check) — fixed in 7d528da.
- ⏳ 6. Luis approves: merge to main (rollback = deployment d647403c) + Email Obfuscation off via API; then live re-crawl
- ⬜ 7. Report

## Findings (live crawl 2026-11-25, Ahrefs issue names)
| # | Ahrefs issue | Count | Root cause | Fix | Where |
|---|---|---|---|---|---|
| 1 | 4XX page + Page has links to broken page | 1 URL per host; 140 links on 60 pages | Cloudflare Email Address Obfuscation = on rewrites mailto: to /cdn-cgi/l/email-protection (404) | Turn obfuscation off; robots.txt `Disallow: /cdn-cgi/` | Cloudflare (Luis approves) + code |
| 2 | Missing reciprocal hreflang, Self-reference hreflang missing, Non-canonical page | 180 + 30 + 30 | https://odestech.cn/* returns 200 copies (no apex→www 301) | 301 in functions/_middleware.js; optional zone Redirect Rule (token lacks permission) | code (+ Luis optional) |
| 3 | HTML lang attribute invalid | 6 ES pages (+ES 404) | `es-419` region is UN M.49, Ahrefs requires ISO 3166-1 alpha-2 | html lang `es` | code |
| 4 | Meta description too long | 18 pages >160 (19 >155) | EN/ES/FR/PT copy | rewrite to ≤155 | code (copy) |
| 5 | Title too long | EN home (62) | copy | ≤60 | code |
| 6 | Missing alt text (alt="") | 230 images | logo, home hero, sector card photos decorative | descriptive alt | code |
| 7 | Image file size too large | energy-1024.jpg 146 kB, energy-1024.webp 124 kB, energy-1600.webp 264 kB, og-energy.jpg 190 kB | photo encoding | recompress | code |
| 8 | Link without anchor text | 2 per home/business page | image link with alt="" | fixed by #6 | code |
| 9 | (not Ahrefs) Cloudflare WebMCP preview injects /.webmcp/bridge.js (75 kB) and probes /mcp → 404 each page view | all pages | Agent Readiness → WebMCP on | switch off (no MCP server on site) | Luis |
| 10 | (info) ZH titles/descriptions "short" by character count | 6 pages | CJK chars are double width; 56–74 chars ≈ display limit | keep | — |
| 11 | (info) GitHub Pages still on: odestech.github.io → 301 http://odestech.cn/ | — | Pages not unpublished | unpublish | Luis |
Checked OK: no 3XX/4XX internal pages (except #1), no redirect chains, canonicals self-referencing on www, sitemap 30 URLs all 200/canonical, hreflang reciprocal on www, 1 H1 per page, OG/Twitter complete, JSON-LD parses, 404 status correct, http→https on (always_use_https), trailing-slash 308s only when not linked.

## Output paths
- This file
- `scripts/check-seo.mjs` (post-build Ahrefs-rule check, `npm run check:seo`, runs in GitHub build check)
- `scripts/test-middleware.mjs` (`npm test`, runs in GitHub build check)
- Live crawler/analyzer: scratchpad `audit/crawl.py`, `audit/analyze.py` (temporary, not in repo)

## Last step + result
- Preview verified (stage 5). Cloudflare token: zone settings editable (email_obfuscation), Redirect Rules = not authorized.

## Next action
Ask Luis: (a) merge to main, (b) Email Obfuscation off via API. Luis in dashboards: WebMCP off, GitHub Pages unpublish, then re-crawl in Ahrefs.

## Key decisions
- Luis offered Google login to Ahrefs: not possible from the cloud container and not used (no password handling; API plan is the blocker anyway). Asked Luis for the CSV export or email text to cross-check.
- ES html lang `es-419` → `es` (Ahrefs validity); PT keeps `pt-BR` (BR is ISO 3166-1; language part matches hreflang `pt`).
- Descriptions: ≤155 chars, existing facts only (no new claims); ZH unchanged (CJK width).
- energy-1024.jpg re-encoded to 98 kB (fallback/crawler image; browsers load WebP, unchanged). AVIF not added (no Ahrefs effect).
- Apex redirect done in middleware (token cannot write Redirect Rules); dashboard rule optional.
- SEO check runs in GitHub CI only, not in `npm run build`, so a copy slip flags the commit but never blocks a Cloudflare deploy.

Updated: 2026-11-25
