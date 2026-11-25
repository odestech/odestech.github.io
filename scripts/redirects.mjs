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
