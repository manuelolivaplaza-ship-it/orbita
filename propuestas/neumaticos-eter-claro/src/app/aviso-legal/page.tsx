import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Legal"
        title="Aviso legal"
        lead="Información de la sociedad que opera esta casa en La Reina."
      />
      <article className="mx-auto max-w-[720px] px-6 pb-28 text-base leading-relaxed text-ink-soft md:px-10">
        <p>
          {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line1},{" "}
          {site.address.commune}, {site.address.city}, Chile. Correo{" "}
          {site.email}. Teléfono {site.phone}.
        </p>
        <p className="mt-6">
          Los precios publicados son referenciales, incluyen IVA, montaje y
          balanceo salvo que se indique lo contrario, y se confirman según stock
          del día. Esta web es una propuesta comercial de demostración.
        </p>
        <p className="mt-6">
          El uso de marcas de fabricantes de neumáticos es identificatorio del
          producto ofrecido. ETER no es importador oficial de todas las líneas
          mostradas.
        </p>
      </article>
    </>
  );
}
