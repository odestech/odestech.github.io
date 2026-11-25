import { useRef, useState, type FormEvent } from "react";
import type { Dict } from "../content";
import { ORG, type Lang } from "../site";

/**
 * Formspree enquiry form (same endpoint as the previous site).
 *
 * The Manus draft's form only called alert() and discarded every enquiry.
 * This one posts natively when JS has not loaded, and is upgraded to a
 * fetch() submit with inline validation once hydrated.
 */
type Field = "name" | "company" | "email" | "message" | "consent";

export default function ContactForm({ lang, t }: { lang: Lang; t: Dict }) {
  const f = t.pages.contact.form;
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const id = (s: string) => `enq-${lang}-${s}`;

  function validate(form: HTMLFormElement) {
    const el = form.elements as unknown as Record<string, HTMLInputElement>;
    const e: Partial<Record<Field, string>> = {};
    if (!el.name.value.trim()) e.name = f.required;
    if (!el.company.value.trim()) e.company = f.required;
    if (!/^\S+@\S+\.\S+$/.test(el.email.value.trim())) e.email = f.emailBad;
    if (!el.message.value.trim()) e.message = f.required;
    if (!el.consent.checked) e.consent = f.consentBad;
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const e = validate(form);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    const data = new FormData(form);
    const company = String(data.get("company") || "").trim();
    data.set("_subject", company ? `${f.subject} — ${company}` : f.subject);
    setState("sending");
    try {
      const res = await fetch(ORG.formspree, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("ok");
      form.reset();
    } catch {
      // Keep what the visitor typed so a retry costs them nothing.
      setState("fail");
    }
  }

  const fieldProps = (name: Field) => ({
    id: id(name),
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? id(`${name}-err`) : undefined,
  });
  const Err = ({ name }: { name: Field }) =>
    errors[name] ? (
      <p id={id(`${name}-err`)} className="mt-1 text-xs text-red-700">
        {errors[name]}
      </p>
    ) : null;
  const Label = ({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: boolean }) => (
    <label htmlFor={htmlFor} className="block text-xs font-medium text-muted mb-1.5">
      {children}
      {optional ? <span className="font-normal"> ({f.optional})</span> : " *"}
    </label>
  );

  if (state === "ok") {
    return (
      <div role="status" className="rounded-2xl bg-brand-pale border border-brand/20 p-6 text-ink">
        {f.ok}
      </div>
    );
  }

  return (
    <form ref={formRef} action={ORG.formspree} method="POST" onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor={id("name")}>{f.name}</Label>
          <input className="input-field" type="text" autoComplete="name" required {...fieldProps("name")} />
          <Err name="name" />
        </div>
        <div>
          <Label htmlFor={id("company")}>{f.company}</Label>
          <input className="input-field" type="text" autoComplete="organization" required {...fieldProps("company")} />
          <Err name="company" />
        </div>
        <div>
          <Label htmlFor={id("email")}>{f.email}</Label>
          <input className="input-field" type="email" autoComplete="email" required {...fieldProps("email")} />
          <Err name="email" />
        </div>
        <div>
          <Label htmlFor={id("country")} optional>
            {f.country}
          </Label>
          <input className="input-field" type="text" id={id("country")} name="country" autoComplete="country-name" />
        </div>
        <div>
          <Label htmlFor={id("phone")} optional>
            {f.phone}
          </Label>
          <input className="input-field" type="tel" id={id("phone")} name="phone" autoComplete="tel" />
        </div>
        <div>
          <Label htmlFor={id("sector")} optional>
            {f.sector}
          </Label>
          <select className="input-field" id={id("sector")} name="sector" defaultValue="">
            <option value="">{f.sectorNone}</option>
            {f.sectorOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <Label htmlFor={id("message")}>{f.message}</Label>
        <textarea className="input-field resize-y" rows={5} placeholder={f.messageHint} required {...fieldProps("message")} />
        <Err name="message" />
      </div>
      <div>
        <label className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
          <input type="checkbox" value="yes" required className="mt-0.5 accent-[var(--color-brand)]" {...fieldProps("consent")} />
          <span>{f.consent}</span>
        </label>
        <Err name="consent" />
      </div>

      {/* Formspree honeypot: must stay in the DOM and off-screen, not display:none. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
      />
      <input type="hidden" name="_subject" value={f.subject} />
      <input type="hidden" name="page_lang" value={lang} />

      {state === "fail" && (
        <p role="alert" className="text-sm text-red-700">
          {f.fail}
        </p>
      )}
      <button type="submit" className="btn-primary w-full" disabled={state === "sending"}>
        {state === "sending" ? f.sending : f.submit}
      </button>
    </form>
  );
}
