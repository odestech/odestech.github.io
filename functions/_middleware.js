/**
 * Cloudflare Pages middleware (runs on page URLs only; see dist/_routes.json).
 *
 * 1. Markdown for AI agents: a request whose Accept header prefers
 *    text/markdown gets the prebuilt dist/<path>/index.md instead of HTML —
 *    the same contract as Cloudflare's paid "Markdown for Agents" (Pro plan),
 *    done here on the free plan because every page is already prerendered.
 * 2. Old-URL 301s and security headers: Cloudflare does not apply _redirects
 *    or _headers to Function routes, so they are applied here.
 * 3. noindex on *.pages.dev so only www.odestech.cn is indexed.
 * 4. The apex domain (odestech.cn) 301s to www.odestech.cn, path and query
 *    kept, so crawlers never see a second copy of every page.
 */
import { ALIAS_HOSTS, CANONICAL_HOST, REDIRECTS } from "../scripts/redirects.mjs";

const MD_TYPE = "text/markdown; charset=utf-8";
const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=yes";
const REDIRECT_MAP = new Map(REDIRECTS);
const ALIASES = new Set(ALIAS_HOSTS);
const SECURITY = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

/**
 * Same negotiation rules as Cloudflare's feature:
 * "text/markdown" -> md; "text/markdown, text/html;q=0.9" -> md;
 * "text/*" -> md; "*\/*" or a normal browser Accept -> HTML.
 */
export function wantsMarkdown(accept) {
  if (!accept) return false;
  const q = {};
  for (const part of accept.toLowerCase().split(",")) {
    const [type, ...params] = part.trim().split(";");
    if (!type) continue;
    const qp = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
    const value = qp ? Number(qp.slice(2)) : 1;
    q[type.trim()] = Math.max(q[type.trim()] ?? 0, Number.isFinite(value) ? value : 0);
  }
  const md = q["text/markdown"];
  const html = q["text/html"];
  if (md !== undefined) return md > 0 && (html === undefined || md >= html);
  const textAny = q["text/*"];
  return textAny !== undefined && textAny > 0 && html === undefined;
}

function withHeaders(res, extra, host) {
  const r = new Response(res.body, res);
  for (const [k, v] of Object.entries({ ...SECURITY, ...extra })) r.headers.set(k, v);
  if (host.endsWith(".pages.dev")) r.headers.set("X-Robots-Tag", "noindex");
  return r;
}

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // Old path and/or alias host -> one 301 straight to the final URL (no chain).
  const target = REDIRECT_MAP.get(path) ?? (path.startsWith("/en/") ? path.slice(3) : undefined);
  const alias = ALIASES.has(url.hostname);
  if (target || alias) {
    const dest = new URL(target ?? path, url);
    dest.search = url.search;
    if (alias) {
      dest.protocol = "https:";
      dest.host = CANONICAL_HOST;
    }
    return Response.redirect(dest.toString(), 301);
  }

  if (request.method !== "GET" && request.method !== "HEAD") return next();

  const isPage = path.endsWith("/");
  if (isPage && wantsMarkdown(request.headers.get("Accept"))) {
    const asset = await env.ASSETS.fetch(new URL(`${path}index.md`, url).toString());
    if (asset.ok) {
      const text = await asset.text();
      return withHeaders(
        new Response(request.method === "HEAD" ? null : text, { status: 200 }),
        {
          "Content-Type": MD_TYPE,
          Vary: "Accept",
          "x-markdown-tokens": String(Math.ceil(text.length / 4)),
          "Content-Signal": CONTENT_SIGNAL,
          Link: `<${url.origin}${path}>; rel="canonical"`,
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
        url.hostname,
      );
    }
  }

  const res = await next();

  if (path.endsWith(".md")) {
    // Direct hits on /<path>/index.md: readable as Markdown, never indexed
    // as a duplicate of the HTML page.
    return withHeaders(res, {
      "Content-Type": MD_TYPE,
      "X-Robots-Tag": "noindex",
      Link: `<${url.origin}${path.replace(/index\.md$/, "")}>; rel="canonical"`,
    }, url.hostname);
  }

  const extra = { Vary: "Accept", "Content-Signal": CONTENT_SIGNAL };
  if (isPage && res.status === 200 && (res.headers.get("Content-Type") || "").includes("text/html")) {
    extra.Link = `<${path}index.md>; rel="alternate"; type="text/markdown"`;
  }
  return withHeaders(res, extra, url.hostname);
}
