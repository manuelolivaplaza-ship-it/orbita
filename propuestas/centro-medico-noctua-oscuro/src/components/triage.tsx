import { noNight, yesNight } from "@/data/content";
import { site } from "@/data/site";

export function Triage() {
  return (
    <div className="grid gap-px bg-line md:grid-cols-2">
      <div className="bg-void p-8 md:p-12">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
          Esto sí
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          La noche de esta casa.
        </h3>
        <ul className="mt-10 space-y-8">
          {yesNight.map((item) => (
            <li key={item.title} className="border-t border-line pt-6">
              <p className="font-display text-xl font-semibold tracking-tight">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-ink p-8 md:p-12">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
          Esto no
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Urgencia. SAMU {site.emergency}.
        </h3>
        <ul className="mt-10 space-y-8">
          {noNight.map((item) => (
            <li key={item.title} className="border-t border-line pt-6">
              <p className="font-display text-xl font-semibold tracking-tight">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
