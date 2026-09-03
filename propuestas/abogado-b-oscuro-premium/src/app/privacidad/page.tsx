import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <div className="shell pb-24">
      <PageIntro kicker="Legal" title="Privacidad" />
      <div className="mt-10 max-w-[62ch] space-y-5 text-paper-dim">
        <p>
          Tratamos los datos que usted nos entrega —nombre, teléfono, correo y
          el relato del asunto— para responder su consulta y, si hay encargo,
          para prestar el servicio. Base legal: Ley 19.628 sobre protección de
          la vida privada.
        </p>
        <p>
          No vendemos bases. No compartimos sus datos con terceros ajenos al
          encargo, salvo obligación legal o requerimiento de tribunal. El
          expediente se guarda con el cuidado que exige el secreto profesional.
        </p>
        <p>
          Puede pedir acceso, corrección o supresión escribiendo a {site.email}.
          El formulario de primera hora implica aceptación de contacto por
          teléfono o WhatsApp.
        </p>
      </div>
    </div>
  );
}
