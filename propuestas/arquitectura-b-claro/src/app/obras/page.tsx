import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectFilter } from "@/components/project-filter";

export const metadata: Metadata = {
  title: "Obras",
  description:
    "Índice de obras de COTA: casas en talud, bodegas, pabellones y una escuela en la precordillera.",
};

export default function ObrasPage() {
  return (
    <>
      <PageIntro
        cota="+6.00"
        kicker="Láminas"
        title="Obras que se sientan en el talud."
        lead="Cada lámina empieza por una cota. Casas, una bodega, un pabellón, una escuela. El corte es el índice."
      />
      <section className="pb-24 md:pb-32">
        <div className="shell">
          <ProjectFilter />
        </div>
      </section>
    </>
  );
}
