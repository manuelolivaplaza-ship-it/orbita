import type { Metadata } from "next";
import { ExamCatalog } from "@/components/exam-catalog";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Exámenes",
  description:
    "Catálogo de exámenes de laboratorio ETER: hematología, bioquímica, hormonas, vitaminas, orina e infecciosos. Precios particular en Santiago.",
};

export default function ExamenesPage() {
  return (
    <>
      <PageHero
        kicker="Catálogo"
        title="Cada examen, con su tiempo."
        lead="Precios particular. Si tu isapre tiene convenio, lo aplicamos en sucursal. El plazo es el de un día hábil de laboratorio, no de un call center."
      />
      <ExamCatalog />
      <p className="wrap py-16 text-sm text-mute">
        Los plazos se cuentan en horas hábiles desde la toma. Un resultado
        “alterado” nunca llega solo: incluye un comentario y, si hace falta, una
        llamada.
      </p>
    </>
  );
}
