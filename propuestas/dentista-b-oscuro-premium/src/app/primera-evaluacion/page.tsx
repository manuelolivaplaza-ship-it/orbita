import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { evaluationSteps, honestLine } from "@/lib/site";

export const metadata: Metadata = {
  title: "Primera evaluación",
  description:
    "Evaluación de 45 minutos en Obsidiana Vitacura: scanner, radiografía, diagnóstico y presupuesto por escrito. $32.900, descontable.",
};

export default function PrimeraEvaluacionPage() {
  return (
    <>
      <PageIntro
        eyebrow="45 minutos · $32.900"
        title="El día 1 no se improvisa."
        lead="Scanner, radiografía, diagnóstico en palabras simples y un presupuesto por escrito. El mismo especialista que te va a tratar."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/scanner.jpg"
                alt="Scanner intraoral sobre bandeja de nogal, listo para la evaluación"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div>
              <p className="kicker">Qué te llevas</p>
              <ul className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted-foreground">
                <li>Scanner intraoral 3D — sin silicona.</li>
                <li>Radiografía digital, en tu ficha.</li>
                <li>Diagnóstico explicado, no recitado.</li>
                <li>Plan por etapas, con plazos y cifra.</li>
              </ul>
              <p className="mt-8 border-l-2 border-champagne pl-5 text-sm leading-relaxed text-muted-foreground">
                {honestLine}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="band-hueso py-20 sm:py-28">
        <Container>
          <p className="kicker">El protocolo</p>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
            Cuatro pasos. Ni uno de relleno.
          </h2>
          <ol className="mt-12 divide-y divide-carbon/12 border-y border-carbon/12">
            {evaluationSteps.map((s) => (
              <li
                key={s.n}
                className="grid gap-4 py-7 md:grid-cols-[5rem_1fr_1.2fr] md:items-baseline"
              >
                <span className="font-display text-2xl text-[#8a6e52] tabular">
                  {s.n}
                </span>
                <h3 className="font-display text-2xl tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-carbon/70">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-4xl tabular tracking-tight">
                $32.900
              </p>
              <p className="mt-1 text-sm text-carbon/60">
                Se descuenta si partes el tratamiento. El informe es tuyo igual.
              </p>
            </div>
            <Button
              asChild
              className="h-12 rounded-none bg-carbon px-6 text-[0.72rem] tracking-[0.16em] text-hueso uppercase hover:bg-carbon/90"
            >
              <Link href="/agenda">Agendar evaluación</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
