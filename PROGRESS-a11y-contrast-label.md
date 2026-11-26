# PROGRESS — a11y-contrast-label

**Goal**: Lighthouse accessibility 100 on `/`, `/zh/`, `/business/energy/` by fixing `color-contrast` (footer / mobile menu) and `label-content-name-mismatch` (header logo link) in `src/components/Layout.tsx`, with no other visual change.

**Status: DONE (stages 1–5) on branch `claude/tender-noether-pnuh0t` (2026-11-26). Not merged to main; waits for Luis's approval.**

## Stages
- ✅ 1. Baseline (cfdef96, local `dist/`, Lighthouse 13.6.0 mobile): a11y 96 on all 3 pages; `color-contrast` 7 items, `label-content-name-mismatch` 1
- ✅ 2. Fix Layout.tsx + one token in index.css
- ✅ 3. Verify: `npm run check` OK, `npm test` 12/12, `npm run build` 30 pages + 5 404s, `npm run check:seo` 35 files OK; Lighthouse a11y 100 / 100 / 100, 0 failed audits; screenshots diffed
- ✅ 4. Commit + push to claude/tender-noether-pnuh0t (2e32f27)
- ✅ 5. One language per page + no "EN / 中文" service-language claim (Luis, 2026-11-26)

## Stage 5: one language per page
Removed:
- Bilingual subtitle under every section heading (`alt-line`: Chinese on EN/ES/FR/PT, English on ZH) and its plumbing (`alt` dict, `altLang`)
- "(上海奥得斯科技有限公司)" after the legal name in About lead + registered-details row (EN/ES/FR/PT)
- Every working-languages claim: stat tile "EN / 中文" → "1 · Named counterpart" (existing fact), Contact page row, About details row, why-us and FAQ sentences (EN, ZH), llms.txt line
- JSON-LD: `knowsLanguage` removed; `availableLanguage` = the 5 site languages (was en, zh)
Kept on purpose:
- Language switcher / footer site links in each language's own name (中文, 中文版, 中文网站; English, Español…) — W3C i18n practice, so a Chinese reader on an EN page can find the ZH site
- JSON-LD `alternateName` and llms.txt legal name with Chinese registered name (machine-readable, not visible; entity matching)
- ZH pages: brand ODES TECHNOLOGY, email/domain, ISO codes CN/US, standard codes (API, ASME, CAS, SGS, TÜV…)
Verified: scan of visible text on 28 non-ZH pages → only switcher labels left; check / test 12/12 / build / check:seo OK; Lighthouse a11y 100 on /, /zh/, /business/energy/; no horizontal overflow at 390 / 1440.

## Changes (contrast on footer/menu background #05070b)
| Element | Before | After | Ratio before → after |
|---|---|---|---|
| Logo "TECHNOLOGY", dark variant (footer + menu) | `text-brand` #0736c2 | `text-brand-light` = oklch(0.6 0.19 264) #4377f0 | 2.22 → 4.93 |
| Footer motto, copyright row | `text-white/35` | `text-white/50` | 3.09 → 5.31 |
| Footer h2 (Sectors / Company / Contact) | `text-white/40` | `text-white/50` | 3.72 → 5.31 |
| Mobile menu descriptions | `text-white/40` | `text-white/50` | 3.73 → 5.31 |
| Mobile menu numbers 01–05 (not flagged: menu hidden during audit) | `text-brand` | `text-brand-light` | 2.22 → 4.93 |
| Mobile menu sub-labels (9 px) | `text-brand/80` | `text-brand-light` | 1.78 → 4.93 |
| Header logo link name | `aria-label="ODES Technology — Home"` | name from visible text + `sr-only` " — Home"; img `aria-hidden` (alt kept for check:seo/Ahrefs); space between spans | "ODES TECHNOLOGY — Home" |

## Screenshot diff (2x, before vs after)
- Header 390 / 1440, EN + ZH: pixel-identical
- Footer 390 / 1440: only motto, 3 headings, copyright row, "TECHNOLOGY" changed; same image size (no layout shift)
- Mobile menu 390: only numbers, sub-labels, descriptions, "TECHNOLOGY" changed
- Sheets: scratchpad `compare/` (temporary, not in repo)

## Key decisions
- 45 % white = 4.50:1, exactly on the threshold (rounding can drop it to 4.49), so 50 % (5.31) is used. Footer text hierarchy goes from 3 steps (55/40/35) to 2 (55/50).
- Brand light tint: lowest lightness step in the tested set that clears 4.5 with margin (L 0.6 → 4.93).
- Mobile menu numbers and sub-labels were outside the requested list but fail the same SC 1.4.3; fixed with the same token. Revert = 2 class names if Luis prefers.
- Not changed: menu arrow icons (`text-brand opacity-60`, non-text, decorative inside a labelled link).

Updated: 2026-11-26
