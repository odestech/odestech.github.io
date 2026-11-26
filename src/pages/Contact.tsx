import ContactForm from "../components/ContactForm";
import { IconLinkedIn, IconMail, IconPhone, IconPin, IconUser } from "../components/Icons";
import { PageHero } from "../components/ui";
import { ORG } from "../site";
import type { PageProps } from "./Home";

export default function Contact({ lang, t }: PageProps) {
  const p = t.pages.contact;
  const L = t.common.labels;
  const rows = [
    { icon: <IconUser />, label: L.contact, value: ORG.contactPerson[lang] },
    { icon: <IconPhone />, label: L.phone, value: ORG.phoneDisplay, href: `tel:${ORG.phone.replace(/-/g, "")}` },
    { icon: <IconMail />, label: L.email, value: ORG.email, href: `mailto:${ORG.email}` },
    { icon: <IconLinkedIn />, label: L.linkedin, value: "ODES Technology", href: ORG.linkedin },
    { icon: <IconPin />, label: L.address, value: `${ORG.legalName[lang]}, ${ORG.address[lang].oneLine}` },
  ];
  return (
    <>
      <PageHero lang={lang} t={t} trail={[{ label: p.crumb }]} eyebrow={p.hero.eyebrow} title={p.hero.title} lead={p.hero.lead} />
      <section className="py-16 lg:py-24 bg-white">
        <div className="container grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-start">
          <div>
            <ul className="space-y-3">
              {rows.map((r) => (
                <li key={r.label} className="flex items-start gap-4 p-4 rounded-xl bg-brand-pale/70 border border-brand/10">
                  <span className="icon-wrap !w-9 !h-9 !rounded-[0.625rem] bg-white">{r.icon}</span>
                  <span>
                    <span className="block text-[11px] font-semibold text-muted uppercase tracking-wider mb-0.5">{r.label}</span>
                    {r.href ? (
                      <a href={r.href} className="text-sm text-ink hover:text-brand break-words" {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
                        {r.value}
                      </a>
                    ) : (
                      <span className="text-sm text-ink leading-relaxed">{r.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 card !p-6">
              <h2 className="text-base font-bold text-ink">{p.checklistTitle}</h2>
              <ol className="mt-4 space-y-2.5">
                {p.checklist.map((c, i) => (
                  <li key={c} className="flex gap-3 text-sm text-body">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-brand-pale text-brand text-[11px] font-bold flex items-center justify-center">{i + 1}</span>
                    {c}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div id="enquiry" className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-line shadow-[0_4px_32px_oklch(0_0_0/0.06)]">
            <h2 className="text-xl font-semibold tracking-tight text-ink">{p.form.heading}</h2>
            <p className="mt-1 mb-6 text-sm text-muted">{p.form.intro}</p>
            <ContactForm lang={lang} t={t} />
          </div>
        </div>
      </section>
    </>
  );
}
