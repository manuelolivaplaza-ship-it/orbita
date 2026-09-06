import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${site.legalName}.`,
};

export default function AvisoLegalPage() {
  return (
    <div className="shell pb-24">
      <PageIntro kicker="Legal" title="Aviso legal" />
      <div className="font-serif mt-10 max-w-[62ch] space-y-5 text-paper-dim">
        <p>
          {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line},{" "}
          {site.address.city}, {site.address.region}, Chile.
        </p>
        <p>
          Este sitio informa sobre los oficios del estudio. Los valores
          publicados son referenciales y se confirman por escrito, en UF más
          IVA, después de una lectura. No constituyen oferta vinculante.
        </p>
        <p>
          Las transmisiones descritas son casos de trabajo del estudio. Las
          métricas corresponden a períodos cerrados y no predicen resultados
          futuros. El marketing digital depende de la cuenta, del mercado y de
          decisiones del cliente.
        </p>
        <p>
          Contacto: {site.email} · {site.phone}.
        </p>
      </div>
    </div>
  );
}
