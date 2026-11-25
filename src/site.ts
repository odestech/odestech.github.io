/**
 * Single source of truth for company facts, URLs and routes.
 * Every page, the JSON-LD graph, the sitemap and llms.txt read from here,
 * so a change to the address or phone number is made once.
 */

export const SITE_URL = "https://www.odestech.cn";

export type Lang = "en" | "zh";
export const LANGS: Lang[] = ["en", "zh"];

export const ORG = {
  brand: "ODES Technology",
  shortName: "ODES",
  legalName: { en: "Shanghai Odes Technology Co., Ltd.", zh: "上海奥得斯科技有限公司" },
  email: "info@odestech.cn",
  phone: "+86-177-1787-6827",
  phoneDisplay: "+86 177 1787 6827",
  contactPerson: { en: "Luis (CEO)", zh: "Luis（CEO）" },
  linkedin: "https://www.linkedin.com/company/112375931/",
  formspree: "https://formspree.io/f/xyeyqznk",
  address: {
    en: {
      street: "Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District",
      locality: "Shanghai",
      region: "Shanghai",
      oneLine: "Room 712-596, Floor 7, No. 400 Zhejiang Middle Rd, Huangpu District, Shanghai 200001, China",
    },
    zh: {
      street: "黄浦区浙江中路 400 号 7 楼 712-596 室",
      locality: "上海市",
      region: "上海市",
      oneLine: "上海市黄浦区浙江中路 400 号 7 楼 712-596 室（邮编 200001）",
    },
    postalCode: "200001",
    country: "CN",
  },
  logo: "/images/logo.png",
} as const;

export type PageKey = "home" | "about" | "business" | "pharma" | "energy" | "contact" | "notfound";

/** Paths are kept identical to the previous Hugo site so indexed URLs survive. */
const PATHS: Record<Exclude<PageKey, "notfound">, string> = {
  home: "/",
  about: "/about/",
  business: "/business/",
  pharma: "/business/medical/",
  energy: "/business/energy/",
  contact: "/contact/",
};

export function pathFor(lang: Lang, key: PageKey): string {
  if (key === "notfound") return lang === "zh" ? "/zh/404/" : "/404/";
  const p = PATHS[key];
  return lang === "zh" ? `/zh${p}` : p;
}

export const absUrl = (path: string) => `${SITE_URL}${path}`;

export type Route = { lang: Lang; key: PageKey; path: string };

export const ROUTES: Route[] = LANGS.flatMap((lang) =>
  (Object.keys(PATHS) as Exclude<PageKey, "notfound">[]).map((key) => ({ lang, key, path: pathFor(lang, key) })),
);

/** Resolve a browser pathname to a route; unknown paths fall back to the 404 page in the matching language. */
export function resolveRoute(pathname: string): Route {
  let p = pathname.replace(/index\.html$/, "");
  if (!p.endsWith("/")) p += "/";
  const hit = ROUTES.find((r) => r.path === p);
  if (hit) return hit;
  const lang: Lang = p.startsWith("/zh/") ? "zh" : "en";
  return { lang, key: "notfound", path: pathFor(lang, "notfound") };
}

export const otherLang = (lang: Lang): Lang => (lang === "en" ? "zh" : "en");
