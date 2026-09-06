import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: `Política de privacidad de ${site.legal}.`,
};

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        kicker="Privacidad"
        title="Qué hacemos con lo que nos escribe."
        lede={`${site.legal}, RUT ${site.rut}. Tratamos sus datos para responder una mira, no para otra cosa.`}
      />
      <div className="frame max-w-[62ch] space-y-8 pb-24 text-[1.05rem] leading-[1.75] text-niebla">
        <p>
          Si nos escribe por el formulario, WhatsApp o correo, guardamos nombre,
          correo, empresa y el mensaje el tiempo necesario para responder y —
          si hay encargo — para ejecutar el trabajo. No vendemos listas. No
          hacemos marketing con su operación.
        </p>
        <p>
          El formulario de esta propuesta no envía los datos a un servidor: es
          una demostración. En el sitio en producción, el mensaje llega a{" "}
          {site.email} y queda en la bitácora del taller.
        </p>
        <p>
          Responsable: {site.legal}, {site.address.street}, Valparaíso. Para
          acceder, corregir o borrar sus datos, escriba a {site.email}.
        </p>
        <p>
          Este sitio usa sólo las cookies técnicas que el navegador necesita
          para mostrarlo. No hay píxeles de publicidad.
        </p>
      </div>
    </>
  );
}
