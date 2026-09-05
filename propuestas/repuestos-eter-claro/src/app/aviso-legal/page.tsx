import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Legal"
        title="Aviso legal."
        lead="Textos de operación de una sala de piezas. Precios referenciales. El contrato es la ficha cruzada."
      />
      <section className="py-16">
        <div className="shell max-w-2xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line},{" "}
            {site.address.city}. Giro: venta de repuestos automotrices.
          </p>
          <p>
            Los precios publicados son referenciales, IVA incluido, y se
            confirman al cruzar marca, modelo, año y motor. Una pieza «parecida»
            no es la pieza.
          </p>
          <p>
            El stock indicado como «en mostrador» puede moverse durante el día.
            Una cotización no reserva la pieza hasta que se confirma por
            WhatsApp o correo.
          </p>
          <p>
            Este sitio es una propuesta comercial. No sustituye el diagnóstico
            de un taller. Si el auto no anda, el orden es: ficha, pieza,
            instalación.
          </p>
        </div>
      </section>
    </>
  );
}
