import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Dict } from "../content";
import { LANGS, LANG_META, ORG, pathFor, type Lang, type PageKey } from "../site";
import { IconArrow, IconMail, IconMenu, IconPhone, IconX } from "./Icons";

declare const __BUILD_YEAR__: string;

function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src="/images/logo-64.png"
        srcSet="/images/logo-64.png 1x, /images/logo-128.png 2x"
        alt=""
        width={32}
        height={32}
        className={`w-8 h-8 ${invert ? "brightness-0 invert opacity-90" : ""}`}
      />
      <span className="leading-none">
        <span className={`block text-base font-semibold tracking-tight ${invert ? "text-white/90" : "text-ink"}`}>ODES</span>
        <span className="block text-[10px] font-semibold tracking-[0.15em] text-brand mt-0.5">TECHNOLOGY</span>
      </span>
    </span>
  );
}

/** EN · ES · FR · PT · 中文 as a row of buttons (mobile menu). */
function LangSwitch({ lang, page, dark = false }: { lang: Lang; page: PageKey; dark?: boolean }) {
  const target = page === "notfound" ? "home" : page;
  return (
    <ul className={`flex items-center rounded-full p-0.5 text-sm font-medium border ${dark ? "border-white/20 w-full" : "border-brand/25"}`}>
      {LANGS.map((l) => {
        const cur = l === lang;
        const m = LANG_META[l];
        return (
          <li key={l} className={dark ? "flex-1" : undefined}>
            <a
              href={pathFor(l, target)}
              hrefLang={m.hreflang}
              lang={m.hreflang}
              aria-label={m.switchAria}
              aria-current={cur ? "true" : undefined}
              className={`block text-center px-2.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                cur ? (dark ? "bg-white text-ink" : "bg-brand text-white") : dark ? "text-white/80 hover:text-white" : "text-brand hover:bg-brand-pale"
              }`}
            >
              {m.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Desktop language menu: the current language with a dropdown of the others.
 * A native <details> element, so it opens without JavaScript; once hydrated
 * it also closes on outside click and Escape.
 */
function LangMenu({ lang, page }: { lang: Lang; page: PageKey }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const target = page === "notfound" ? "home" : page;
  useEffect(() => {
    const close = (e: Event) => {
      const el = ref.current;
      if (!el?.open) return;
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !el.contains(e.target as Node)) el.open = false;
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, []);
  return (
    <details ref={ref} className="relative group">
      <summary
        className="list-none [&::-webkit-details-marker]:hidden flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full text-brand border border-brand/30 hover:bg-brand-pale whitespace-nowrap"
        aria-label={`Language: ${LANG_META[lang].name}`}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2M2 12h20" />
        </svg>
        {LANG_META[lang].label}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="transition-transform group-open:rotate-180">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ul className="absolute right-0 mt-2 w-44 rounded-xl bg-white border border-line shadow-lg py-1.5 z-50">
        {LANGS.map((l) => {
          const m = LANG_META[l];
          const cur = l === lang;
          return (
            <li key={l}>
              <a
                href={pathFor(l, target)}
                hrefLang={m.hreflang}
                lang={m.hreflang}
                aria-current={cur ? "true" : undefined}
                className={`flex items-center justify-between px-4 py-2 text-sm ${cur ? "text-brand font-semibold bg-brand-pale/60" : "text-ink hover:bg-brand-pale/60"}`}
              >
                <span>{m.name}</span>
                <span className="text-xs text-muted">{m.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}

/** Adds .revealed to .reveal elements as they scroll into view. */
function useReveal() {
  useEffect(() => {
    (window as unknown as { __odesHydrated?: boolean }).__odesHydrated = true;
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Layout({
  lang,
  t,
  page,
  children,
}: {
  lang: Lang;
  t: Dict;
  page: PageKey;
  children: ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const contactHref = pathFor(lang, "contact") + "#enquiry";
  const solid = scrolled || open;

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] btn-primary">
        {t.skip}
      </a>

      {/* ── Header ─────────────────────────────────────────── */}
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: solid ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: solid ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: solid ? "blur(20px) saturate(180%)" : "none",
          borderBottom: solid ? "1px solid var(--color-line)" : "1px solid transparent",
        }}
      >
        <div className="container flex items-center justify-between h-16">
          <a href={pathFor(lang, "home")} aria-label={`ODES Technology — ${t.common.home}`}>
            <Logo />
          </a>
          <nav aria-label="Main" className="hidden lg:flex items-center gap-5 xl:gap-7">
            {t.nav.map((n) => (
              <a key={n.key} href={pathFor(lang, n.key as PageKey)} className="nav-link whitespace-nowrap" aria-current={page === n.key ? "page" : undefined}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <LangMenu lang={lang} page={page} />
            <a href={contactHref} className="btn-primary !py-2 !text-sm whitespace-nowrap !hidden xl:!inline-flex">
              {t.cta}
            </a>
          </div>
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 rounded-lg text-brand"
            aria-label={t.menu.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <IconMenu />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu (original design) ───────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-[60] lg:hidden flex flex-col bg-ink"
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: "opacity 300ms cubic-bezier(0.23,1,0.32,1), visibility 300ms",
        }}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
          <Logo invert />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.menu.close}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
          >
            <IconX />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto flex flex-col justify-center px-5">
          {t.nav.map((n, i) => (
            <a
              key={n.key}
              href={pathFor(lang, n.key as PageKey)}
              onClick={() => setOpen(false)}
              aria-current={page === n.key ? "page" : undefined}
              className="group py-4 border-b border-white/[0.06] flex items-center gap-4"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateX(-20px)",
                transition: `opacity 400ms cubic-bezier(0.23,1,0.32,1) ${i * 55 + 80}ms, transform 400ms cubic-bezier(0.23,1,0.32,1) ${i * 55 + 80}ms`,
              }}
            >
              <span className="text-xs font-bold tabular-nums w-7 shrink-0 text-brand">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1 min-w-0">
                <span className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-xl font-bold text-white tracking-tight">{n.label}</span>
                  <span className="text-[9px] font-semibold tracking-widest text-brand/80">{n.sub}</span>
                </span>
                <span className="block text-xs text-white/40 leading-snug">{n.desc}</span>
              </span>
              <span className="text-brand opacity-60 group-hover:opacity-100">
                <IconArrow />
              </span>
            </a>
          ))}
        </nav>
        <div className="px-5 pb-10 pt-5 border-t border-white/10 flex flex-col items-stretch gap-4">
          <LangSwitch lang={lang} page={page} dark />
          <a href={contactHref} onClick={() => setOpen(false)} className="btn-primary">
            {t.cta}
          </a>
        </div>
      </div>

      <main id="main" className="flex-1">
        {children}
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-ink text-white/70 pt-16 pb-10">
        <div className="container">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
            <div>
              <Logo invert />
              <p className="mt-4 text-sm leading-relaxed text-white/55 max-w-xs">{t.footer.tagline}</p>
              <p className="mt-3 text-xs tracking-wide text-white/35">{t.motto}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">{t.footer.sectors}</h2>
              <ul className="space-y-2.5 text-sm">
                {(["pharma", "energy", "business"] as PageKey[]).map((k) => (
                  <li key={k}>
                    <a className="hover:text-white" href={pathFor(lang, k)}>
                      {t.nav.find((n) => n.key === k)?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">{t.footer.company}</h2>
              <ul className="space-y-2.5 text-sm">
                {(["about", "contact"] as PageKey[]).map((k) => (
                  <li key={k}>
                    <a className="hover:text-white" href={pathFor(lang, k)}>
                      {t.nav.find((n) => n.key === k)?.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a className="hover:text-white" href={ORG.linkedin} rel="noopener" target="_blank">
                    LinkedIn
                  </a>
                </li>
                {LANGS.filter((l) => l !== lang).map((l) => (
                  <li key={l}>
                    <a className="hover:text-white" href={pathFor(l, page === "notfound" ? "home" : page)} hrefLang={LANG_META[l].hreflang} lang={LANG_META[l].hreflang}>
                      {LANG_META[l].siteLink}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <address className="not-italic text-sm space-y-2.5">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">{t.footer.contact}</h2>
              <p>{ORG.legalName[lang]}</p>
              <p className="text-white/55 leading-relaxed">{ORG.address[lang].oneLine}</p>
              <p className="flex items-center gap-2">
                <IconMail />
                <a className="hover:text-white" href={`mailto:${ORG.email}`}>
                  {ORG.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <IconPhone />
                <a className="hover:text-white" href={`tel:${ORG.phone.replace(/-/g, "")}`}>
                  {ORG.phoneDisplay}
                </a>
              </p>
            </address>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/35 flex flex-col sm:flex-row justify-between gap-2">
            <p>
              © {__BUILD_YEAR__} {t.footer.rights}
            </p>
            <p>www.odestech.cn</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
