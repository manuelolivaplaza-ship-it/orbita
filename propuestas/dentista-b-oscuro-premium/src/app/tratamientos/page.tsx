import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { treatments } from "@/lib/site";

export const metadata: Metadata = {
  title: "Arancel y tratamientos",
  description:
    "Carta de prestaciones de Obsidiana: evaluación, higiene, endodoncia, implantes, alineadores y estética adhesiva. Valores desde, en pesos chilenos.",
};

export default function TratamientosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Carta de prestaciones"
        title="El valor vive en la fila. El plan, por escrito."
        lead="Referenciales. El valor final se confirma tras diagnóstico. Si el plan cambia, te avisamos antes de partir."
      />
      <Container className="py-16 sm:py-24">
        <div className="border-t border-line">
          {treatments.map((t) => (
            <Link
              key={t.slug}
              href={`/tratamientos/${t.slug}`}
              className="group grid gap-2 border-b border-line py-7 transition-colors duration-160 hover:bg-foreground/[0.03] sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
            >
              <div>
                <h2 className="font-display text-2xl tracking-tight sm:text-[1.7rem]">
                  {t.name}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {t.short}
                </p>
                <p className="mt-2 text-[0.78rem] text-muted-foreground">
                  {t.duration} · {t.includes}
                </p>
              </div>
              <p className="font-display text-xl text-champagne tabular">
                {t.priceValue}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Valores referenciales; el valor final se confirma tras diagnóstico.
          Sin sorpresas. Evaluación $32.900, descontable si partes el
          tratamiento.
        </p>
      </Container>
    </>
  );
}
