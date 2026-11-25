/**
 * Build step 3 of 3: render every route to static HTML and write the files
 * Cloudflare Pages serves alongside them.
 *
 *   dist/<path>/index.html   one per route and language (EN at /, then /es/ /fr/ /pt/ /zh/)
 *   dist/404.html, dist/<lang>/404.html   Pages serves the nearest 404.html with status 404
 *   dist/sitemap.xml         with hreflang alternates
 *   dist/robots.txt          search and AI crawlers allowed, sitemap linked
 *   dist/llms.txt            short company brief for AI answer engines (llmstxt.org)
 *   dist/llms-full.txt       the full site text in Markdown, for the same purpose
 *   dist/_redirects          old Hugo URLs -> new ones (Cloudflare Pages syntax)
 *   dist/_headers            caching, security, noindex on *.pages.dev
 *   dist/<path>/index.md     Markdown version of each page, served to AI agents that send
 *                            "Accept: text/markdown" (see functions/_middleware.js)
 *   dist/_routes.json        limits the Pages Function to page URLs (not assets or images)
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { REDIRECTS } from "./redirects.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssr = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);
const { render, notFoundRoute, ROUTES, DICTS, ORG, SITE_URL, pathFor, LANGS, LANG_META } = ssr;

const template = readFileSync(join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-html-->") || !template.includes("<!--app-head-->")) {
  throw new Error("dist/index.html is missing the <!--app-head--> / <!--app-html--> placeholders");
}

const fill = (route) => {
  const { html, head, htmlLang } = render(route);
  return template
    .replace("__HTML_LANG__", htmlLang)
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);
};

const write = (rel, content) => {
  const file = join(dist, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

// ── Pages ───────────────────────────────────────────────────────────────────
for (const route of ROUTES) {
  write(join(route.path, "index.html"), fill(route));
}
for (const l of LANGS) write(l === "en" ? "404.html" : `${l}/404.html`, fill(notFoundRoute(l)));
console.log(`prerendered ${ROUTES.length} pages + ${LANGS.length} not-found pages`);

// ── Markdown version of every page (for AI agents) ──────────────────────────
// Same content as the HTML, without layout. functions/_middleware.js serves it
// when a client asks for text/markdown, which is what Cloudflare's paid
// "Markdown for Agents" does by converting HTML at the edge.
const L = (lang, key) => `${SITE_URL}${pathFor(lang, key)}`;
const bullets = (items) => items.map((i) => `- ${i}`);
const faqMd = (faq) => faq.flatMap((f) => [`### ${f.q}`, "", f.a, ""]);
const contactMd = (t) => [
  `## ${t.pages.contact.crumb}`,
  "",
  `- ${t.common.labels.email}: ${ORG.email}`,
  `- ${t.common.labels.phone}: ${ORG.phoneDisplay}`,
  `- ${t.common.labels.address}: ${ORG.legalName[t.lang]}, ${ORG.address[t.lang].oneLine}`,
  `- ${t.common.labels.languages}: ${t.common.labels.languagesValue}`,
  `- ${t.common.labels.linkedin}: ${ORG.linkedin}`,
  `- ${t.cta}: ${L(t.lang, "contact")}`,
  "",
];
const sectorsMd = (t) => [
  `## ${t.sectors.title}`,
  "",
  t.sectors.sub,
  "",
  ...t.sectors.cards.flatMap((c) => [`### ${c.title}`, "", c.desc, "", ...bullets(c.items), "", `${t.common.viewScope}: ${L(t.lang, c.key)}`, ""]),
  `**${t.sectors.badgesTitle}:** ${t.sectors.badges.join(" · ")}`,
  "",
];
const processMd = (t) => [`## ${t.process.title}`, "", ...t.process.steps.map((s, i) => `${i + 1}. **${s.title}** — ${s.body}`), ""];
const servicesMd = (t) => [
  `## ${t.services.title}`,
  "",
  t.services.sub,
  "",
  ...t.services.items.flatMap((s) => [`### ${s.title}`, "", `${s.headline} ${s.body}`, "", ...bullets(s.bullets), ""]),
];
const whyMd = (t) => [`## ${t.why.title}`, "", ...t.why.items.map((w) => `- **${w.title}**: ${w.body}`), ""];

function pageMd(route) {
  const t = DICTS[route.lang];
  const p = t.pages[route.key];
  const head = [`# ${p.meta.title}`, "", `> ${p.meta.description}`, "", `Source: ${SITE_URL}${route.path}`, ""];
  let body = [];
  switch (route.key) {
    case "home": {
      const h = p.hero;
      body = [
        `## ${h.line1} ${h.line2} ${h.line3}`, "", h.sub, "",
        ...t.facts.map((f) => `- **${f.value} ${f.label}** — ${f.sub}`), "",
        ...sectorsMd(t), ...processMd(t), ...whyMd(t), ...servicesMd(t),
        `## ${t.common.faqTitle}`, "", ...faqMd(p.faq), ...contactMd(t),
      ];
      break;
    }
    case "about":
      body = [
        `## ${p.hero.title}`, "", p.hero.lead, "", ...p.body.flatMap((b) => [b, ""]),
        `## ${p.values.title}`, "", ...p.values.items.map((v) => `- **${v.letter} — ${v.word}**: ${v.desc}`), "",
        `## ${p.details.title}`, "", ...p.details.rows.map(([k, v]) => `- ${k}: ${v}`), "", ...contactMd(t),
      ];
      break;
    case "business":
      body = [`## ${p.hero.title}`, "", p.hero.lead, "", ...sectorsMd(t), ...processMd(t), ...servicesMd(t), ...contactMd(t)];
      break;
    case "pharma":
    case "energy":
      body = [
        `## ${p.hero.title}`, "", p.hero.lead, "",
        `## ${p.catalogTitle}`, "", ...p.catalog.flatMap((c) => [`### ${c.title}`, "", c.body, ""]),
        ...p.blocks.flatMap((b) => [`## ${b.title}`, "", ...(b.intro ? [b.intro, ""] : []), ...bullets(b.items), ...(b.items.length ? [""] : []), ...(b.note ? [b.note, ""] : [])]),
        `## ${p.enquiry.title}`, "", p.enquiry.intro, "", ...bullets(p.enquiry.items), "",
        `## ${t.common.faqTitle}`, "", ...faqMd(p.faq), ...contactMd(t),
      ];
      break;
    case "contact":
      body = [`## ${p.hero.title}`, "", p.hero.lead, "", ...contactMd(t).slice(2), `## ${p.checklistTitle}`, "", ...bullets(p.checklist), ""];
      break;
  }
  return [...head, ...body].join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}
for (const route of ROUTES) write(join(route.path, "index.md"), pageMd(route));

// Run the Pages Function only on page URLs; assets and images stay pure static.
write("_routes.json", JSON.stringify({ version: 1, include: ["/*"], exclude: ["/assets/*", "/images/*"] }, null, 2) + "\n");
console.log(`wrote ${ROUTES.length} Markdown page variants and _routes.json`);

// ── sitemap.xml ─────────────────────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10);
const hreflang = (l) => LANG_META[l].hreflang;
const priority = { home: "1.0", business: "0.9", pharma: "0.9", energy: "0.9", contact: "0.8", about: "0.7" };
const urls = ROUTES.map((r) => {
  const alts = LANGS
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${hreflang(l)}" href="${SITE_URL}${pathFor(l, r.key)}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${pathFor("en", r.key)}"/>`)
    .join("\n");
  return `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority[r.key]}</priority>\n${alts}\n  </url>`;
}).join("\n");
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
);

// ── robots.txt ──────────────────────────────────────────────────────────────
// AI search / answer crawlers are allowed explicitly: being read and cited by
// them is the point of GEO. Note that Cloudflare's "Block AI bots" and
// "managed robots.txt" settings override this file if they are switched on.
const aiBots = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "Bingbot",
  "Bytespider", "Baiduspider",
];
// Content-Signal (Cloudflare Content Signals Policy): search = classic search
// index, ai-input = use in AI answers / grounding (what GEO needs),
// ai-train = model training. All three "yes": the site is marketing copy and
// being known to models is the goal. Change ai-train to "no" to opt out of training.
write(
  "robots.txt",
  [
    "User-agent: *",
    "Content-Signal: search=yes, ai-input=yes, ai-train=yes",
    "Allow: /",
    "",
    "# Search and AI answer engines are welcome to read and cite this site.",
    ...aiBots.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n"),
);

// ── llms.txt / llms-full.txt ────────────────────────────────────────────────
const LLMS_HEADING = {
  en: "Pages (English)",
  es: "Páginas en español (Latinoamérica)",
  fr: "Pages en français",
  pt: "Páginas em português (Brasil)",
  zh: "中文页面",
};
const FULL_TITLE = { en: "full site text", es: "texto completo del sitio", fr: "texte intégral du site", pt: "texto completo do site", zh: "网站全文" };
const en = DICTS.en;
const page = (l, k) => `${SITE_URL}${pathFor(l, k)}`;
const facts = [
  `- Legal name: ${ORG.legalName.en} (${ORG.legalName.zh})`,
  `- Brand: ${ORG.brand} ("${ORG.shortName}")`,
  `- Type: trading and technical services company (China sourcing and export)`,
  `- Registered office: ${ORG.address.en.oneLine}`,
  `- Markets served: United States and other high-standard overseas markets`,
  `- Sectors: (1) pharmaceuticals and life sciences; (2) energy, chemicals and materials`,
  `- Quotation time: a complete enquiry is normally quoted within one business day`,
  `- Third-party inspection: SGS, Bureau Veritas or TÜV where required`,
  `- Regulatory filings: ODES does not hold DMF/CEP filings; it identifies which manufacturer holds them and confirms in writing`,
  `- Working languages: English, Chinese (enquiries in Spanish accepted)`,
  `- Site languages: English (/), Spanish for Latin America (/es/), French (/fr/), Portuguese for Brazil (/pt/), Chinese (/zh/)`,
  `- Email: ${ORG.email} · Phone: ${ORG.phoneDisplay} · LinkedIn: ${ORG.linkedin}`,
];
write(
  "llms.txt",
  [
    `# ${ORG.brand} (${ORG.legalName.en})`,
    "",
    `> ${en.pages.home.meta.description}`,
    "",
    "## Key facts",
    ...facts,
    "",
    ...LANGS.flatMap((l) => {
      const t = DICTS[l];
      return [
        `## ${LLMS_HEADING[l]}`,
        ...["home", "business", "pharma", "energy", "about", "contact"].map((k) => {
          const label = k === "home" ? t.common.home : t.pages[k].crumb;
          return `- [${label}](${page(l, k)}): ${t.pages[k].meta.description}`;
        }),
        "",
      ];
    }),
    "## Optional",
    `- [Full site text](${SITE_URL}/llms-full.txt): every page's content in one Markdown file`,
    "",
  ].join("\n"),
);

const md = (t) => {
  const out = [];
  const p = t.pages;
  out.push(`# ${ORG.brand} — ${FULL_TITLE[t.lang]}`, "");
  out.push(`> ${p.home.meta.description}`, "");
  out.push(`## ${p.about.hero.title}`, "", p.about.hero.lead, "", ...p.about.body.flatMap((b) => [b, ""]));
  out.push(`### ${p.about.details.title}`, "", ...p.about.details.rows.map(([k, v]) => `- ${k}: ${v}`), "");
  out.push(`## ${t.sectors.title}`, "", t.sectors.sub, "");
  for (const k of ["pharma", "energy"]) {
    const s = p[k];
    out.push(`### ${s.crumb} (${page(t.lang, k)})`, "", s.hero.lead, "", `#### ${s.catalogTitle}`, "");
    s.catalog.forEach((c) => out.push(`- **${c.title}**: ${c.body}`));
    out.push("");
    for (const b of s.blocks) {
      out.push(`#### ${b.title}`, "");
      if (b.intro) out.push(b.intro, "");
      b.items.forEach((i) => out.push(`- ${i}`));
      if (b.items.length) out.push("");
      if (b.note) out.push(b.note, "");
    }
    out.push(`#### ${s.enquiry.title}`, "", ...s.enquiry.items.map((i) => `- ${i}`), "");
    s.faq.forEach((f) => out.push(`**${f.q}** ${f.a}`, ""));
  }
  out.push(`## ${t.services.title}`, "");
  t.services.items.forEach((s) => out.push(`### ${s.title}`, "", `${s.headline} ${s.body}`, "", ...s.bullets.map((b) => `- ${b}`), ""));
  out.push(`## ${t.process.title}`, "", ...t.process.steps.map((s, i) => `${i + 1}. **${s.title}** — ${s.body}`), "");
  out.push(`## ${t.why.title}`, "", ...t.why.items.map((w) => `- **${w.title}**: ${w.body}`), "");
  out.push(`## ${t.common.faqTitle}`, "");
  p.home.faq.forEach((f) => out.push(`### ${f.q}`, "", f.a, ""));
  out.push(`## ${p.contact.crumb}`, "", `- ${t.common.labels.email}: ${ORG.email}`, `- ${t.common.labels.phone}: ${ORG.phoneDisplay}`, `- ${t.common.labels.address}: ${ORG.legalName[t.lang]}, ${ORG.address[t.lang].oneLine}`, `- ${t.common.labels.linkedin}: ${ORG.linkedin}`, `- ${page(t.lang, "contact")}`, "");
  return out.join("\n");
};
write("llms-full.txt", LANGS.map((l) => md(DICTS[l])).join("\n---\n\n"));

// ── _redirects (Cloudflare Pages) ───────────────────────────────────────────
write("_redirects", ["# Old Hugo URLs (also applied by functions/_middleware.js)", ...REDIRECTS.map(([from, to]) => `${from} ${to} 301`), "/en/* /:splat 301", ""].join("\n"));

// ── _headers (Cloudflare Pages) ─────────────────────────────────────────────
write(
  "_headers",
  [
    "/*",
    "  X-Content-Type-Options: nosniff",
    "  Referrer-Policy: strict-origin-when-cross-origin",
    "  X-Frame-Options: SAMEORIGIN",
    "  Permissions-Policy: camera=(), microphone=(), geolocation=()",
    "",
    "/assets/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    "/images/*",
    "  Cache-Control: public, max-age=2592000",
    "",
    "/llms.txt",
    "  Content-Type: text/plain; charset=utf-8",
    "",
    "/llms-full.txt",
    "  Content-Type: text/plain; charset=utf-8",
    "",
    "# Keep the *.pages.dev mirror and preview deployments out of search results;",
    "# only www.odestech.cn should be indexed.",
    "https://:project.pages.dev/*",
    "  X-Robots-Tag: noindex",
    "",
    "https://:version.:project.pages.dev/*",
    "  X-Robots-Tag: noindex",
    "",
  ].join("\n"),
);

rmSync(join(root, "dist-ssr"), { recursive: true, force: true });
console.log("wrote sitemap.xml, robots.txt, llms.txt, llms-full.txt, _redirects, _headers");
