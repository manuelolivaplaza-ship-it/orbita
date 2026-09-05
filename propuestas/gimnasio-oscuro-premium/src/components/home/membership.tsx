import { Button } from "@/components/button";
import { Chapter, Reveal } from "@/components/reveal";
import { plans, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Membership() {
  return (
    <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <Chapter n="05" label="Membresía" />
      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl lg:col-span-8">
          Ciento ochenta cupos.
          <span className="italic text-ivory-soft"> Quedan {site.available}.</span>
        </h2>
        <p className="max-w-sm text-ivory-soft lg:col-span-4">
          Matrícula única de 16 UF. Permanencia de seis meses. Precios en UF,
          porque el club se piensa en años.
        </p>
      </div>
      <div className="mt-16 grid gap-4 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal
            key={plan.id}
            delay={i * 90}
            className={cn(
              "flex flex-col border px-7 py-10",
              plan.featured
                ? "border-copper bg-surface"
                : "border-line bg-transparent",
            )}
          >
            {plan.featured ? (
              <p className="mb-6 font-mono text-[0.58rem] tracking-[0.32em] text-copper uppercase">
                La más elegida
              </p>
            ) : (
              <p className="mb-6 font-mono text-[0.58rem] tracking-[0.32em] text-muted uppercase">
                {plan.id}
              </p>
            )}
            <h3 className="font-serif text-4xl">{plan.name}</h3>
            <p className="mt-5 flex items-baseline gap-2">
              <span className="font-serif text-5xl tracking-tight">
                {plan.price}
              </span>
              <span className="font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">
                {plan.unit}
              </span>
            </p>
            <p className="mt-5 min-h-[4.5rem] text-ivory-soft">{plan.blurb}</p>
            <ul className="mt-8 flex-1 space-y-3 text-sm text-ivory-soft">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-px w-3 shrink-0 bg-copper" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              href="/visita"
              variant={plan.featured ? "copper" : "outline"}
              className="mt-10 w-full"
            >
              {plan.cta}
            </Button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
