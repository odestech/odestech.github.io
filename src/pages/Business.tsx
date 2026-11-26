import { CtaBand, PageHero } from "../components/ui";
import type { PageProps } from "./Home";
import { ProcessSection, SectorCards, ServicesSection } from "./shared";

export default function Business({ lang, t }: PageProps) {
  const p = t.pages.business;
  return (
    <>
      <PageHero lang={lang} t={t} trail={[{ label: p.crumb }]} eyebrow={p.hero.eyebrow} title={p.hero.title} lead={p.hero.lead} />
      <SectorCards lang={lang} t={t} id="sectors" />
      <ProcessSection t={t} bg="wash" />
      <ServicesSection t={t} />
      <CtaBand lang={lang} t={t} />
    </>
  );
}
