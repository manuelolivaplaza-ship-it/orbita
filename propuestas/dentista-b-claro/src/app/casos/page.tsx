import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/ui/before-after";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { cases } from "@/lib/site";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Resultados reales de diseño de sonrisa, carillas y ortodoncia. Mejoras que se reconocen, no que se exhiben.",
};

export default function CasosPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos"
        title="El después tiene que seguir pareciendo tu cara."
        lead="Publicamos con consentimiento. No retocamos el color en Photoshop. Arrastra para comparar."
      />
      <Container className="pb-24">
        <div className="space-y-24">
          {cases.map((c, i) => (
            <article
              key={c.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <BeforeAfter
                  before={c.before}
                  after={c.after}
                  beforeAlt={`Antes, ${c.name}`}
                  afterAlt={`Después, ${c.name}`}
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-[0.72rem] tracking-[0.18em] uppercase text-sage">
                  {c.treatment}
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                  {c.name}
                  <span className="text-muted-foreground"> · {c.age}</span>
                </h2>
                <p className="mt-6 font-display text-2xl italic leading-snug">
                  “{c.quote}”
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-24 grid gap-6 sm:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-[1.6rem]">
            <Image
              src="/images/smile.jpg"
              alt="Detalle de sonrisa natural tras carillas"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center rounded-[1.6rem] bg-secondary p-8 sm:p-12">
            <h2 className="font-display text-3xl tracking-tight">
              Tu caso no está en esta página. Aún.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              La consulta de diseño dura una hora. Sales con una propuesta
              visual y una cifra. Sin compromiso de tratamiento.
            </p>
            <Button asChild className="mt-8 h-12 w-fit rounded-full px-6">
              <Link href="/cita">Pedir consulta de diseño</Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
