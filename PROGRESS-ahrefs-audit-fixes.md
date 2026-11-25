# PROGRESS — ahrefs-audit-fixes

**Goal**: Find and fix the errors Ahrefs Site Audit reports for odestech.cn (email received 2026-11-25), then verify on a preview build.

## Stages
- ✅ 1. Collect data: crawl live site (apex + www) like Ahrefs — 144 internal URLs, 0 timeouts
- ✅ 2. Diagnose: issue list mapped to Ahrefs issue names + root cause (below)
- ✅ 3. Code fixes (#2–#8; #1 code part = robots.txt `Disallow: /cdn-cgi/`)
- ✅ 4. Build + QA: tsc OK; build 30 pages + 5 404s; check:seo 0 problems (old main build: 171); middleware tests 12/12; Playwright 10 pages × 2 viewports: hydrated, 0 console errors, 0 empty alt, no overflow
- ✅ 5. Pushed c2fe379, 50b0851, 7d528da. Preview 27ad2e37 deploy success; crawl of branch preview: 0 broken links, 0 empty alt, 0 long titles/descriptions, html lang es, robots Disallow /cdn-cgi/. Left: noindex (pages.dev only), ZH short by char count (by design), PT hreflang pt vs lang pt-BR (same language), srcset/OG images >100 kB (Ahrefs checks img src only). GitHub build check was already failing on main since run 34 ("manuseio" matched the Manus check) — fixed in 7d528da.
- ✅ 6. Luis approved both (2026-11-25): main c003777→e0a2a0d (fast-forward), production deployment f06cb092 success (rollback target d647403c); email_obfuscation on→off via API 11:48 UTC, read-back off. Cache purge via API refused (token lacks Cache Purge).
- ✅ 7. Live re-crawl (90 URLs): apex 301 → www with path + query, old URLs one hop; 0 broken links, 0 hreflang errors, 0 non-canonical, 0 long titles/descriptions, 0 empty alt, html lang es. Left: energy-1024.jpg still 146 kB from Cloudflare edge cache (origin serves 98 kB) → Luis purges URL; ZH short by char count, PT pt vs pt-BR (accepted); srcset/OG images >100 kB (Ahrefs checks src); JS bundle 351 kB raw.

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

## Next action (Luis)
Verified 2026-11-25 12:15 UTC after Luis's dashboard changes:
1. ✅ Image cache purged: www/images/energy-1024.jpg = 99,982 bytes
2. ✅ WebMCP off: no tag in HTML, /.webmcp/bridge.js → 404
3. ⬜ Ahrefs Webmaster Tools → Site Audit → new crawl; send the issue CSV if anything is left
4. ✅ GitHub Pages unpublished and custom domain removed by Luis; odestech.github.io/ and /zh/ → 404 at 12:26 UTC (/about/ still a cached 301 at 12:27, expires on its own)
5. ✅ Cloudflare Redirect Rule "Redirect from root to WWW" (https://odestech.cn/* → https://www.odestech.cn/${1}, 301, query kept): images, assets, robots 301; old apex URLs = 2 hops (accepted); www 200, no loop
Final live crawl (89 URLs): 0 4XX/5XX, 0 broken links, 0 hreflang errors; left only accepted items (ZH length by char count, PT pt vs pt-BR, srcset/OG images >100 kB, JS bundle 351 kB raw).

## Key decisions
- Luis offered Google login to Ahrefs: not possible from the cloud container and not used (no password handling; API plan is the blocker anyway). Asked Luis for the CSV export or email text to cross-check.
- ES html lang `es-419` → `es` (Ahrefs validity); PT keeps `pt-BR` (BR is ISO 3166-1; language part matches hreflang `pt`).
- Descriptions: ≤155 chars, existing facts only (no new claims); ZH unchanged (CJK width).
- energy-1024.jpg re-encoded to 98 kB (fallback/crawler image; browsers load WebP, unchanged). AVIF not added (no Ahrefs effect).
- Apex redirect done in middleware (token cannot write Redirect Rules); dashboard rule optional.
- SEO check runs in GitHub CI only, not in `npm run build`, so a copy slip flags the commit but never blocks a Cloudflare deploy.

Updated: 2026-11-25
