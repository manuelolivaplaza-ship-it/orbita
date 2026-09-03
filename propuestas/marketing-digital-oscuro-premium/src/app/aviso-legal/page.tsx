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
          {site.address.city}, Chile. Correo: {site.email}. Teléfono: {site.phone}.
        </p>
        <p>
          Este sitio describe oficios, honorarios de referencia y trabajo
          realizado para cuentas con nombre ficticio o anonimizado con fines de
          presentación. Los resultados no son una promesa de ROAS, ranking ni
          venta. Cada caso se cotiza por escrito, en UF, más IVA.
        </p>
        <p>
          Los contenidos —textos, sistema visual, fotografías y código— son de{" "}
          {site.legalName}, salvo indicación. Queda prohibida su reproducción
          sin autorización.
        </p>
      </div>
    </div>
  );
}
