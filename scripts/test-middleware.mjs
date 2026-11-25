/**
 * Unit tests for functions/_middleware.js (node:test, no dependencies).
 *
 *   node --test scripts/test-middleware.mjs
 *
 * The middleware decides every redirect on the live site, so a mistake here
 * can take pages offline or create a redirect loop; these cases pin it down.
 */
import assert from "node:assert/strict";
import { test } from "node:test";
import { onRequest, wantsMarkdown } from "../functions/_middleware.js";

const PAGE = "<!doctype html><title>x</title>";
const MD = "# Title\n\nBody\n";

/** Calls the middleware the way Cloudflare Pages does, with a fake static-asset layer. */
async function call(url, { method = "GET", accept = "text/html" } = {}) {
  let nextCalled = false;
  const context = {
    request: new Request(url, { method, headers: { Accept: accept } }),
    env: {
      ASSETS: {
        fetch: async (u) => (new URL(u).pathname.endsWith("index.md") ? new Response(MD, { status: 200 }) : new Response("", { status: 404 })),
      },
    },
    next: async () => {
      nextCalled = true;
      const path = new URL(url).pathname;
      if (path.endsWith(".md")) return new Response(MD, { status: 200, headers: { "Content-Type": "application/octet-stream" } });
      return new Response(PAGE, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
    },
  };
  const res = await onRequest(context);
  return { res, nextCalled, location: res.headers.get("Location") };
}

test("apex home redirects to www with 301", async () => {
  const { res, location } = await call("https://odestech.cn/");
  assert.equal(res.status, 301);
  assert.equal(location, "https://www.odestech.cn/");
});

test("apex keeps path and query string", async () => {
  const { res, location } = await call("https://odestech.cn/es/contact/?utm_source=linkedin&x=1");
  assert.equal(res.status, 301);
  assert.equal(location, "https://www.odestech.cn/es/contact/?utm_source=linkedin&x=1");
});

test("apex on http goes straight to https www", async () => {
  const { location } = await call("http://odestech.cn/about/");
  assert.equal(location, "https://www.odestech.cn/about/");
});

test("apex + old Hugo path is a single hop to the final URL", async () => {
  const { res, location } = await call("https://odestech.cn/business/industrial/");
  assert.equal(res.status, 301);
  assert.equal(location, "https://www.odestech.cn/business/energy/");
});

test("apex robots.txt and sitemap.xml redirect too", async () => {
  assert.equal((await call("https://odestech.cn/robots.txt")).location, "https://www.odestech.cn/robots.txt");
  assert.equal((await call("https://odestech.cn/sitemap.xml")).location, "https://www.odestech.cn/sitemap.xml");
});

test("apex POST is redirected, not served", async () => {
  const { res, nextCalled } = await call("https://odestech.cn/contact/", { method: "POST" });
  assert.equal(res.status, 301);
  assert.equal(nextCalled, false);
});

test("www old Hugo paths still 301 (with and without slash, /en/ prefix)", async () => {
  assert.equal((await call("https://www.odestech.cn/business/industrial")).location, "https://www.odestech.cn/business/energy/");
  assert.equal((await call("https://www.odestech.cn/zh/business/industrial/")).location, "https://www.odestech.cn/zh/business/energy/");
  assert.equal((await call("https://www.odestech.cn/en/about/")).location, "https://www.odestech.cn/about/");
  assert.equal((await call("https://www.odestech.cn/en/")).location, "https://www.odestech.cn/");
  assert.equal((await call("https://www.odestech.cn/en/about/?ref=a")).location, "https://www.odestech.cn/about/?ref=a");
});

test("www pages are served, not redirected, with security and alternate headers", async () => {
  const { res, nextCalled } = await call("https://www.odestech.cn/about/");
  assert.equal(nextCalled, true);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("X-Content-Type-Options"), "nosniff");
  assert.equal(res.headers.get("Link"), '</about/index.md>; rel="alternate"; type="text/markdown"');
  assert.equal(res.headers.get("X-Robots-Tag"), null);
});

test("pages.dev hosts are served (no redirect) and marked noindex", async () => {
  for (const host of ["odestech-github-io.pages.dev", "claude-charming-cori-guh2jj.odestech-github-io.pages.dev"]) {
    const { res, nextCalled } = await call(`https://${host}/es/`);
    assert.equal(nextCalled, true, host);
    assert.equal(res.status, 200, host);
    assert.equal(res.headers.get("X-Robots-Tag"), "noindex", host);
  }
});

test("Accept: text/markdown gets the Markdown version", async () => {
  const { res } = await call("https://www.odestech.cn/about/", { accept: "text/markdown" });
  assert.equal(res.status, 200);
  assert.match(res.headers.get("Content-Type"), /^text\/markdown/);
  assert.equal(await res.text(), MD);
  assert.equal(res.headers.get("Link"), '<https://www.odestech.cn/about/>; rel="canonical"');
});

test("direct index.md hits are noindex with a canonical to the HTML page", async () => {
  const { res } = await call("https://www.odestech.cn/about/index.md");
  assert.equal(res.headers.get("X-Robots-Tag"), "noindex");
  assert.equal(res.headers.get("Link"), '<https://www.odestech.cn/about/>; rel="canonical"');
});

test("wantsMarkdown follows Accept negotiation", () => {
  assert.equal(wantsMarkdown("text/markdown"), true);
  assert.equal(wantsMarkdown("text/markdown, text/html;q=0.9"), true);
  assert.equal(wantsMarkdown("text/*"), true);
  assert.equal(wantsMarkdown("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"), false);
  assert.equal(wantsMarkdown("*/*"), false);
  assert.equal(wantsMarkdown(null), false);
});
