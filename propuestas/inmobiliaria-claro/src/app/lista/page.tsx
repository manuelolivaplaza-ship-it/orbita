import type { Metadata } from "next";
import { CatalogFilters } from "@/components/catalog-filters";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Lista",
  description:
    "Departamentos y casas en lista. Providencia, Ñuñoa y Las Condes. Orientación norte comprobada. Valores en UF.",
};

export default function ListaPage() {
  return (
    <>
      <PageIntro
        kicker="En mesa"
        title="Ocho plantas. El resto no pasó el norte."
        lead="Cada ficha tiene orientación medida, horas de sol de invierno y una hora de visita. Si no hay sol a esa hora, no hay visita."
      />
      <section className="pb-24">
        <div className="shell">
          <CatalogFilters />
        </div>
      </section>
    </>
  );
}
