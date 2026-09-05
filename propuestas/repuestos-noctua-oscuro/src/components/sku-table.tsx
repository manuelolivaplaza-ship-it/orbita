import Link from "next/link";
import { stockLabel, type Piece } from "@/data/catalog";
import { formatCLP } from "@/lib/format";

export function SkuTable({ items }: { items: Piece[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.slug}>
          <Link href={`/pieza/${item.slug}`} className="ficha group hover:text-face">
            <span className="font-mono text-[0.62rem] tracking-[0.12em] text-mute">
              {item.sku}
            </span>
            <span>{item.name}</span>
            <span className="hidden text-mute md:inline">
              {stockLabel[item.stock]}
            </span>
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.12em] text-mute md:inline">
              {item.unit}
            </span>
            <span className="text-right tabular-nums">
              {formatCLP(item.priceIva)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SkuNote() {
  return (
    <p className="mt-6 max-w-xl text-xs leading-relaxed text-mute">
      Precios con IVA, referenciales. El cruce final es por patente, código de
      motor y OEM. Sin esos tres, el mesón no confirma.
    </p>
  );
}
