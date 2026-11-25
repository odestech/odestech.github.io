/**
 * Post-build SEO check over dist/: the on-page rules Ahrefs Site Audit reports
 * as errors or warnings, so a copy or template change that would bring one
 * back fails the GitHub build check instead of showing up in the next audit.
 *
 *   node scripts/check-seo.mjs [distDir]   (after npm run build; default dist/)
 *
 * Limits follow Ahrefs' Site Audit: title <= 60 characters, meta description
 * <= 160, image <= 100 kB, html lang / hreflang = ISO 639-1 language with an
 * optional ISO 3166-1 alpha-2 region (so "es-419" fails), no empty alt text.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(process.argv[2] ?? join(root, "dist"));
const SITE = "https://www.odestech.cn";
const LANG_RE = /^[a-z]{2}(-[A-Z]{2})?$/;
const LIMITS = { title: 60, description: 160, imageBytes: 100 * 1000 };

const decode = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const len = (s) => [...s].length;
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"));
  return m ? decode(m[1]) : null;
};

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(p);
    return e.name.endsWith(".html") ? [p] : [];
  });
}

/** dist path for a site-relative URL, or null if nothing would be served. */
function target(urlPath) {
  const clean = decodeURI(urlPath.split(/[?#]/)[0]);
  const file = clean.endsWith("/") ? join(dist, clean, "index.html") : join(dist, clean);
  return existsSync(file) ? file : null;
}

const problems = [];
const report = (file, msg) => problems.push(`${relative(dist, file)}: ${msg}`);
const files = htmlFiles(dist);

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const isPage = file.endsWith("index.html");
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);

  const lang = html.match(/<html[^>]*\slang="([^"]*)"/)?.[1];
  if (!lang) report(file, "html lang missing");
  else if (!LANG_RE.test(lang)) report(file, `html lang "${lang}" is not ISO 639-1 (+ ISO 3166-1 alpha-2 region)`);

  const titles = [...html.matchAll(/<title>([^<]*)<\/title>/g)].map((m) => decode(m[1]));
  if (titles.length !== 1) report(file, `${titles.length} <title> tags`);
  else if (len(titles[0]) > LIMITS.title) report(file, `title ${len(titles[0])} > ${LIMITS.title} chars: ${titles[0]}`);

  const descs = [...html.matchAll(/<meta name="description" content="([^"]*)"/g)].map((m) => decode(m[1]));
  if (descs.length !== 1) report(file, `${descs.length} meta descriptions`);
  else if (len(descs[0]) > LIMITS.description) report(file, `meta description ${len(descs[0])} > ${LIMITS.description} chars`);

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) report(file, `${h1} <h1> tags`);

  for (const [img] of html.matchAll(/<img\b[^>]*>/g)) {
    const alt = attr(img, "alt");
    const src = attr(img, "src");
    if (!alt || !alt.trim()) report(file, `image without alt text: ${src}`);
    if (src?.startsWith("/")) {
      const f = target(src);
      if (!f) report(file, `broken image ${src}`);
      else if (statSync(f).size > LIMITS.imageBytes) report(file, `image ${src} is ${Math.round(statSync(f).size / 1000)} kB > 100 kB`);
    }
  }

  for (const [a] of html.matchAll(/<a\b[^>]*>/g)) {
    const href = attr(a, "href");
    if (href?.startsWith("/") && !href.startsWith("//") && !target(href)) report(file, `broken internal link ${href}`);
  }

  if (isPage && !noindex) {
    const canon = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    const self = `${SITE}/${relative(dist, dirname(file)).split("\\").join("/")}/`.replace(/\/+$/, "/").replace(`${SITE}//`, `${SITE}/`);
    if (canon !== self) report(file, `canonical ${canon} is not the page's own URL ${self}`);
    const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"/g)];
    if (!alts.some(([, , h]) => h === self)) report(file, "hreflang set does not include the page itself");
    for (const [, code, href] of alts) {
      if (code !== "x-default" && !LANG_RE.test(code)) report(file, `hreflang "${code}" is not valid`);
      if (!href.startsWith(`${SITE}/`) || !target(href.slice(SITE.length))) report(file, `hreflang ${code} points to a missing page ${href}`);
    }
  }
}

if (problems.length) {
  console.error(`SEO check failed (${problems.length}):\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log(`SEO check passed: ${files.length} HTML files`);
