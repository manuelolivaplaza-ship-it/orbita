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
        mark="Aviso legal"
        title="Este sitio informa. No promete un ROAS."
        lead="Los textos, honorarios de referencia y cuentas publicadas son informativos. Cada cuenta depende de su margen, de su oferta y de lo que se pueda medir."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-2xl space-y-6 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName}, RUT {site.rut}. {site.address.line},{" "}
            {site.address.city}, Chile. Correo {site.email}. Teléfono{" "}
            {site.phone}.
          </p>
          <p>
            Los casos publicados son reales en su lógica y cifras de trabajo;
            los nombres comerciales de clientes son demostrativos de esta
            propuesta. Un resultado no se promete. Se trabaja.
          </p>
          <p>
            Los honorarios se pactan por escrito, en UF, más IVA, antes de
            firmar. Las cifras de esta web son desde, no un arancel cerrado. El
            presupuesto de pauta lo paga el cliente, directo a la plataforma.
          </p>
          <p>
            La tabla de mareas es un instrumento editorial de MAREA, no una
            cotización de CPC en vivo ni un consejo de inversión.
          </p>
        </div>
      </section>
    </>
  );
}
