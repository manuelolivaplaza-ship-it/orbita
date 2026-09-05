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
        lead="Este sitio informa. No diagnostica. Si duele ahora de un modo que no espera, vaya a urgencia."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-3xl space-y-10 text-[16px] leading-relaxed text-paper-dim">
          <p>
            {site.legalName}, RUT {site.rut}. Prestador de kinesiología en{" "}
            {site.address.line1}, {site.address.commune}, Santiago, Chile.
          </p>
          <div>
            <h2 className="font-display text-[1.7rem] font-semibold text-paper">
              Contenido
            </h2>
            <p className="mt-3">
              Los textos describen el oficio del centro. No sustituyen una
              evaluación. Los valores publicados son referenciales «desde» y se
              confirman en la primera hora.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-semibold text-paper">
              Urgencia
            </h2>
            <p className="mt-3">
              No somos servicio de urgencia ni unidad de paciente crítico. Un
              accidente reciente, un pecho que aprieta o una pérdida brusca de
              fuerza se atienden en un servicio de urgencia.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-semibold text-paper">
              Propiedad
            </h2>
            <p className="mt-3">
              Marca, textos y fotografías de este sitio pertenecen a {site.legalName},
              salvo indicación. Correo: {site.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
