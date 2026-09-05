import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ServiceIndex } from "@/components/service-index";

export const metadata: Metadata = {
  title: "Especialidades",
  description:
    "Ocho especialidades en NOCTUA Vitacura: medicina interna, sueño, cardiología, neurología, salud mental, ginecología, imagen y laboratorio.",
};

export default function EspecialidadesPage() {
  return (
    <>
      <PageIntro
        kicker="Especialidades"
        title="Ocho salas. Una ficha."
        lead="Interna, sueño, cardio, neuro, salud mental, gine, imagen y laboratorio. El mismo médico de principio a fin. El informe no viaja a otro edificio."
      />
      <section className="pb-28">
        <div className="shell">
          <ServiceIndex />
        </div>
      </section>
    </>
  );
}
