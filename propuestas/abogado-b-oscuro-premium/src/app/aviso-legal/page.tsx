import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <div className="shell pb-24">
      <PageIntro kicker="Legal" title="Aviso legal" />
      <div className="mt-10 max-w-[62ch] space-y-5 text-paper-dim">
        <p>
          {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line},{" "}
          {site.address.city}, Chile. Correo {site.email}. Teléfono {site.phone}.
        </p>
        <p>
          Los abogados de Vigilia se encuentran habilitados para el ejercicio
          ante la Corte Suprema de Chile. El contenido de este sitio es
          informativo y no constituye asesoría jurídica ni una oferta de
          servicios hasta que exista un encargo por escrito.
        </p>
        <p>
          No prometemos resultados de juicios ni de recursos. Los honorarios
          publicados son referenciales y se confirman en minuta, en UF, más IVA.
        </p>
        <p>
          Vigilia no toma defensa penal. Si el asunto es penal, se lo indicamos
          y derivamos.
        </p>
      </div>
    </div>
  );
}
