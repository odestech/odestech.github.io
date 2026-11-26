import { FeatureIcon, IconArrow } from "../components/Icons";
import { Bullet, Picture, SectionHeader } from "../components/ui";
import type { Dict } from "../content";
import { pathFor, type Lang, type PageKey } from "../site";

const bgClass = (bg: "white" | "wash") => (bg === "wash" ? "bg-brand-wash" : "bg-white");

/** The two sectors as equal-weight cards with photos. */
export function SectorCards({ lang, t, id, bg = "white", showBadges = true }: { lang: Lang; t: Dict; id?: string; bg?: "white" | "wash"; showBadges?: boolean }) {
  const s = t.sectors;
  return (
    <section id={id} className={`py-20 lg:py-28 ${bgClass(bg)}`} aria-labelledby={`${id ?? "sectors"}-h`}>
      <div className="container">
        <SectionHeader id={`${id ?? "sectors"}-h`} eyebrow={s.eyebrow} title={s.title} sub={s.sub} />
        <div className="grid lg:grid-cols-2 gap-6">
          {s.cards.map((c) => (
            <article key={c.key} className="card card-hover !p-0 overflow-hidden flex flex-col reveal">
              <a href={pathFor(lang, c.key as PageKey)} tabIndex={-1} aria-hidden="true" className="block">
                <Picture name={c.img} alt={c.alt} sizes="(min-width: 1024px) 620px, 100vw" className="w-full h-52 lg:h-60 object-cover" />
              </a>
              <div className="p-7 lg:p-9 flex flex-col flex-1">
                <p className="badge-pill self-start !text-[10px] tracking-wider">{c.tag}</p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">
                  <a href={pathFor(lang, c.key as PageKey)} className="hover:text-brand">
                    {c.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm text-body leading-relaxed">{c.desc}</p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                  {c.items.map((it) => (
                    <Bullet key={it}>{it}</Bullet>
                  ))}
                </ul>
                <a href={pathFor(lang, c.key as PageKey)} className="btn-ghost self-start mt-7">
                  {t.common.viewScope} <IconArrow />
                </a>
              </div>
            </article>
          ))}
        </div>
        {showBadges && (
          <div className="mt-12 reveal">
            <h3 className="text-xs font-semibold text-muted mb-3 tracking-widest uppercase">{s.badgesTitle}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.badges.map((b) => (
                <li key={b} className="badge-pill">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export function ServicesSection({ t, bg = "white" }: { t: Dict; bg?: "white" | "wash" }) {
  const s = t.services;
  return (
    <section className={`py-20 lg:py-28 ${bgClass(bg)}`} aria-labelledby="services">
      <div className="container">
        <SectionHeader id="services" eyebrow={s.eyebrow} title={s.title} sub={s.sub} />
        <div className="grid md:grid-cols-2 gap-6">
          {s.items.map((svc) => (
            <article key={svc.title} className="card card-hover reveal">
              <div className="flex items-start justify-between mb-5">
                <span className="icon-wrap">
                  <FeatureIcon name={svc.icon} />
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-brand/60">{svc.tag}</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-ink">{svc.title}</h3>
              <p className="mt-3 text-sm font-semibold text-ink/80 leading-snug">{svc.headline}</p>
              <p className="mt-3 text-sm text-body leading-relaxed">{svc.body}</p>
              <ul className="mt-5 space-y-2">
                {svc.bullets.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ t, bg = "white" }: { t: Dict; bg?: "white" | "wash" }) {
  const p = t.process;
  return (
    <section className={`py-20 lg:py-28 ${bgClass(bg)}`} aria-labelledby="process">
      <div className="container">
        <SectionHeader id="process" eyebrow={p.eyebrow} title={p.title} sub={p.sub} />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {p.steps.map((s, i) => (
            <li key={s.title} className="card !p-6 reveal relative">
              <span className="text-xs font-bold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-base font-bold tracking-tight text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-body leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
