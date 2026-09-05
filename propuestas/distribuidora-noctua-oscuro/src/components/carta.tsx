import Link from "next/link";
import { Arrow } from "@/components/mark";
import type { Producto } from "@/data/catalog";
import { ventanas } from "@/data/catalog";
import { formatCLP } from "@/lib/format";

export function Carta({
  items,
  showVentana = false,
}: {
  items: Producto[];
  showVentana?: boolean;
}) {
  return (
    <div role="table" aria-label="Carta de productos">
      <div
        className="hidden border-b border-line pb-3 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted md:grid md:grid-cols-[6.4rem_1.4fr_1fr_8rem_7.4rem] md:gap-4"
        role="row"
      >
        <span>SKU</span>
        <span>Producto</span>
        <span>Origen</span>
        <span>Formato</span>
        <span className="text-right">Neto desde</span>
      </div>
      {items.map((item) => {
        const ventana = ventanas.find((entry) => entry.id === item.ventana);
        return (
          <div key={item.sku} className="carta-row" role="row">
            <span
              role="cell"
              className="font-mono text-[0.68rem] tracking-wide text-muted"
            >
              {item.sku}
            </span>
            <span role="cell">
              <span className="block text-[0.98rem] leading-snug">{item.name}</span>
              <span className="mt-1 block text-sm text-muted">
                {item.producer}
                {showVentana && ventana ? ` · ${ventana.name}` : ""}
              </span>
            </span>
            <span role="cell" className="hidden text-sm text-paper-dim md:block">
              {item.origin}
            </span>
            <span role="cell" className="hidden text-sm text-paper-dim md:block">
              {item.format}
            </span>
            <span
              role="cell"
              className="text-right font-mono text-[0.86rem] tabular-nums"
            >
              {formatCLP(item.priceNeto)}
              <span className="mt-1 block font-sans text-[0.7rem] text-muted md:hidden">
                {item.format}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function CartaNote({
  href,
  label = "Ver la carta completa",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <p className="max-w-md text-xs leading-relaxed text-muted">
        Valores netos referenciales, lista septiembre 2026. Se confirman según
        volumen, ficha técnica y disponibilidad de cámara. IVA no incluido.
      </p>
      {href ? (
        <Link
          href={href}
          className="inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
        >
          {label}
          <Arrow />
        </Link>
      ) : null}
    </div>
  );
}
