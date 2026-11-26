import { CtaBand, PageHero, Picture, SectionHeader } from "../components/ui";
import { HERO_ALT } from "../content";
import type { PageProps } from "./Home";

export default function About({ lang, t }: PageProps) {
  const p = t.pages.about;
  return (
    <>
      <PageHero lang={lang} t={t} trail={[{ label: p.crumb }]} eyebrow={p.hero.eyebrow} title={p.hero.title} lead={p.hero.lead} />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="prose-odes text-base lg:text-lg leading-relaxed text-body">
            {p.body.map((para) => (
              <p key={para.slice(0, 24)} className="reveal">
                {para}
              </p>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden border border-line reveal">
            <Picture name="hero" alt={HERO_ALT[lang]} sizes="(min-width: 1024px) 600px, 100vw" className="w-full h-64 lg:h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-wash" aria-labelledby="values">
        <div className="container">
          <SectionHeader id="values" eyebrow={p.values.eyebrow} title={p.values.title} />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.values.items.map((v) => (
              <li key={v.letter} className="card !p-6 reveal">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black text-brand tracking-tighter" aria-hidden="true">
                    {v.letter}
                  </span>
                  <h3 className="text-base font-semibold text-ink">{v.word}</h3>
                </div>
                <p className="mt-3 text-sm text-body leading-relaxed">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="details">
        <div className="container max-w-4xl">
          <SectionHeader id="details" eyebrow={p.details.eyebrow} title={p.details.title} />
          <dl className="divide-y divide-line border-y border-line reveal">
            {p.details.rows.map(([k, v]) => (
              <div key={k} className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 py-4">
                <dt className="text-sm font-semibold text-muted">{k}</dt>
                <dd className="text-sm text-ink leading-relaxed">
                  {v.includes("@") ? (
                    <a className="text-brand hover:underline" href={`mailto:${v}`}>
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand lang={lang} t={t} />
    </>
  );
}
