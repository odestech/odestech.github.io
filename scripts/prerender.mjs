/**
 * Build step 3 of 3: render every route to static HTML and write the files
 * Cloudflare Pages serves alongside them.
 *
 *   dist/<path>/index.html   one per route and language (EN at /, ZH at /zh/)
 *   dist/404.html, dist/zh/404.html, dist/es/404.html   Pages serves the nearest 404.html with status 404
 *   dist/sitemap.xml         with hreflang alternates
 *   dist/robots.txt          search and AI crawlers allowed, sitemap linked
 *   dist/llms.txt            short company brief for AI answer engines (llmstxt.org)
 *   dist/llms-full.txt       the full site text in Markdown, for the same purpose
 *   dist/_redirects          old Hugo URLs -> new ones (Cloudflare Pages syntax)
 *   dist/_headers            caching, security, noindex on *.pages.dev
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

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
write(
  "robots.txt",
  [
    "User-agent: *",
    "Allow: /",
    "",
    "# Search and AI answer engines are welcome to read and cite this site.",
    ...aiBots.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n"),
);

// ── llms.txt / llms-full.txt ────────────────────────────────────────────────
const en = DICTS.en;
const zh = DICTS.zh;
const es = DICTS.es;
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
  `- Site languages: English (/), Chinese (/zh/), Spanish for Latin America (/es/)`,
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
    "## Pages (English)",
    `- [Home](${page("en", "home")}): ${en.pages.home.meta.description}`,
    `- [Core business](${page("en", "business")}): ${en.pages.business.meta.description}`,
    `- [Pharma & life sciences](${page("en", "pharma")}): ${en.pages.pharma.meta.description}`,
    `- [Energy, chemicals & materials](${page("en", "energy")}): ${en.pages.energy.meta.description}`,
    `- [About](${page("en", "about")}): ${en.pages.about.meta.description}`,
    `- [Contact](${page("en", "contact")}): ${en.pages.contact.meta.description}`,
    "",
    "## 中文页面",
    `- [首页](${page("zh", "home")}): ${zh.pages.home.meta.description}`,
    `- [核心业务](${page("zh", "business")}): ${zh.pages.business.meta.description}`,
    `- [医药与生命科学](${page("zh", "pharma")}): ${zh.pages.pharma.meta.description}`,
    `- [能源化工与材料](${page("zh", "energy")}): ${zh.pages.energy.meta.description}`,
    `- [关于我们](${page("zh", "about")}): ${zh.pages.about.meta.description}`,
    `- [联系我们](${page("zh", "contact")}): ${zh.pages.contact.meta.description}`,
    "",
    "## Páginas en español (Latinoamérica)",
    `- [Inicio](${page("es", "home")}): ${es.pages.home.meta.description}`,
    `- [Negocio](${page("es", "business")}): ${es.pages.business.meta.description}`,
    `- [Farmacéutica y ciencias de la vida](${page("es", "pharma")}): ${es.pages.pharma.meta.description}`,
    `- [Energía, químicos y materiales](${page("es", "energy")}): ${es.pages.energy.meta.description}`,
    `- [Nosotros](${page("es", "about")}): ${es.pages.about.meta.description}`,
    `- [Contacto](${page("es", "contact")}): ${es.pages.contact.meta.description}`,
    "",
    "## Optional",
    `- [Full site text](${SITE_URL}/llms-full.txt): every page's content in one Markdown file`,
    "",
  ].join("\n"),
);

const md = (t) => {
  const out = [];
  const p = t.pages;
  out.push(`# ${ORG.brand} — ${{ en: "full site text", zh: "网站全文", es: "texto completo del sitio" }[t.lang]}`, "");
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
write("llms-full.txt", [en, zh, es].map(md).join("\n---\n\n"));

// ── _redirects (Cloudflare Pages) ───────────────────────────────────────────
write(
  "_redirects",
  [
    "# Old Hugo URLs",
    "/business/industrial/ /business/energy/ 301",
    "/business/industrial /business/energy/ 301",
    "/zh/business/industrial/ /zh/business/energy/ 301",
    "/zh/business/industrial /zh/business/energy/ 301",
    "/en/sitemap.xml /sitemap.xml 301",
    "/zh/sitemap.xml /sitemap.xml 301",
    "/index.xml / 301",
    "/zh/index.xml /zh/ 301",
    "/business/index.xml /business/ 301",
    "/zh/business/index.xml /zh/business/ 301",
    "/en/ / 301",
    "/en/* /:splat 301",
    "",
  ].join("\n"),
);

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
