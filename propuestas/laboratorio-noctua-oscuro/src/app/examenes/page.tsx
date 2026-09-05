import type { Metadata } from "next";
import { Suspense } from "react";
import { Catalog } from "@/components/catalog";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Exámenes",
  description:
    "Catálogo de exámenes de NOCTUA: hematología, bioquímica, hormonas, vitaminas y preventivo. Informe al amanecer.",
};

export default function ExamenesPage() {
  return (
    <>
      <PageIntro
        kicker="Catálogo"
        title="Lo que se puede nombrar."
        lead="Un laboratorio no es un menú infinito. Es un catálogo preciso: lo que sabemos leer de noche, con método y con comentario cuando un número lo pide."
      />
      <section className="shell pb-28 md:pb-36">
        <Suspense
          fallback={
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
              Cargando catálogo…
            </p>
          }
        >
          <Catalog />
        </Suspense>
      </section>
    </>
  );
}
