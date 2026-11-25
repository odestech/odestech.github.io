import { IconArrow } from "../components/Icons";
import { Bullet, CtaBand, Faq, PageHero, SectionHeader } from "../components/ui";
import { pathFor } from "../site";
import type { PageProps } from "./Home";

/** Shared layout for /business/medical/ (pharma) and /business/energy/. */
export default function Sector({ lang, t, alt, sector }: PageProps & { sector: "pharma" | "energy" }) {
  const p = t.pages[sector];
  const card = t.sectors.cards.find((c) => c.key === sector)!;
  const otherKey = sector === "pharma" ? "energy" : "pharma";
  const otherCard = t.sectors.cards.find((c) => c.key === otherKey)!;
  const businessLabel = t.pages.business.crumb;

  return (
    <>
      <PageHero
        lang={lang}
        t={t}
        trail={[{ label: businessLabel, key: "business" }, { label: p.crumb }]}
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        lead={p.hero.lead}
        image={{ name: card.img, alt: card.alt }}
      >
        <div className="mt-8 flex flex-wrap gap-3 hero-in hero-in-3">
          <a href={pathFor(lang, "contact") + "#enquiry"} className="btn-primary">
            {t.cta} <IconArrow />
          </a>
          <a href="#enquiry-checklist" className="btn-ghost">
            {p.enquiry.title}
          </a>
        </div>
      </PageHero>

      {/* ── Catalogue ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="catalog">
        <div className="container">
          <SectionHeader id="catalog" eyebrow={card.tag} title={p.catalogTitle} alt={alt.pages[sector].catalogTitle} altLang={alt.lang} />
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.catalog.map((c, i) => (
              <li key={c.title} className="card card-hover reveal">
                <span className="text-xs font-bold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">{c.title}</h3>
                <p className="mt-3 text-sm text-body leading-relaxed">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Compliance / services blocks + enquiry checklist ─ */}
      <section className="py-20 lg:py-28 bg-brand-wash">
        <div className="container grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-12">
            {p.blocks.map((b) => (
              <div key={b.title} className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <span className="blue-rule" aria-hidden="true" />
                  <h2 className="text-2xl font-bold tracking-tight text-ink">{b.title}</h2>
                </div>
                {b.intro && <p className="text-base text-body leading-relaxed">{b.intro}</p>}
                {b.items.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {b.items.map((it) => (
                      <Bullet key={it}>{it}</Bullet>
                    ))}
                  </ul>
                )}
                {b.note && <p className="mt-5 text-sm text-ink border-l-2 border-brand pl-4 leading-relaxed">{b.note}</p>}
              </div>
            ))}
          </div>
          <aside id="enquiry-checklist" className="card lg:sticky lg:top-24 reveal" aria-labelledby="enquiry-checklist-h">
            <h2 id="enquiry-checklist-h" className="text-xl font-bold tracking-tight text-ink">
              {p.enquiry.title}
            </h2>
            <p className="mt-2 text-sm text-body">{p.enquiry.intro}</p>
            <ol className="mt-5 space-y-3">
              {p.enquiry.items.map((it, i) => (
                <li key={it} className="flex gap-3 text-sm text-ink leading-relaxed">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-brand-pale text-brand text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ol>
            <a href={pathFor(lang, "contact") + "#enquiry"} className="btn-primary w-full mt-7">
              {t.cta} <IconArrow />
            </a>
          </aside>
        </div>
      </section>

      <Faq t={t} items={p.faq} alt={alt.common.faqTitle} altLang={alt.lang} />

      {/* ── Cross-link to the other sector ─────────────────── */}
      <section className="pb-20 bg-white">
        <div className="container">
          <a href={pathFor(lang, otherKey)} className="card card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <span>
              <span className="section-label">{otherCard.tag}</span>
              <span className="block mt-2 text-xl font-bold tracking-tight text-ink group-hover:text-brand">{otherCard.title}</span>
              <span className="block mt-1 text-sm text-body">{otherCard.desc}</span>
            </span>
            <span className="text-brand shrink-0">
              <IconArrow />
            </span>
          </a>
        </div>
      </section>

      <CtaBand lang={lang} t={t} />
    </>
  );
}
