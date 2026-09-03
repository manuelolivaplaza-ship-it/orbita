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
          Tratamos los datos que usted nos entrega —nombre, teléfono, correo,
          empresa y el relato del caso— para responder su diagnóstico y, si hay
          encargo, para prestar el servicio. Base legal: Ley 19.628 sobre
          protección de la vida privada y Ley 21.719 cuando corresponda.
        </p>
        <p>
          No vendemos bases. No compartimos sus datos con terceros ajenos al
          encargo, salvo obligación legal. Las plataformas de pauta (Meta,
          Google) reciben lo que usted autorice en su propia cuenta: el gasto
          y los píxeles son suyos.
        </p>
        <p>
          Puede pedir acceso, corrección o supresión escribiendo a {site.email}.
          El formulario de diagnóstico implica aceptación de contacto por
          teléfono o WhatsApp.
        </p>
      </div>
    </div>
  );
}
