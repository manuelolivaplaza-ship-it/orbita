import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { NightCycle } from "@/components/night-cycle";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SampleJourney } from "@/components/sample-journey";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "El turno",
  description:
    "Cómo corre la noche en NOCTUA: toma al amanecer y al ocaso, procesamiento hasta las 07:00, informe a las 06:12.",
};

export default function TurnoPage() {
  return (
    <>
      <PageIntro
        kicker="El oficio"
        title="La noche es el método."
        lead="No es una metáfora. Un laboratorio preciso necesita silencio, calibración y tiempo. Santiago se lo da después de las 18:00."
      />

      <section className="shell pb-24">
        <NightCycle />
      </section>

      <section className="relative min-h-[60svh] overflow-hidden">
        <Image
          src="/images/analyzers.jpg"
          alt="Analizadores clínicos de madrugada, luces de estado como un cielo de muestras"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="vignette" />
        <div className="relative flex min-h-[60svh] items-end">
          <div className="shell pb-16">
            <Reveal>
              <p className="kicker">02:08</p>
              <h2 className="mt-4 max-w-2xl font-display text-5xl font-semibold tracking-tight">
                Nadie duerme sobre un error.
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell py-28 md:py-36">
        <Reveal>
          <p className="kicker">Viaje</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.6rem)] font-semibold tracking-tight">
            De tu vena a las 06:12.
          </h2>
        </Reveal>
        <div className="mt-14">
          <SampleJourney />
        </div>
      </section>

      <section className="border-t border-line py-28">
        <div className="shell grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="font-display text-4xl font-semibold tracking-tight">
              Por qué de noche.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
            <p className="text-lg leading-relaxed text-paper-dim">
              De día, un laboratorio es una fábrica: cola, tubos, apuro. De
              noche, el mismo tubo tiene nombre. El analizador no comparte
              cola con mil rutinas de un hospital. Tomás calibra. Emilia
              valida. El informe no sale porque un software lo empujó: sale
              porque alguien lo leyó.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-paper-dim">
              Acreditación {site.accreditation}. El turno existe desde {site.founded}.
              La ventana de Vitacura se ve encendida desde Alonso de Córdova.
            </p>
            <Link href="/hora" className="btn btn-amber mt-10">
              Pedir hora
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
