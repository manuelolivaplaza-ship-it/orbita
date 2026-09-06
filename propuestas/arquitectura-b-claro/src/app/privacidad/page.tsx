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
        cota="P"
        kicker="Papel"
        title="Privacidad."
        lead="Tratamos sus datos para responder un encargo. No los vendemos. No armamos una base para el estudio de al lado."
      />
      <section className="pb-24">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line}
            , {site.address.city}, es responsable del tratamiento de los datos
            que usted entrega en el formulario de encargo, por correo o por
            WhatsApp, conforme a la Ley N° 19.628 sobre protección de la vida
            privada.
          </p>
          <p>
            Recogemos nombre, correo, teléfono, RUT si lo indica, comuna del
            predio, superficie aproximada y el contenido del mensaje. Sirven
            para calificar el encargo, coordinar una visita al predio y, si hay
            contrato, cumplir el encargo de arquitectura.
          </p>
          <p>
            Conservamos el encargo mientras esté activo y hasta tres años
            después de cerrada la obra, por las obligaciones tributarias y
            profesionales que nos caben. Puede pedir acceso, rectificación o
            supresión escribiendo a {site.email}.
          </p>
          <p>
            No usamos cookies de publicidad. El sitio puede guardar una sesión
            técnica mínima para el funcionamiento de formularios.
          </p>
        </div>
      </section>
    </>
  );
}
