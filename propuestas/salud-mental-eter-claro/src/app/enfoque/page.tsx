import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { method } from "@/data/content";

export const metadata: Metadata = {
  title: "Enfoque",
  description:
    "Cómo se trabaja en ETER: emparejamiento, cincuenta minutos, la misma persona, secreto profesional.",
};

const principles = [
  {
    title: "El hueco no manda",
    text: "Leemos lo que escribes y te proponemos una persona. Si no calza, se cambia. El calendario se acomoda al caso, no al revés.",
  },
  {
    title: "Cincuenta minutos reales",
    text: "Ni 45 recortados ni una hora que se come el pasillo. La sala es tuya. El reloj está a la vista.",
  },
  {
    title: "La misma persona",
    text: "Sin rotación. Sin ‘hoy te ve otro’. Si tu terapeuta se va de vacaciones, te avisamos con tiempo y te ofrecemos un puente — no un reemplazo improvisado.",
  },
  {
    title: "Psiquiatría en la casa",
    text: "Cuando el fármaco cabe, no te mandamos a otra comuna. Isidora Valdés coordina con quien te ve en palabra. Una ficha. Una versión.",
  },
  {
    title: "Decir que no",
    text: "Si el caso necesita hospital, comunidad terapéutica u otro oficio, lo decimos en la primera hora. No te retenemos para completar un pack.",
  },
  {
    title: "Secreto profesional",
    text: "La ficha no viaja. Ni al empleador, ni a la pareja, ni al colegio, salvo las excepciones de ley. Te lo explicamos por escrito.",
  },
];

export default function EnfoquePage() {
  return (
    <>
      <PageIntro
        kicker="Enfoque"
        title="No hay frases de Instagram. Hay una persona que se queda."
        lead="ETER no es una app, ni un call center de horas, ni un pack de veinte sesiones. Es una casa en Providencia y un criterio clínico."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-8 lg:grid-cols-12">
          <div className="frame relative aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[520px]">
            <Image
              src="/images/dialogo.jpg"
              alt="Dos sillones de lino frente a frente, mesa de roble y eucalipto"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="frame relative aspect-[4/5] lg:col-span-5">
            <Image
              src="/images/still.jpg"
              alt="Cuaderno abierto, lápiz y taza de té sobre mesa de roble"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-linea py-24 lg:py-32">
        <div className="shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 60} className="border-t border-linea pt-8">
              <h2 className="font-display text-3xl font-light tracking-tight">
                {item.title}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-tinta-suave">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-linea py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Cómo se entra</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              Cuatro pasos. Ninguno es un pack.
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {method.map((step, index) => (
              <Reveal
                key={step.n}
                delay={index * 80}
                className="grid gap-4 border-t border-linea py-8 md:grid-cols-12"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sage-deep md:col-span-2">
                  {step.n}
                </p>
                <h3 className="font-display text-3xl font-light tracking-tight md:col-span-4">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-tinta-suave md:col-span-6">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-linea py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl font-display text-3xl font-light">
            Si esto calza, pedimos la primera hora.
          </p>
          <Link href="/primera" className="btn btn-ink">
            Pedir primera hora
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
