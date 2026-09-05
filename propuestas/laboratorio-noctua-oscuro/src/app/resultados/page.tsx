import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ResultsPortal } from "@/components/results-portal";

export const metadata: Metadata = {
  title: "Informe",
  description:
    "Portal de informes NOCTUA. En la demo, el informe de ejemplo se abre con un RUT de prueba.",
};

export default function ResultadosPage() {
  return (
    <>
      <PageIntro
        kicker="Informe"
        title="Lo que se leyó de noche."
        lead="El acceso llega por correo, con un código de un solo uso. Aquí, en la propuesta, puedes abrir un informe de ejemplo."
      />
      <section className="shell pb-28 md:pb-36">
        <ResultsPortal />
      </section>
    </>
  );
}
