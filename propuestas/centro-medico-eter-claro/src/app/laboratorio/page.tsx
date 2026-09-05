import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { labTests } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Laboratorio",
  description:
    "Laboratorio propio en ETER Providencia. Toma de muestra en la casa, informe en el portal el mismo día.",
};

export default function LaboratorioPage() {
  return (
    <>
      <PageIntro
        kicker="Laboratorio"
        title="El examen no viaja una semana."
        lead="Toma de muestra en esta casa. Informe en el portal el mismo día. Lo lee el médico que lo pidió, con usted — no un adjunto suelto."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[260px]">
            <Image
              src="/images/lab.jpg"
              alt="Laboratorio ETER: mesa blanca, gradilla de vidrio y microscopio junto a la ventana"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
            Laboratorio · toma de muestra · portal el mismo día
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
              Ayuno, cuando corresponde. Sobre, nunca.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-tinta-suave">
              Si el examen pide ayuno, se lo decimos al agendar. La muestra se
              toma aquí. El informe entra al portal; le avisamos por correo o
              WhatsApp. No hay que volver presencial a retirar un sobre.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
              Lo que no hacemos en esta casa —cultivos especiales, estudios
              genéticos, imágenes de alta complejidad— se deriva con nombre y
              con indicación. El resultado vuelve a la sala que lo pidió.
            </p>
            <Link href="/agenda" className="btn btn-ink mt-10 w-fit">
              Pedir toma de muestra
              <Arrow />
            </Link>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
              Valores desde · particular
            </p>
            <div className="mt-6 border-t border-linea">
              {labTests.map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-12 items-baseline gap-3 border-b border-linea py-5"
                >
                  <p className="col-span-6 font-display text-xl font-light md:col-span-7 md:text-2xl">
                    {row.name}
                  </p>
                  <p className="col-span-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-gris">
                    {row.time}
                  </p>
                  <p className="col-span-3 text-right font-display text-xl font-light nums md:text-2xl">
                    {formatCLP(row.amount)}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-gris">
              Valores referenciales, particular. FONASA e ISAPRE se informan al
              agendar. El panel completo lo indica el médico, no un paquete de
              feria.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
