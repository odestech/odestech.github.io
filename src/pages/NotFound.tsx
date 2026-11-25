import { pathFor, type PageKey } from "../site";
import type { PageProps } from "./Home";

export default function NotFound({ lang, t }: PageProps) {
  const p = t.pages.notfound;
  return (
    <section className="pt-36 pb-28 bg-brand-wash min-h-[70vh]">
      <div className="container max-w-2xl">
        <p className="section-label">404</p>
        <h1 className="h-page mt-4">{p.title}</h1>
        <p className="mt-5 text-body">{p.body}</p>
        <ul className="mt-6 space-y-2">
          {t.nav.map((n) => (
            <li key={n.key}>
              <a className="text-brand hover:underline" href={pathFor(lang, n.key as PageKey)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={pathFor(lang, "home")} className="btn-primary mt-10">
          {p.home}
        </a>
      </div>
    </section>
  );
}
