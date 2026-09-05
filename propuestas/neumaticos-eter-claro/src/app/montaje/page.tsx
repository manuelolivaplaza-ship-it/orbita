import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { rites, servicios } from "@/data/content";

export const metadata: Metadata = {
  title: "Montaje",
  description:
    "Montaje, balanceo, alineación 3D y ponchadura en La Reina. Hora agendada, el mismo día.",
};

export default function MontajePage() {
  return (
    <>
      <PageIntro
        kicker="Oficio"
        title="Subir el auto. Bajar con la presión escrita."
        lead="No es un patio de espera. Es un taller con luz norte, una desmontadora y el tiempo justo: cuarenta y cinco a setenta minutos, con hora."
      />

      <section className="relative min-h-[48vh] md:min-h-[64vh]">
        <Image
          src="/images/taller.jpg"
          alt="Taller vacío de ETER, con desmontadora y filas de neumáticos"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-3 md:px-10 md:py-32 lg:px-16">
        {rites.map((rite, index) => (
          <Reveal key={rite.n} delay={index * 90}>
            <p className="font-mono text-[0.62rem] text-goma">{rite.n}</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              {rite.title}
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">{rite.text}</p>
          </Reveal>
        ))}
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <Reveal>
            <p className="kicker">Carta</p>
            <h2 className="mt-4 font-display text-5xl font-light tracking-tight">
              Lo que hacemos con las manos.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
            {servicios.map((item) => (
              <Reveal key={item.slug} className="bg-paper px-6 py-10 md:px-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl font-light">{item.title}</h3>
                  <p className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-goma">
                    {item.price}
                  </p>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
                <Link
                  href={`/cita?servicio=${item.slug}`}
                  className="link-line mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.24em]"
                >
                  Agendar
                  <Arrow />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 md:grid-cols-12 md:px-10 lg:px-16">
        <Reveal className="relative aspect-[3/4] md:col-span-5">
          <Image
            src="/images/manometro.jpg"
            alt="Manómetro analógico, tapas de válvula y tiza de talón sobre piedra clara"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
          <p className="kicker">Presión</p>
          <h2 className="mt-4 font-display text-5xl font-light tracking-tight">
            Un manómetro honesto vale más que una marca cara.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            Sales con la presión anotada — la de la placa, no la del inflador de
            bencinera. El TPMS se revisa. El torque, al valor del fabricante. El
            auto no se entrega «más o menos».
          </p>
          <Link href="/cita" className="btn btn-ink mt-10">
            Pedir hora
            <Arrow />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
