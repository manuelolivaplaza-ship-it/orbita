import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
        Legal
      </p>
      <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight">
        Aviso legal
      </h1>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-paper-dim">
        <p>
          {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line1},{" "}
          {site.address.commune}, {site.address.city}, Chile, opera este sitio
          como canal comercial de una distribuidora nocturna de insumos para
          cocina profesional.
        </p>
        <p>
          Los precios publicados son netos, referenciales y pueden variar según
          volumen, ficha técnica y disponibilidad de cámara. El IVA se informa
          en la factura. La cuenta corriente se evalúa caso a caso.
        </p>
        <p>
          Las marcas de origen (molinos, olivares, frigoríficos y cooperativas)
          se mencionan como productoras. NOCTUA no representa exclusividad salvo
          que se indique en la ficha.
        </p>
        <p>
          Contacto: {site.email} · {site.phone}.
        </p>
      </div>
    </article>
  );
}
