import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 pb-24 pt-32 md:px-10">
      <h1 className="font-display text-5xl font-medium tracking-wide">
        Aviso legal
      </h1>
      <div className="mt-10 space-y-5 text-sm leading-relaxed text-mute">
        <p>
          {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line1},{" "}
          {site.address.commune}, {site.address.city}, Chile, opera este sitio
          como canal comercial de una bodega de repuestos de turno noche.
        </p>
        <p>
          Los precios publicados incluyen IVA, son referenciales y pueden variar
          según stock, comuna de despacho y equivalencia OEM. El valor final se
          confirma al cruzar.
        </p>
        <p>
          Las referencias OEM se indican como cruce de producto. NOCTUA no
          representa exclusividad de fabricante salvo que se declare en la
          ficha. El calce se confirma por patente, motor y medida, no por
          semejanza visual.
        </p>
        <p>
          Contacto: {site.email} · {site.phone}.
        </p>
      </div>
    </article>
  );
}
