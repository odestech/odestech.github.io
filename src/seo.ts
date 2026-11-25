/**
 * Builds the <head> tags for a prerendered page: title, description,
 * canonical, hreflang alternates, Open Graph / Twitter cards and a single
 * schema.org JSON-LD graph. Server-side only (imported by entry-server.tsx).
 *
 * The graph mirrors what the Hugo site published, so search engines and AI
 * answer engines keep resolving "ODES" to the same entity:
 *   Organization (#organization) — legal name, address, contact point, knowsAbout
 *   WebSite (#website)
 *   WebPage subtype (AboutPage / ContactPage / CollectionPage / WebPage)
 *   BreadcrumbList on every page below the home page
 *   Service + OfferCatalog on the two sector pages
 *   FAQPage wherever the page shows a FAQ
 */
import { DICTS } from "./content";
import { LANGS, LANG_META, ORG, SITE_URL, absUrl, pathFor, type Lang, type PageKey, type Route } from "./site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const OG_IMAGE: Partial<Record<PageKey, string>> = {
  pharma: "/images/og-pharma.jpg",
  energy: "/images/og-energy.jpg",
};

const KNOWS_ABOUT = [
  "Hydrotreating and hydrocracking catalysts",
  "FCC catalysts and additives",
  "Refining process chemicals",
  "Amine gas treating solvents",
  "Industrial water treatment chemicals",
  "Fuel and lubricant additives",
  "Industrial valves, pumps and mechanical seals",
  "Active pharmaceutical ingredients",
  "Pharmaceutical excipients",
  "Medical consumables and pharmaceutical packaging",
  "SDS and GHS authoring",
  "UN dangerous goods classification",
  "Export compliance and third-party inspection",
];

function meta(lang: Lang, key: PageKey) {
  const p = DICTS[lang].pages[key];
  return p.meta;
}

function organization(lang: Lang) {
  const a = ORG.address[lang];
  const otherNames = [...new Set(LANGS.map((l) => ORG.legalName[l]))].filter((n) => n !== ORG.legalName[lang]);
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG.brand,
    legalName: ORG.legalName[lang],
    alternateName: [ORG.shortName, ...otherNames],
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: absUrl(ORG.logo),
      contentUrl: absUrl(ORG.logo),
      width: 512,
      height: 512,
      caption: ORG.brand,
    },
    image: { "@id": `${SITE_URL}/#logo` },
    description: DICTS[lang].pages.home.meta.description,
    slogan: DICTS.en.motto,
    email: ORG.email,
    telephone: ORG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.locality,
      addressRegion: a.region,
      postalCode: ORG.address.postalCode,
      addressCountry: ORG.address.country,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "China" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: ORG.email,
      telephone: ORG.phone,
      areaServed: ["US", "CN"],
      availableLanguage: ["en", "zh"],
    },
    knowsAbout: KNOWS_ABOUT,
    knowsLanguage: ["en", "zh"],
    sameAs: [ORG.linkedin],
  };
}

const PAGE_TYPE: Record<PageKey, string> = {
  home: "WebPage",
  about: "AboutPage",
  business: "CollectionPage",
  pharma: "WebPage",
  energy: "WebPage",
  contact: "ContactPage",
  notfound: "WebPage",
};

function breadcrumbs(route: Route) {
  const t = DICTS[route.lang];
  const home = { name: t.common.home, path: pathFor(route.lang, "home") };
  const trail: { name: string; path: string }[] = [home];
  if (route.key === "pharma" || route.key === "energy") {
    trail.push({ name: t.pages.business.crumb, path: pathFor(route.lang, "business") });
  }
  if (route.key !== "home") {
    const crumb = (t.pages[route.key] as { crumb?: string }).crumb ?? "";
    trail.push({ name: crumb, path: route.path });
  }
  return trail;
}

function jsonLd(route: Route) {
  const { lang, key, path } = route;
  const t = DICTS[lang];
  const url = absUrl(path);
  const m = meta(lang, key);
  const graph: Record<string, unknown>[] = [organization(lang)];

  graph.push({
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: ORG.brand,
    alternateName: ORG.legalName.zh,
    description: DICTS.en.pages.home.meta.description,
    inLanguage: LANGS.map((l) => DICTS[l].htmlLang),
    publisher: { "@id": `${SITE_URL}/#organization` },
  });

  const webpage: Record<string, unknown> = {
    "@type": PAGE_TYPE[key],
    "@id": `${url}#webpage`,
    url,
    name: m.title,
    description: m.description,
    inLanguage: t.htmlLang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: { "@type": "ImageObject", url: absUrl(OG_IMAGE[key] ?? "/images/og-default.jpg") },
    dateModified: BUILD_DATE,
  };

  if (key !== "home") {
    const trail = breadcrumbs(route);
    webpage.breadcrumb = { "@id": `${url}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: trail.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        ...(i < trail.length - 1 ? { item: absUrl(c.path) } : {}),
      })),
    });
  }
  graph.push(webpage);

  if (key === "pharma" || key === "energy") {
    const p = t.pages[key];
    webpage.mainEntity = { "@id": `${url}#service` };
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: p.hero.title.replace(/[.。]$/, ""),
      serviceType: p.serviceType,
      description: m.description,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "China" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: p.catalogTitle,
        itemListElement: p.catalog.map((c) => ({
          "@type": "OfferCatalog",
          name: c.title,
          description: c.body,
        })),
      },
    });
  }

  const faq = key === "home" ? t.pages.home.faq : key === "pharma" || key === "energy" ? t.pages[key].faq : null;
  if (faq) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: t.htmlLang,
      isPartOf: { "@id": `${url}#webpage` },
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  // "</" must not appear raw inside a <script> element.
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/<\//g, "<\\/");
}

const BUILD_DATE = new Date().toISOString().slice(0, 10);

export function buildHead(route: Route): string {
  const { lang, key, path } = route;
  const t = DICTS[lang];
  const m = meta(lang, key);
  const url = absUrl(path);
  const isNotFound = key === "notfound";
  const ogImage = absUrl(OG_IMAGE[key] ?? "/images/og-default.jpg");
  const tags: string[] = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}">`,
    `<meta name="robots" content="${isNotFound ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1"}">`,
  ];

  if (!isNotFound) {
    tags.push(`<link rel="canonical" href="${url}">`);
    for (const l of LANGS) {
      tags.push(`<link rel="alternate" hreflang="${LANG_META[l].hreflang}" href="${absUrl(pathFor(l, key))}">`);
    }
    tags.push(`<link rel="alternate" hreflang="x-default" href="${absUrl(pathFor("en", key))}">`);
  }

  tags.push(
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(ORG.brand)}">`,
    `<meta property="og:title" content="${esc(m.title)}">`,
    `<meta property="og:description" content="${esc(m.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${ogImage}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(ORG.brand)}">`,
    `<meta property="og:locale" content="${t.ogLocale}">`,
    ...LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${DICTS[l].ogLocale}">`),
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(m.title)}">`,
    `<meta name="twitter:description" content="${esc(m.description)}">`,
    `<meta name="twitter:image" content="${ogImage}">`,
  );

  if (!isNotFound) tags.push(`<script type="application/ld+json">${jsonLd(route)}</script>`);
  return tags.join("\n    ");
}
