import type { ReactNode } from "react";
import type { Dict } from "../content";
import { pathFor, type Lang, type PageKey } from "../site";
import { IconArrow, IconCheck, IconPlus } from "./Icons";

/** Responsive photo. Variants are pre-generated in public/images at 640/1024/1600 px. */
export function Picture({
  name,
  alt,
  sizes,
  eager = false,
  className = "",
}: {
  name: string;
  alt: string;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`/images/${name}-640.webp 640w, /images/${name}-1024.webp 1024w, /images/${name}-1600.webp 1600w`}
        sizes={sizes}
      />
      <img
        src={`/images/${name}-1024.jpg`}
        alt={alt}
        width={1024}
        height={683}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...(eager ? { fetchPriority: "high" as const } : {})}
        className={className}
      />
    </picture>
  );
}

/** Eyebrow + heading (+ optional intro). One language per page: no second-language subtitle. */
export function SectionHeader({
  eyebrow,
  title,
  sub,
  id,
  center = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  id?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-5 reveal ${center ? "justify-center" : ""}`}>
        <span className="blue-rule" aria-hidden="true" />
        <p className="section-label">{eyebrow}</p>
      </div>
      <h2 id={id} className="h-section reveal">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-body reveal">{sub}</p>}
    </div>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="bullet-item">
      <span className="bullet-dot" aria-hidden="true">
        <IconCheck />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function Breadcrumbs({ lang, t, trail }: { lang: Lang; t: Dict; trail: { label: string; key?: PageKey }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 hero-in">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
        <li>
          <a className="hover:text-brand" href={pathFor(lang, "home")}>
            {t.common.home}
          </a>
        </li>
        {trail.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {c.key ? (
              <a className="hover:text-brand" href={pathFor(lang, c.key)}>
                {c.label}
              </a>
            ) : (
              <span aria-current="page" className="text-ink font-medium">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Sub-page hero: breadcrumb, eyebrow, H1, lead, optional photo. */
export function PageHero({
  lang,
  t,
  trail,
  eyebrow,
  title,
  lead,
  image,
  children,
}: {
  lang: Lang;
  t: Dict;
  trail: { label: string; key?: PageKey }[];
  eyebrow: string;
  title: string;
  lead: string;
  image?: { name: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-brand-wash">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className={`container relative grid gap-12 items-center ${image ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
        <div className={image ? "" : "max-w-3xl"}>
          <Breadcrumbs lang={lang} t={t} trail={trail} />
          <div className="flex items-center gap-3 mb-6 hero-in">
            <span className="blue-rule" aria-hidden="true" />
            <p className="section-label">{eyebrow}</p>
          </div>
          <h1 className="h-page hero-in hero-in-2">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-body max-w-2xl hero-in hero-in-3">{lead}</p>
          {children}
        </div>
        {image && (
          <div className="rounded-2xl overflow-hidden border border-line shadow-sm hero-in hero-in-3">
            <Picture name={image.name} alt={image.alt} eager sizes="(min-width: 1024px) 560px, 100vw" className="w-full h-64 lg:h-[22rem] object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}

export function Faq({ t, items }: { t: Dict; items: { q: string; a: string }[] }) {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="faq">
      <div className="container grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
        <SectionHeader id="faq" eyebrow={t.common.faqEyebrow} title={t.common.faqTitle} />
        <div className="divide-y divide-line border-y border-line">
          {items.map((f, i) => (
            <details key={i} className="faq-item group py-5 reveal" open={i === 0}>
              <summary className="flex items-start justify-between gap-6">
                <h3 className="text-base lg:text-lg font-semibold text-ink leading-snug">{f.q}</h3>
                <span className="faq-chevron text-brand transition-transform mt-1" aria-hidden="true">
                  <IconPlus />
                </span>
              </summary>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-body max-w-3xl">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ lang, t }: { lang: Lang; t: Dict }) {
  const c = t.common.ctaBand;
  return (
    <section className="py-16 lg:py-20 bg-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 grid-bg" aria-hidden="true" />
      <div className="container relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">{c.title}</h2>
          <p className="mt-3 text-white/80 leading-relaxed">{c.body}</p>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
          <a href={pathFor(lang, "contact") + "#enquiry"} className="btn-primary !bg-white !text-brand !border-white hover:!bg-brand-pale">
            {c.button} <IconArrow />
          </a>
          <a href="mailto:info@odestech.cn" className="text-sm text-white/75 hover:text-white underline-offset-4 hover:underline">
            {c.email}
          </a>
        </div>
      </div>
    </section>
  );
}
