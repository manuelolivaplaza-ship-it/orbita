import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 pb-24 pt-32 md:px-10">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
        Legal
      </p>
      <h1 className="mt-5 font-display text-5xl font-light tracking-tight">
        Privacidad
      </h1>
      <div className="mt-10 space-y-5 text-sm leading-relaxed text-ink-soft">
        <p>
          Los datos de una cotización (nombre, RUT, teléfono, comuna y lista)
          se usan solo para responder el pedido y emitir boleta o factura. No se
          venden ni se ceden a terceros ajenos a la operación.
        </p>
        <p>
          La solicitud puede quedar guardada en este navegador para reabrir
          WhatsApp. Puedes borrarla limpiando el almacenamiento local.
        </p>
        <p>
          Para ejercer derechos ARCO o pedir la eliminación de una ficha,
          escríbenos a {site.email}.
        </p>
      </div>
    </article>
  );
}
