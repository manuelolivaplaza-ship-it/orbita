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
        title="Qué hacemos con lo que nos cuenta."
        lead="Los datos del sondaje se usan para responderle. No se venden. No se publican. El expediente, cuando hay uno, se guarda como se guarda un expediente."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-2xl space-y-6 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line},{" "}
            {site.address.city}, es responsable del tratamiento de los datos
            personales que nos envía por el formulario, correo o WhatsApp.
          </p>
          <p>
            Recogemos nombre, correo, celular, RUT (si lo indica) y el relato
            del asunto, con el único fin de evaluar si hay cauce y de
            contactarlo. La base es su consentimiento y, si hay mandato, la
            ejecución del encargo profesional.
          </p>
          <p>
            No usamos sus datos para publicidad de terceros. No los cedemos,
            salvo obligación legal o requerimiento de un tribunal. Puede pedir
            acceso, rectificación o supresión escribiendo a {site.email}.
          </p>
          <p>
            El sitio no instala cookies de seguimiento. Si en el futuro se
            usaran, se lo diríamos aquí, con nombre y apellido.
          </p>
        </div>
      </section>
    </>
  );
}
