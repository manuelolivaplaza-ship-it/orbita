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
        title="Quién habla en este sitio."
        lead={`${site.legalName}, RUT ${site.rut}, con domicilio en ${site.address.line}, ${site.address.city}.`}
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-2xl space-y-5 text-[16px] leading-[1.8] text-muted">
          <p>
            Este sitio informa sobre los oficios del estudio. No constituye
            asesoría tributaria, laboral ni contable hasta que exista un
            encargo por escrito. Las cifras de casos son ilustrativas y no
            prometen un resultado para un tercero.
          </p>
          <p>
            Los honorarios publicados están expresados en UF, más IVA, y se
            confirman en una propuesta. La primera hora se cobra y se
            descuenta si el estudio toma la cartera.
          </p>
          <p>
            El calendario tributario es referencial. Prima siempre el
            calendario oficial del Servicio de Impuestos Internos y la cartola
            del contribuyente.
          </p>
          <p>
            Correo: {site.email}. Teléfono: {site.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
