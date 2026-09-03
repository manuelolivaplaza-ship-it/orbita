import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { site, visitSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Primera visita",
  description:
    "Cómo es venir a Alba: recepción en calma, conversación, escáner 3D y un plan por escrito con cifras.",
};

export default function PrimeraVisitaPage() {
  return (
    <>
      <PageHero
        eyebrow="Primera visita"
        title="Ven. El resto lo ponemos nosotros."
        lead="Cincuenta a noventa minutos. No hay que estar maquillada. No hay que pedir perdón por el tiempo que tardaste."
      />
      <Container className="pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.6rem]">
            <Image
              src="/images/corridor.jpg"
              alt="Entrada luminosa de Alba"
              fill
              className="object-cover"
              sizes="45vw"
              priority
            />
          </div>
          <ol className="space-y-8">
            {visitSteps.map((s) => (
              <li key={s.n} className="grid grid-cols-[4rem_1fr] gap-4">
                <span className="font-display text-2xl text-clay">{s.n}</span>
                <span>
                  <h2 className="font-display text-2xl tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Revisión + higiene",
              p: "95 €",
              d: "Exploración, fotos, air-flow. La puerta de entrada habitual.",
            },
            {
              t: "Consulta de diseño",
              p: "150 €",
              d: "Escáner, estudio facial y mock-up. Se descuenta si sigues.",
            },
            {
              t: "Urgencia",
              p: "120 €",
              d: "Dolor, fractura, corona caída. Se descuenta si hay tratamiento.",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-[1.4rem] border border-border bg-card p-7"
            >
              <p className="text-sm text-muted-foreground">{x.t}</p>
              <p className="mt-2 font-display text-3xl">{x.p}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {x.d}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full px-6">
            <Link href="/cita">Reservar ahora</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <a href={site.whatsapp}>Escribir por WhatsApp</a>
          </Button>
        </div>
      </Container>
    </>
  );
}
