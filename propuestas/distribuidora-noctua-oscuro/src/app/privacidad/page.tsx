import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Cómo tratamos los datos en NOCTUA.",
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
        Legal
      </p>
      <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight">
        Privacidad
      </h1>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-paper-dim">
        <p>
          Los datos de la solicitud de cuenta —razón social, RUT, giro, comuna,
          teléfono y correo— se usan solo para evaluar y operar la relación
          comercial. No se venden ni se ceden a terceros ajenos al despacho y a
          la facturación.
        </p>
        <p>
          El formulario se guarda de forma local en el navegador para que puedas
          retomar el contacto por WhatsApp. No hay cuenta de usuario ni
          seguimiento publicitario en este sitio.
        </p>
        <p>
          Para acceder, corregir o borrar datos, escribe a{" "}
          <a href={`mailto:${site.email}`} className="link-line text-paper">
            {site.email}
          </a>{" "}
          o llama al {site.phone}.
        </p>
      </div>
    </article>
  );
}
