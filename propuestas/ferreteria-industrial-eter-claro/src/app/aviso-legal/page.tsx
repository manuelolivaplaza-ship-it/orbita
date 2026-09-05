import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 pb-24 pt-32 md:px-10">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
        Legal
      </p>
      <h1 className="mt-5 font-display text-5xl font-light tracking-tight">
        Aviso legal
      </h1>
      <div className="mt-10 space-y-5 text-sm leading-relaxed text-ink-soft">
        <p>
          {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line1},{" "}
          {site.address.commune}, {site.address.city}, Chile, opera este sitio
          como canal comercial de una ferretería industrial.
        </p>
        <p>
          Los precios publicados incluyen IVA, son referenciales y pueden variar
          según stock, comuna de despacho, corte y volumen. El valor final se
          confirma al cotizar.
        </p>
        <p>
          Las normas (NCh, ASTM, SAE) se indican como referencia de producto. ETER
          no representa exclusividad de fabricante salvo que se declare en la
          ficha.
        </p>
        <p>
          Contacto: {site.email} · {site.phone}.
        </p>
      </div>
    </article>
  );
}
