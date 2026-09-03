import { Suspense } from "react";
import { CatalogFilters } from "@/components/catalog-filters";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La mesa",
  description:
    "Inventario privado de Meridiano: casas, departamentos y fundos en Santiago oriente, Zapallar, Puerto Varas y Colchagua. Valores en UF.",
};

export default function PropiedadesPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="01"
        kicker="Inventario"
        title="Lo que se puede visitar."
        lede="Ocho propiedades en mesa. Las que están por presentación no llevan calle hasta el brief. Valores en UF, útiles en metros, orientación norte cuando existe."
      />
      <p className="mt-6 font-mono text-[0.72rem] tracking-[0.12em] text-muted uppercase">
        {site.ufNota}
      </p>
      <Suspense
        fallback={
          <p className="py-16 text-paper-dim">Cargando la mesa…</p>
        }
      >
        <CatalogFilters />
      </Suspense>
    </div>
  );
}
