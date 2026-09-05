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
        title="Quiénes somos, en papel."
        lead={`${site.legalName}, RUT ${site.rut}. Estudio de marketing digital con domicilio en ${site.address.line}, ${site.address.city}.`}
      />
      <section className="pb-24">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            Los casos publicados son encargos reales de clientes que autorizaron
            su difusión, con cifras redondeadas. No constituyen promesa de
            resultado para otros negocios.
          </p>
          <p>
            Los honorarios se cotizan en UF más IVA. El diagnóstico de 12 UF se
            descuenta del primer mes si hay retainer. Nada se inicia sin
            propuesta por escrito.
          </p>
          <p>
            Contenidos, fotografías y marca FARO son de {site.legalName}, salvo
            las piezas de clientes, que siguen siendo de sus titulares.
          </p>
          <p>
            Contacto: {site.email} · {site.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
