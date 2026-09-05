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
        lead="El brief, el correo y el WhatsApp se usan para responderte. No se venden, no se ceden a pauta de terceros, no se meten en un CRM de moda."
      />
      <section className="pb-24">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            Responsable: {site.legalName}, RUT {site.rut}, {site.address.line},{" "}
            {site.address.city}. Correo: {site.email}.
          </p>
          <p>
            Recogemos nombre, correo, teléfono, empresa y el mensaje que nos
            escribes por el formulario, WhatsApp o correo. La base legal es tu
            solicitud de contacto y, si hay contrato, la ejecución de ese
            contrato.
          </p>
          <p>
            Conservamos el brief el tiempo del encargo y un año más, por si hay
            que retomar. Los datos de facturación se conservan según la ley
            tributaria chilena.
          </p>
          <p>
            No usamos cookies de publicidad. El sitio puede registrar visitas de
            forma agregada. Si quieres acceder, corregir o borrar tus datos,
            escribe a {site.email}.
          </p>
        </div>
      </section>
    </>
  );
}
