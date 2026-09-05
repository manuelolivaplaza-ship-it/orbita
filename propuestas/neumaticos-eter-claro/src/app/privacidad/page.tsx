import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        kicker="Datos"
        title="Privacidad"
        lead="Tratamos lo mínimo: nombre, celular, patente y medida. Nada más."
      />
      <article className="mx-auto max-w-[720px] px-6 pb-28 text-base leading-relaxed text-ink-soft md:px-10">
        <p>
          {site.legalName} trata datos personales conforme a la Ley N° 19.628.
          Recogemos nombre, teléfono, correo, patente y medida para cotizar y
          agendar montaje. No vendemos listas. No usamos la patente para nada
          que no sea identificar el vehículo en el taller.
        </p>
        <p className="mt-6">
          Puedes pedir acceso, corrección o cancelación en {site.email}. El
          formulario de esta propuesta no envía datos a un servidor: abre
          WhatsApp con el texto que escribiste.
        </p>
      </article>
    </>
  );
}
