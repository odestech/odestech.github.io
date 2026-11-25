/** Fine-line inline SVG icons from the original design. Decorative: aria-hidden. */
import type { ReactElement, SVGProps } from "react";

const base = (size: number, sw = 1.6): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
});

export const IconMenu = () => (
  <svg {...base(22, 1.8)}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
);
export const IconX = () => (
  <svg {...base(20, 1.8)}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
export const IconArrow = () => (
  <svg {...base(16, 2)}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);
export const IconCheck = () => (
  <svg {...base(13, 2.5)}><polyline points="20 6 9 17 4 12" /></svg>
);
export const IconPlus = () => (
  <svg {...base(18, 2)}><path d="M12 5v14M5 12h14" /></svg>
);
export const IconPhone = () => (
  <svg {...base(18)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" /></svg>
);
export const IconMail = () => (
  <svg {...base(18)}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
export const IconPin = () => (
  <svg {...base(18)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const IconUser = () => (
  <svg {...base(18)}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
);
export const IconLinkedIn = () => (
  <svg {...base(18)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);
export const IconLang = () => (
  <svg {...base(18)}><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" /></svg>
);

const IconGlobe = () => (
  <svg {...base(22, 1.5)}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" /><path d="M2 12h20" /></svg>
);
const IconSearch = () => (
  <svg {...base(22, 1.5)}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
);
const IconFlask = () => (
  <svg {...base(22, 1.5)}><path d="M9 3h6m-6 0v6l-4 9a1 1 0 0 0 .9 1.4h12.2a1 1 0 0 0 .9-1.4L15 9V3" /><path d="M6.1 14h11.8" /></svg>
);
const IconTruck = () => (
  <svg {...base(22, 1.5)}><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
);
const IconShield = () => (
  <svg {...base(22, 1.5)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
const IconNetwork = () => (
  <svg {...base(22, 1.5)}><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M12 7.5v4M12 11.5 6.5 17M12 11.5l5.5 5.5" /></svg>
);
const IconTarget = () => (
  <svg {...base(22, 1.5)}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);
const IconBriefcase = () => (
  <svg {...base(22, 1.5)}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);

const MAP: Record<string, () => ReactElement> = {
  globe: IconGlobe,
  search: IconSearch,
  flask: IconFlask,
  truck: IconTruck,
  shield: IconShield,
  network: IconNetwork,
  target: IconTarget,
  briefcase: IconBriefcase,
};

export function FeatureIcon({ name }: { name: string }) {
  const C = MAP[name] ?? IconSearch;
  return <C />;
}
