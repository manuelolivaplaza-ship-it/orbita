import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { plans } from "@/lib/data";
import { clp, cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Membresías",
  description:
    "Pase del día, Alba, Alba Luz y Atelier. Sin matrícula. Precios en pesos chilenos, en Lo Barnechea.",
};

export default function MembresiasPage() {
  return (
    <>
      <PageHero
        kicker="Pertenecer"
        title="Planes claros. Sin letra chica de estadio."
        lead="Sin matrícula de incorporación. Mes a mes, o un 10% menos al pagar el trimestre. Precios en CLP, IVA incluido."
      />

      <Container className="grid gap-4 pb-8 lg:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.slug}
            className={cn(
              "flex flex-col p-8 sm:p-10",
              plan.highlight ? "bg-ink text-cream" : "border border-line bg-cream",
            )}
          >
            <p
              className={
                plan.highlight
                  ? "text-[0.68rem] font-medium uppercase tracking-[0.22em] text-copper-soft"
                  : "kicker"
              }
            >
              {plan.name}
            </p>
            <h2 className="mt-6 font-display text-5xl tracking-tight">
              {clp(plan.price)}
            </h2>
            <p
              className={
                plan.highlight
                  ? "mt-1 text-sm text-cream/60"
                  : "mt-1 text-sm text-ink-soft"
              }
            >
              {plan.period}
            </p>
            <p
              className={
                plan.highlight
                  ? "mt-6 text-[1.05rem] leading-relaxed text-cream/80"
                  : "mt-6 text-[1.05rem] leading-relaxed text-ink-soft"
              }
            >
              {plan.lead}
            </p>
            <ul
              className={
                plan.highlight
                  ? "mt-8 flex-1 space-y-3 text-sm text-cream/80"
                  : "mt-8 flex-1 space-y-3 text-sm text-ink-soft"
              }
            >
              {plan.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-copper">·</span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              className={
                plan.highlight
                  ? "mt-8 text-sm text-cream/55"
                  : "mt-8 text-sm text-ink-soft"
              }
            >
              {plan.note}
            </p>
            <div className="mt-8">
              <ButtonLink
                href="/visita"
                variant={plan.highlight ? "cream" : "solid"}
              >
                Empezar con una visita
              </ButtonLink>
            </div>
          </article>
        ))}
      </Container>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Photo
              src="/images/detalle-cobre.jpg"
              alt="Mancuernas de cobre, lino y una botella de agua con limón sobre roble"
              className="aspect-square max-w-md"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </Reveal>
          <Reveal delay={1}>
            <p className="kicker">Lo que siempre va incluido</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight">
              Toalla, ducha y un trato de casa.
            </h2>
            <ul className="mt-8 space-y-4 text-[1.02rem] leading-relaxed text-ink-soft">
              <li>Lockers de piedra y toalla de lino en cada visita.</li>
              <li>Evaluación inicial de 40 minutos con el equipo.</li>
              <li>Estacionamiento de visitas; Atelier tiene sitio reservado.</li>
              <li>Pausa de hasta 30 días al año, avisando con una semana.</li>
              <li>No hay cláusula de permanencia. Te quedas porque quieres.</li>
            </ul>
          </Reveal>
        </Container>
      </Section>

      <CtaBand title="Elige el plan después de visitar." />
    </>
  );
}
