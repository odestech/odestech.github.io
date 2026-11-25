/**
 * The one host search engines should index. Must equal the host of SITE_URL
 * in src/site.ts (scripts/prerender.mjs checks this at build time).
 */
export const CANONICAL_HOST = "www.odestech.cn";

/**
 * Other hostnames that serve this Pages project. functions/_middleware.js
 * answers them with a 301 to the same path on CANONICAL_HOST, so the apex
 * domain is never crawled as a second copy of the site.
 */
export const ALIAS_HOSTS = ["odestech.cn"];

/**
 * Old Hugo URLs -> new URLs (301). Single source for both dist/_redirects
 * (static) and functions/_middleware.js: Cloudflare does not apply _redirects
 * to routes handled by a Pages Function, so the middleware applies these too.
 */
export const REDIRECTS = [
  ["/business/industrial/", "/business/energy/"],
  ["/business/industrial", "/business/energy/"],
  ["/zh/business/industrial/", "/zh/business/energy/"],
  ["/zh/business/industrial", "/zh/business/energy/"],
  ["/en/sitemap.xml", "/sitemap.xml"],
  ["/zh/sitemap.xml", "/sitemap.xml"],
  ["/index.xml", "/"],
  ["/zh/index.xml", "/zh/"],
  ["/business/index.xml", "/business/"],
  ["/zh/business/index.xml", "/zh/business/"],
  ["/en/", "/"],
];
