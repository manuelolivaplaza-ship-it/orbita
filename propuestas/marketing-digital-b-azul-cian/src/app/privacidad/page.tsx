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
        mark="Privacidad"
        title="Qué hacemos con lo que nos cuenta."
        lead="Los datos de la lectura se usan para responderle. No se venden. No se publican. La minuta, cuando hay una, se guarda como se guarda una minuta."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-2xl space-y-6 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line},{" "}
            {site.address.city}, es responsable del tratamiento de los datos
            personales que nos envía por el formulario, correo o WhatsApp.
          </p>
          <p>
            Recogemos nombre, correo, celular, RUT (si lo indica), empresa y el
            relato de la cuenta, con el único fin de evaluar si hay trabajo y de
            contactarlo. La base es su consentimiento y, si hay retainer, la
            ejecución del encargo.
          </p>
          <p>
            No usamos sus datos para publicidad de terceros. No los cedemos,
            salvo obligación legal. Puede pedir acceso, rectificación o
            supresión escribiendo a {site.email}.
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
