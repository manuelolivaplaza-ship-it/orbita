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
    "Cómo es la primera hora en Cian: conversación, escáner 3D, diagnóstico compartido y presupuesto en pesos. $49.000, descontable.",
};

export default function PrimeraVisitaPage() {
  return (
    <>
      <PageHero
        eyebrow="Primera visita"
        title="Llegas. Te mostramos. Decides."
        lead="Sesenta a setenta y cinco minutos. Sin silicona. Con un plan escrito. $49.000, que se descuenta si sigues en los 90 días."
      />
      <Container className="pb-24">
        <div className="relative mb-16 aspect-[16/8] overflow-hidden rounded-[1.6rem]">
          <Image
            src="/images/lounge.jpg"
            alt="Sala de espera de Cian"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <ol className="grid gap-8 lg:grid-cols-5">
          {visitSteps.map((step) => (
            <li key={step.n}>
              <p className="font-display text-cian">{step.n}</p>
              <div className="waterline my-4 max-w-[4rem]" />
              <h2 className="font-display text-xl tracking-tight">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid gap-10 rounded-[1.4rem] border border-border bg-card p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="font-display text-3xl tracking-tight">
              Qué traer.
            </h2>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li>Cédula o pasaporte.</li>
              <li>Exámenes o radiografías previas, si las tienes.</li>
              <li>El nombre de tu isapre y plan, si quieres reembolso.</li>
              <li>
                Una lista corta de lo que te molesta —dolor, estética, años
                sin ir—.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-tight">
              Cómo llegar.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {site.fullAddress}. Estacionamiento en el edificio. Si vienes en
              auto en hora punta, mejor 8:30 o después de las 18:00. Uber y
              Cabify dejan en la entrada.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-xl px-6">
                <Link href="/hora">Agendar ahora</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-xl px-6">
                <a href={site.maps}>Abrir en Maps</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
