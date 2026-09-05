import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: `Política de privacidad de ${site.legalName}.`,
};

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        kicker="Privacidad"
        title="Qué hacemos con tus datos."
        lead="Ley 19.628 sobre protección de la vida privada. Recogemos lo mínimo para responder una lectura. No vendemos bases."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            El responsable es {site.legalName}, RUT {site.rut}, {site.address.line},{" "}
            {site.address.city}. Correo: {site.email}.
          </p>
          <p>
            Recogemos nombre, correo, celular, empresa y el mensaje que nos
            escribes. Se usan para responder la lectura y, si hay encargo, para
            la cuenta. No hacemos profiling. No cedemos datos a pauta de
            terceros sin un contrato de encargado.
          </p>
          <p>
            Conservamos el formulario 24 meses. Puedes pedir acceso, rectificación
            o cancelación escribiendo a {site.email}. Respondemos en diez días
            hábiles.
          </p>
          <p>
            El sitio usa cookies técnicas. No hay píxeles de remarketing en las
            páginas públicas, salvo que un encargo lo pida por escrito en un
            dominio del cliente.
          </p>
        </div>
      </section>
    </>
  );
}
