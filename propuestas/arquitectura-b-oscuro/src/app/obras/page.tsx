import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WorkIndex } from "@/components/work-index";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Obras",
  description:
    "Índice de obras de UMBRAL: casas, un taller y un pabellón entre Vitacura, la costa y el sur de Chile.",
};

export default function ObrasPage() {
  return (
    <>
      <PageIntro
        kicker="Catálogo"
        title="Obras"
        lead="Ocho encargos. Residencial, un taller en Recoleta, un pabellón de tierra. Cada ficha tiene metros, año, tipología y materia."
      />
      <section className="py-16 md:py-24">
        <div className="shell">
          <WorkIndex works={works} />
        </div>
      </section>
    </>
  );
}
