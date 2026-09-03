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
        title="Este sitio informa. No es un consejo."
        lead="Nada de lo publicado aquí constituye asesoría jurídica ni una promesa de resultado. El sondaje, sí."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-2xl space-y-6 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName}, RUT {site.rut}. {site.address.line},{" "}
            {site.address.city}, Chile. Correo {site.email}. Teléfono{" "}
            {site.phone}.
          </p>
          <p>
            Los textos, honorarios de referencia y asuntos publicados son
            informativos. Cada caso depende de sus hechos, de la ley vigente y
            de lo que resuelva el tribunal. Un resultado no se promete.
          </p>
          <p>
            Los honorarios se pactan por escrito, en UF, más IVA, antes de
            firmar. Las cifras de esta web son desde, no un arancel cerrado.
          </p>
          <p>
            Los abogados de CAUCE están habilitados para ejercer ante los
            tribunales de Chile. La colegiatura en el Colegio de Abogados de
            Chile, cuando se indica, es voluntaria.
          </p>
        </div>
      </section>
    </>
  );
}
