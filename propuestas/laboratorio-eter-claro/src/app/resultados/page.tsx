import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ResultsPortal } from "@/components/results-portal";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Consulta tu informe de laboratorio ETER. Acceso privado con RUT y código de un solo uso.",
};

export default function ResultadosPage() {
  return (
    <>
      <PageHero
        kicker="Resultados"
        title="Tu informe, sin laberinto."
        lead="Cuando la muestra está lista, te llega un correo. Aquí puedes abrir el documento con tu RUT. Nada se publica, nada se reenvía sin ti."
        compact
      />
      <div className="wrap-wide pb-12">
        <div className="img-frame aspect-[16/6]">
          <Image
            src="/images/particles.jpg"
            alt="Partículas luminosas en un fluido opalescente."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="pb-24">
        <ResultsPortal />
      </div>
    </>
  );
}
