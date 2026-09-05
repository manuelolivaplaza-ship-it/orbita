import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { research } from "@/data/content";

export const metadata: Metadata = {
  title: "Investigación",
  description:
    "Observatorio del Cerro, Laboratorio de Sueño, Cátedra de Ciudad Nocturna y Archivo de la Noche Chilena.",
};

export default function InvestigacionPage() {
  return (
    <>
      <PageIntro
        kicker="Investigación"
        title="No publicamos lo que no medimos."
        lead="Cuatro laboratorios. El dato se toma en el predio, en el cerro o en Atacama. El producto es una serie, un protocolo o un informe que se puede leer en voz alta."
      />

      <section className="relative min-h-[52svh] overflow-hidden">
        <Image
          src="/images/archivo.jpg"
          alt="Archivo de la Noche: estantes, una lámpara ámbar y un folio abierto"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
      </section>

      <section className="border-y border-line py-24 lg:py-32">
        <div className="shell">
          {research.map((item, index) => (
            <Reveal
              key={item.n}
              delay={index * 60}
              className="grid gap-6 border-t border-line py-12 last:border-b lg:grid-cols-12"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber lg:col-span-2">
                {item.n}
              </p>
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                  {item.lead}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-paper-dim lg:col-span-5 lg:col-start-8">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="kicker">Siguiente</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Postular. El resto es una noche.
            </h2>
          </Reveal>
          <Link href="/admision" className="btn btn-amber">
            Admisión
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
