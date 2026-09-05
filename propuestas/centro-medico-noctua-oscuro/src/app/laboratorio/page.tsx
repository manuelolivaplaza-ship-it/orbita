import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { labPrices } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Laboratorio",
  description:
    "Laboratorio clínico en NOCTUA Vitacura. Toma de muestra de lunes a viernes desde las 16:00 y sábado de ayuno 09:00 a 11:30. Resultado al portal.",
};

export default function LaboratorioPage() {
  return (
    <>
      <PageIntro
        kicker="Laboratorio · 08"
        title="La cifra vuelve a la ficha."
        lead="Toma de muestra de lunes a viernes desde las 16:00. Sábado de ayuno, 09:00 a 11:30. El número entra a la sala que lo pidió — no a un PDF suelto."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[280px]">
            <Image
              src="/images/lab.jpg"
              alt="Laboratorio NOCTUA: microscopio, gradilla de vidrio y lámpara ámbar"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Paula no te hace madrugar si el examen no lo pide.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <p className="text-lg leading-relaxed text-paper-dim">
              Hay perfiles que caben de noche, con ayuno vespertino. Hay otros
              que piden la ventana clásica de la mañana: esos son el sábado.
              Si el análisis no se procesa aquí, se dice al agendar. No te
              hacemos venir para un número que no sirve.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-paper-dim">
              El resultado entra al portal y a la ficha de Elisa, de Francisca
              o de quien lo pidió. La mayoría, el mismo día.
            </p>
            <Link
              href="/agenda?especialidad=laboratorio"
              className="btn btn-amber mt-10 w-fit"
            >
              Agendar toma
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Valores de referencia</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Lo que se pide más.
            </h2>
          </Reveal>
          <div className="mt-12 border-t border-line">
            {labPrices.map((item) => (
              <div
                key={item.name}
                className="grid gap-2 border-b border-line py-5 md:grid-cols-12 md:items-end"
              >
                <p className="font-display text-2xl font-semibold tracking-tight md:col-span-6">
                  {item.name}
                </p>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted md:col-span-3">
                  {item.time}
                </p>
                <p className="nums font-mono text-[0.72rem] tracking-[0.12em] text-paper-dim md:col-span-3 md:text-right">
                  {formatCLP(item.amount)}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">
            Valores referenciales. El arancel se confirma al agendar. Bono
            electrónico. Boleta reembolsable el mismo día.
          </p>
        </div>
      </section>
    </>
  );
}
