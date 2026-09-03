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
      <PageIntro
        kicker="Aviso legal"
        title="Quiénes somos y qué no es esta web."
      />
      <div className="mt-12 max-w-[62ch] space-y-6 text-paper-dim">
        <p>
          {site.legalName}, RUT {site.rut}. Hospital veterinario en{" "}
          {site.address.line}, {site.address.city}, {site.address.region}, Chile.
          Médicos colegiados en el {site.colegio}.
        </p>
        <p>
          Los textos de esta web son informativos. No reemplazan una consulta
          ni un triaje telefónico. Una urgencia se resuelve llamando al{" "}
          {site.phone}, no leyendo un artículo.
        </p>
        <p>
          Los precios publicados son referenciales en pesos chilenos y pueden
          cambiar. Cualquier procedimiento se presupuesta por escrito antes de
          realizarse. Boleta siempre.
        </p>
        <p>
          La pizarra de internación que aparece en el sitio usa nombres
          cambiados. No publicamos fichas reales.
        </p>
        <p>
          {site.email} · {site.phone} · {site.url}
        </p>
      </div>
    </div>
  );
}
