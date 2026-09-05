import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BodyMap } from "@/components/body-map";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { method } from "@/data/content";

export const metadata: Metadata = {
  title: "Método",
  description:
    "El protocolo NOCTUA: silencio, ver, nombrar, devolver. Lectura de 75 minutos y plan por escrito. Vitacura.",
};

export default function MetodoPage() {
  return (
    <>
      <PageIntro
        kicker="Método"
        title="Cuatro vértebras."
        lead="No partimos con el electro. Partimos con la pregunta. El cuerpo, si se le da silencio, deja de representar y empieza a hablar."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[240px]">
            <Image
              src="/images/spine.jpg"
              alt="Columna anatómica bajo un foco ámbar, fotografiada como pieza de museo"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_20%]"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Protocolo · cuatro pasos · sin pack
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16">
          {method.map((step, index) => (
            <Reveal
              key={step.n}
              delay={index * 60}
              className="grid gap-8 border-t border-line pt-10 md:grid-cols-12"
            >
              <p className="font-display text-6xl font-semibold text-amber nums md:col-span-2">
                {step.n}
              </p>
              <div className="md:col-span-9">
                <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {step.title}
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper-dim">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Mapa</p>
            <h2 className="mt-5 font-display text-5xl font-semibold tracking-tight">
              Lo que se ve de noche no se discute.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
              La lectura dura 75 minutos. Historia, test, palpación, movimiento.
              Ese mismo día: hipótesis, frecuencia, alta estimada. Por escrito.
              El valor de lo que sigue se confirma ahí, no antes.
            </p>
            <Link href="/hora" className="btn btn-amber mt-10 w-fit">
              Pedir lectura
              <Arrow />
            </Link>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
            <BodyMap />
          </Reveal>
        </div>
      </section>
    </>
  );
}
