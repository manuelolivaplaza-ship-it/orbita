import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${site.legalName}.`,
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Aviso legal"
        title="Quién habla acá."
        lead={`${site.legalName}, RUT ${site.rut}. Honorarios en UF + IVA. Los resultados de un encargo no se prometen. Se trabajan.`}
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            Este sitio es de {site.legalName}, domicilio en {site.address.line},{" "}
            {site.address.city}, Chile. Teléfono {site.phone}. Correo {site.email}.
          </p>
          <p>
            Los textos, fotografías y marcas de NORTE son de la agencia. Los
            casos se publican con autorización de cada cliente. Las cifras son
            de esos encargos; no son una promesa de resultado para el tuyo.
          </p>
          <p>
            Los honorarios se cotizan en UF más IVA. El alcance se firma por
            escrito antes de producir. Si un canal no cabe en el margen, se
            corta. Eso también va por escrito.
          </p>
          <p>
            La legislación aplicable es la chilena. Cualquier disputa se
            somete a los tribunales de Santiago, salvo pacto distinto en el
            contrato de servicio.
          </p>
        </div>
      </section>
    </>
  );
}
