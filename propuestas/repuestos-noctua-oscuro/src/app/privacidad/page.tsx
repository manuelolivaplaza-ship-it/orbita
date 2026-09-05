import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 pb-24 pt-32 md:px-10">
      <h1 className="font-display text-5xl font-medium tracking-wide">
        Privacidad
      </h1>
      <div className="mt-10 space-y-5 text-sm leading-relaxed text-mute">
        <p>
          Los datos de un cruce (nombre, RUT, teléfono, patente, comuna y
          pieza) se usan solo para responder el pedido y emitir boleta o
          factura. No se venden ni se ceden a terceros ajenos a la operación.
        </p>
        <p>
          La solicitud puede quedar guardada en este navegador para reabrir
          WhatsApp. Puedes borrarla limpiando el almacenamiento local.
        </p>
        <p>
          La patente se consulta contra ficha de bodega. No se publica ni se
          usa para fines ajenos al recambio.
        </p>
        <p>
          Para ejercer derechos ARCO o pedir la eliminación de una ficha,
          escríbenos a {site.email}.
        </p>
      </div>
    </article>
  );
}
