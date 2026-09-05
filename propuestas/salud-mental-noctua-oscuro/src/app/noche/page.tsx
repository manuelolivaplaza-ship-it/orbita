import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HourRail } from "@/components/hour-rail";
import { Lamp } from "@/components/lamp";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Rumination } from "@/components/rumination";
import { ThreeAm } from "@/components/three-am";
import { nightProtocol } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "La noche",
  description:
    "Protocolo NOCTUA para las tres de la mañana: qué hacer si hay riesgo, qué hacer si no lo hay, y cómo pedir un cupo después de las 16:00.",
};

export default function NochePage() {
  return (
    <>
      <PageIntro
        kicker="La noche"
        title="Si son las tres, lee esto primero."
        lead="Esta casa no es urgencia. Si hay riesgo, hay números. Si no hay riesgo, hay un criterio: la rumiación no se discute a las tres. Se nombra de día — o a las 16:00, cuando abrimos."
      />

      <section className="pb-16">
        <div className="shell">
          <ThreeAm />
        </div>
      </section>

      <section className="border-y border-line py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Protocolo</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Cuatro lecturas. Según lo que pesa.
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {nightProtocol.map((step, index) => (
              <Reveal
                key={step.n}
                delay={index * 80}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-12"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber md:col-span-2">
                  {step.n}
                </p>
                <h3 className="font-display text-3xl font-semibold tracking-tight md:col-span-4">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-paper-dim md:col-span-6">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Rumiación</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              El pensamiento que no apaga.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-paper-dim">
              No se trata de ‘dejar la mente en blanco’. Se trata de que el
              presente deje de ser una lista. Ignacio y Tomás trabajan el
              insomnio y la alarma. Si el fármaco cabe, Catalina entra al plan.
            </p>
            <Link href="/areas/sueno" className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]">
              Sueño y rumiación
              <Arrow />
            </Link>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
            <Rumination />
            <p className="mt-6 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted">
              Una línea que se agita. Después, se calma.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[380px] md:col-span-7 md:min-h-[640px]">
            <Image
              src="/images/lamp.jpg"
              alt="Lámpara ámbar encendida sobre mesa de roble en una sala oscura"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
            <Reveal>
              <p className="kicker">Horario</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight">
                Abrimos cuando Santiago baja la voz.
              </h2>
              <div className="mt-10">
                <HourRail />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink">
        <div className="shell grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Si quieres, quédate</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Un minuto. Después, el formulario.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-paper-dim">
              {site.crisis.label}.{" "}
              <a href={site.crisis.phoneHref} className="link-line">
                Salud Responde {site.crisis.phone}
              </a>
              . {site.crisis.alt}.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lamp />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl font-display text-3xl font-semibold">
            Si no hay riesgo y esto pesa, pedimos la primera hora.
          </p>
          <Link href="/primera" className="btn btn-amber">
            Pedir primera hora
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
