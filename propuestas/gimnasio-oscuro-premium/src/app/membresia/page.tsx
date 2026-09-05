import type { Metadata } from "next";
import { Accordion } from "@/components/accordion";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { Chapter, Reveal } from "@/components/reveal";
import { plans, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Membresía",
  description:
    "Studio, Club y Reservado. Membresías en UF, 180 cupos, permanencia de seis meses. Vitacura, Santiago.",
};

export default function MembresiaPage() {
  return (
    <>
      <PageHero
        chapter="05"
        kicker="Membresía"
        title={
          <>
            Ciento ochenta.
            <span className="italic"> No más.</span>
          </>
        }
        lead={`Hoy quedan ${site.available} cupos. La matrícula es única, de 16 UF. La permanencia, de seis meses. Los precios se expresan en UF.`}
        image="/images/lockers.jpg"
        imageAlt="Vestidores de roble ahumado y cobre en Obsidiana"
      />

      <section className="px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="I" label="Planes" />
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
              <p className="mb-6 font-mono text-[0.58rem] tracking-[0.32em] text-copper uppercase">
                {plan.featured ? "La más elegida" : plan.id}
              </p>
              <h2 className="font-serif text-4xl">{plan.name}</h2>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-serif text-6xl tracking-tight">
                  {plan.price}
                </span>
                <span className="font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">
                  {plan.unit}
                </span>
              </p>
              <p className="mt-5 text-ivory-soft">{plan.blurb}</p>
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
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          La UF se liquida al valor del día de facturación. Medios de pago:
          transferencia, PAC y tarjeta. Empresas: facturación a razón social
          con 30 días. La matrícula de 16 UF no se reembolsa; cubre inducción,
          evaluación y alta en el recinto.
        </p>
      </section>

      <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="II" label="Cómo se entra" />
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Visita",
              d: "Cuarenta minutos, individuales, con un coach. Recorres el recinto. Hablamos de cómo entrenas hoy.",
            },
            {
              n: "02",
              t: "Postulación",
              d: "Si hay cupo y el recinto te calza, se abre la ficha. No es un algoritmo: es una conversación.",
            },
            {
              n: "03",
              t: "Inducción",
              d: "Sesión de sesenta minutos. El piso, el studio, la suite. Tu programa empieza al día siguiente.",
            },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="border-t border-line pt-8">
              <p className="font-mono text-[0.62rem] tracking-[0.28em] text-copper">
                {s.n}
              </p>
              <h3 className="mt-5 font-serif text-4xl">{s.t}</h3>
              <p className="mt-5 leading-relaxed text-ivory-soft">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="III" label="Preguntas" />
        <h2 className="mt-10 max-w-2xl font-serif text-5xl tracking-tight">
          Lo que suelen preguntar
          <span className="italic text-ivory-soft"> antes de venir.</span>
        </h2>
        <div className="mt-16">
          <Accordion />
        </div>
      </section>
    </>
  );
}
