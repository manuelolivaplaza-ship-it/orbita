import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro kicker="Legal" title="Aviso legal" />
      <section className="shell max-w-3xl space-y-6 py-16 text-[15px] leading-8 text-paper-dim md:py-24">
        <p>
          {studio.legal}, RUT {studio.rut}, con domicilio en {studio.address},{" "}
          {studio.city}, Chile, es titular de este sitio.
        </p>
        <p>
          Los honorarios publicados son referenciales y se expresan en UF. El
          valor final de un encargo se confirma por escrito después de conocer
          el predio y el programa. Nada de lo publicado constituye una oferta
          vinculante.
        </p>
        <p>
          Las fotografías corresponden a obras del estudio o a material
          preparado para esta propuesta. Queda prohibida su reproducción sin
          autorización.
        </p>
        <p>
          Para ejercer derechos o hacer un reclamo: {studio.email} ·{" "}
          {studio.phone}.
        </p>
      </section>
    </>
  );
}
