import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hypnogram } from "@/components/hypnogram";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Medicina del sueño",
  description:
    "Consulta de sueño y polisomnografía en NOCTUA Vitacura. Insomnio, apnea, el ronquido que nadie midió. Se duerme aquí.",
};

const beats = [
  {
    n: "01",
    title: "La pregunta",
    text: "Cincuenta minutos. Historia, escalas, lo que el día disfraza. Una hipótesis esa misma noche. No un aparato de entrada.",
  },
  {
    n: "02",
    title: "La noche",
    text: "Si hace falta medir, se duerme aquí. Habitación propia, lámpara baja, los Andes al otro lado. Ocho horas. Un técnico. Un informe.",
  },
  {
    n: "03",
    title: "El nombre",
    text: "Apnea, insomnio, movimiento, el reloj corrido. Vicente lee el hipnograma con usted. El plan entra a la ficha de esta casa.",
  },
];

export default function SuenoPage() {
  return (
    <>
      <PageIntro
        kicker="Oficio · 02"
        title="La noche no se consulta de día."
        lead="Insomnio, apnea, el ronquido que nadie midió. Primera hora de cincuenta minutos. Si hay que dormir, se duerme en esta casa — no en un sótano de otro recinto."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[280px]">
            <Image
              src="/images/sueno.jpg"
              alt="Habitación de estudio de sueño NOCTUA: cama de lino, lámpara baja y los Andes al fondo"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Sala de sueño · polisomnografía · una noche
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Vicente Araya lee lo que el cuerpo hace cuando nadie lo mira.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <p className="text-lg leading-relaxed text-paper-dim">
              De día el insomnio se llama estrés y el ronquido se llama broma.
              De noche, si alguien mide, se nombra. NOCTUA no vende un CPAP en
              la primera hora. Primero la conversación. Después, si cabe, la
              noche en esta casa.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-paper-dim">
              Consulta, {formatCLP(58_000)}. Polisomnografía, {formatCLP(320_000)}.
              El informe vuelve a interna y a cardio cuando el caso lo pide.
              La ficha es una.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/agenda?especialidad=medicina-del-sueno"
                className="btn btn-amber"
              >
                Pedir hora de sueño
                <Arrow />
              </Link>
              <Link href="/especialidades/medicina-del-sueno" className="btn btn-ghost">
                La sala
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Arquitectura</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold tracking-tight">
              Lo que se ve cuando se duerme aquí.
            </h2>
          </Reveal>
          <Reveal className="mt-14" delay={80}>
            <Hypnogram />
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-12 md:grid-cols-3">
          {beats.map((beat, index) => (
            <Reveal key={beat.n} delay={index * 90} className="border-t border-line pt-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                {beat.n}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold">{beat.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">{beat.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
