import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${site.legalName}.`,
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Legal"
        title="Aviso legal."
        lead="Este sitio es una propuesta de diseño. Los precios, horarios y personas son de demostración."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-3xl space-y-10 text-[16px] leading-relaxed text-paper-dim">
          <p>
            {site.legalName}, RUT {site.rut}. Dirección: {site.address.line1},{" "}
            {site.address.commune}, {site.address.city}, Chile.
          </p>
          <div>
            <h2 className="font-display text-[1.7rem] font-semibold text-paper">
              Contenido
            </h2>
            <p className="mt-3">
              Los exámenes y valores publicados son referenciales. Un informe
              de laboratorio no reemplaza una consulta médica. Los rangos se
              interpretan con tu médico tratante.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-semibold text-paper">
              Propiedad
            </h2>
            <p className="mt-3">
              Marca, textos y diseño de esta propuesta pertenecen a Órbita y a
              NOCTUA en el marco de la presentación. No copies el sitio como
              si fuera un laboratorio real en operación.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
