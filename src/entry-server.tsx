import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { DICTS } from "./content";
import { buildHead } from "./seo";
import { ROUTES, pathFor, type Lang, type Route } from "./site";

export function render(route: Route) {
  const html = renderToString(
    <StrictMode>
      <App route={route} />
    </StrictMode>,
  );
  return { html, head: buildHead(route), htmlLang: DICTS[route.lang].htmlLang };
}

export const notFoundRoute = (lang: Lang): Route => ({ lang, key: "notfound", path: pathFor(lang, "notfound") });
export { DICTS, ROUTES };
export { ORG, SITE_URL, pathFor } from "./site";
