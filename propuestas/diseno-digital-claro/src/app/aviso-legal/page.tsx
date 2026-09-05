import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${site.legal}.`,
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Aviso legal"
        title="Quiénes somos, por escrito."
        lead="Este sitio es de Nítida Estudio SpA. El contenido se ofrece para informar; un encargo se formaliza por contrato."
      />
      <section className="pb-24 md:pb-32">
        <div className="wrap max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legal}, RUT {site.rut}. {site.address.street},{" "}
            {site.address.commune}, {site.address.city}, Chile. Correo:{" "}
            {site.email}. Teléfono: {site.phone}.
          </p>
          <p>
            Los textos, fotografías y sistemas visuales de este sitio son de
            Nítida o se usan con autorización de quien los encargó. No se
            copian, no se reutilizan, no se presentan como propios.
          </p>
          <p>
            Los honorarios publicados están en UF, más IVA, y son referenciales.
            El alcance de cada encargo se cierra por escrito. Si hay
            diferencia entre esta página y el contrato, manda el contrato.
          </p>
          <p>
            Ley aplicable: Chile. Cualquier reclamo se discute en Santiago.
          </p>
        </div>
      </section>
    </>
  );
}
