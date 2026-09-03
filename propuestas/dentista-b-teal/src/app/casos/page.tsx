import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfter } from "@/components/ui/before-after";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { cases } from "@/lib/site";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Antes y después reales. Carillas, alineadores y diseño de sonrisa en Bruma, Vitacura.",
};

export default function CasosPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos"
        title="Resultados que no se anuncian."
        lead="Arrastra el control. No son filtros. Son bocas de pacientes que aceptaron mostrarse, con su nombre de pila."
      />
      <Container className="pb-24">
        <div className="grid gap-20">
          {cases.map((c, i) => (
            <Reveal key={c.id}>
              <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <BeforeAfter
                  before={c.before}
                  after={c.after}
                  beforeAlt={`${c.name}, antes`}
                  afterAlt={`${c.name}, después`}
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                />
                <div>
                  <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
                    {c.treatment}
                  </p>
                  <h2 className="mt-3 font-display text-4xl tracking-tight">
                    {c.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{c.age}</p>
                  <blockquote className="mt-6 font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                    “{c.quote}”
                  </blockquote>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-16 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Cada caso es único. Lo que ves aquí no es una promesa de catálogo:
          es el resultado de un plan escrito, con plazos y cifra, para esa
          persona. El tuyo se diseña aparte.
        </p>
        <Button asChild className="mt-8 h-12 rounded-full px-6">
          <Link href="/primera-hora">Quiero ver el mío</Link>
        </Button>
      </Container>
    </>
  );
}
