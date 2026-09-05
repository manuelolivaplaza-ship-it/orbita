import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Cómo tratamos los datos en Casa NOCTUA.",
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
        Casa
      </p>
      <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight">
        Privacidad
      </h1>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-paper-dim">
        <p>
          {site.legalName}, RUT {site.rut}, trata los datos que nos dejas en el
          formulario de visita —nombre, apellido, celular, correo y pieza de
          interés— solo para coordinar la cita y el seguimiento comercial de esa
          visita.
        </p>
        <p>
          No vendemos bases. No cedemos datos a terceros ajenos a la operación
          (transferencia, permiso de circulación, financiamiento con tu banco
          cuando lo pides). El canal habitual es WhatsApp.
        </p>
        <p>
          Para ejercer acceso, rectificación o supresión, escribe a{" "}
          <a href={`mailto:${site.email}`} className="link-line text-paper">
            {site.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
