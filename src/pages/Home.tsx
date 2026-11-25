import { FeatureIcon, IconArrow } from "../components/Icons";
import { CtaBand, Faq, Picture, SectionHeader } from "../components/ui";
import type { Dict } from "../content";
import { pathFor, type Lang, type PageKey } from "../site";
import { ProcessSection, SectorCards, ServicesSection } from "./shared";

export default function Home({ lang, t, alt }: { lang: Lang; t: Dict; alt: Dict }) {
  const h = t.pages.home.hero;
  const altLang = alt.lang;
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-[92svh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0" aria-hidden="true">
          <Picture name="hero" alt="" eager sizes="100vw" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 55%, rgba(235,242,255,0.9) 100%)" }} />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="container relative z-10 py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-7 hero-in">
              <span className="blue-rule" aria-hidden="true" />
              <p className="section-label">{h.eyebrow}</p>
            </div>
            <h1 className="h-display hero-in hero-in-2">
              {h.line1}
              <br />
              <span className="text-brand">{h.line2}</span>
              <br />
              {h.line3}
            </h1>
            <p className="mt-6 text-lg lg:text-xl font-light leading-relaxed max-w-2xl text-body hero-in hero-in-3">{h.sub}</p>
            <p className="mt-3 text-sm font-light italic text-brand/70 hero-in hero-in-3">{t.motto}</p>
            <div className="mt-10 flex flex-wrap gap-4 hero-in hero-in-3">
              <a href="#sectors" className="btn-primary">
                {h.primary}
              </a>
              <a href={pathFor(lang, "contact") + "#enquiry"} className="btn-ghost">
                {h.secondary} <IconArrow />
              </a>
            </div>
          </div>
          {/* CN ↔ US marker from the original design */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 hero-in hero-in-3" aria-hidden="true">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand tracking-tight">CN</div>
              <div className="text-xs font-medium text-muted mt-0.5">{lang === "zh" ? "中国" : "China"}</div>
            </div>
            <div className="flex flex-col items-center gap-1 text-brand">
              <div className="w-px h-8" style={{ background: "linear-gradient(var(--color-brand), transparent)" }} />
              <div className="text-xs font-bold">↕</div>
              <div className="w-px h-8" style={{ background: "linear-gradient(transparent, var(--color-brand))" }} />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand tracking-tight">US</div>
              <div className="text-xs font-medium text-muted mt-0.5">{lang === "zh" ? "美国" : "United States"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Facts bar (verifiable figures only) ─────────────── */}
      <section className="py-14 lg:py-16 bg-brand-pale border-y border-brand/10" aria-label={lang === "zh" ? "关键信息" : "Key facts"}>
        <div className="container">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-brand/15">
            {t.facts.map((s, i) => (
              <div key={i} className="text-center lg:px-6 reveal flex flex-col-reverse">
                <dt className="mt-2">
                  <span className="block text-sm font-semibold text-ink">{s.label}</span>
                  <span className="block text-xs mt-1 text-brand/70 leading-snug">{s.sub}</span>
                </dt>
                <dd className="text-4xl lg:text-5xl font-bold tabular-nums text-brand tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <SectorCards lang={lang} t={t} alt={alt} id="sectors" />
      <ProcessSection t={t} alt={alt} bg="wash" />

      {/* ── Why ODES ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="why">
        <div className="container grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeader id="why" eyebrow={t.why.eyebrow} title={t.why.title} alt={alt.why.title} altLang={altLang} sub={t.why.sub} />
            <div className="reveal -mt-4">
              <div className="text-7xl font-black text-brand/15 tracking-tighter leading-none">{t.why.bigNum}</div>
              <div className="text-xs text-muted mt-1 max-w-[14rem] leading-snug">{t.why.bigLabel}</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.why.items.map((a, i) => (
              <div key={i} className="card card-hover !p-6 reveal">
                <div className="icon-wrap mb-4">
                  <FeatureIcon name={a.icon} />
                </div>
                <h3 className="text-base font-bold tracking-tight text-ink">{a.title}</h3>
                <p className="mt-2 text-sm text-body leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection t={t} alt={alt} bg="wash" />
      <Faq t={t} items={t.pages.home.faq} alt={alt.common.faqTitle} altLang={altLang} />
      <CtaBand lang={lang} t={t} />
    </>
  );
}

export type PageProps = { lang: Lang; t: Dict; alt: Dict; page?: PageKey };
