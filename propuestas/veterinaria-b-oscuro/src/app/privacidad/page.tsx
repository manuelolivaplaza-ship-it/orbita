import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: `Política de privacidad de ${site.legalName}.`,
};

export default function PrivacidadPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        kicker="Privacidad"
        title="Cómo tratamos tus datos y la ficha del animal."
        lede="Ley 19.628 sobre protección de la vida privada. Lo mínimo, dicho en claro."
      />
      <div className="mt-12 max-w-[62ch] space-y-6 text-paper-dim">
        <p>
          {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line},{" "}
          {site.address.city}, es responsable del tratamiento de los datos que
          nos entregas por la web, WhatsApp, teléfono o en el hospital.
        </p>
        <p>
          Pedimos nombre, teléfono, correo, y datos del animal (especie, edad,
          historia clínica) para agendar, atender, facturar y hacer seguimiento.
          No vendemos listas. No usamos tus datos para publicidad de terceros.
        </p>
        <p>
          La ficha clínica se guarda el tiempo que exige la buena práctica
          veterinaria y la tenencia responsable (Ley 21.020). Puedes pedir
          acceso, corrección o cancelación escribiendo a {site.email}, salvo
          cuando la ley nos obligue a conservar el registro.
        </p>
        <p>
          El formulario de la web viaja por HTTPS. El WhatsApp es un canal de
          Meta: si lo usas, también aplican sus reglas. Las cookies de esta
          web son las técnicas de sesión; no hay pixeles de marketing.
        </p>
        <p>
          Contacto: {site.email} · {site.phone}.
        </p>
      </div>
    </div>
  );
}
