import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { masters, research } from "@/data/content";

export const metadata: Metadata = {
  title: "Investigación",
  description:
    "Laboratorio de Atmósfera Andina, Cátedra de Territorio, Taller de Edición y Observatorio de Ciudad. Tres magíster.",
};

export default function InvestigacionPage() {
  return (
    <>
      <PageIntro
        kicker="Investigación"
        title="No publicamos lo que no medimos."
        lead="Cuatro unidades. Series propias, predios nominados, libros impresos, informes que se pueden leer en un concejo. El laboratorio está a doscientos metros del claustro."
      />

      <section className="relative min-h-[50svh] overflow-hidden">
        <Image
          src="/images/laboratorio.jpg"
          alt="Laboratorio de atmósfera con instrumentos y ventana a los Andes"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="py-24 lg:py-36">
        <div className="shell">
          {research.map((item, index) => (
            <Reveal
              key={item.n}
              delay={index * 60}
              className="grid gap-6 border-t border-linea py-12 last:border-b lg:grid-cols-12"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-cielo lg:col-span-2">
                {item.n}
              </p>
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl font-light tracking-tight md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-tinta-suave">{item.lead}</p>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-tinta-suave lg:col-span-5 lg:col-start-8">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-linea py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Postgrado</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
              Tres magíster. Cupo chico.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {masters.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="border-t border-linea pt-8"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-cielo">
                  {item.years}
                </p>
                <h3 className="mt-4 font-display text-3xl font-light">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-tinta-suave">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <Link
              href="/contacto"
              className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
            >
              Escribir a postgrado
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
