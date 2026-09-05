import Link from "next/link";
import { Arrow } from "@/components/mark";
import type { Sku } from "@/data/catalog";
import { formatCLP } from "@/lib/format";

export function SkuTable({
  items,
  showFamily = false,
}: {
  items: Sku[];
  showFamily?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[42rem]">
        {items.map((item) => (
          <div key={item.code} className="lista">
            <span className="font-mono text-[0.68rem] tracking-[0.08em] text-sodium">
              {item.code}
            </span>
            <span>
              <span className="block text-sm md:text-base">{item.name}</span>
              <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mute">
                {item.measure}
                {showFamily ? ` · ${item.norma}` : ""}
              </span>
            </span>
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mute md:block">
              {item.norma}
            </span>
            <span className="text-right font-display text-xl font-medium tracking-wide md:text-2xl">
              {formatCLP(item.priceIva)}
            </span>
            <span className="hidden text-right font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mute md:block">
              {item.unitLabel}
            </span>
            <span className="hidden text-right font-mono text-[0.62rem] uppercase tracking-[0.14em] text-sodium md:block">
              {item.stock}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkuNote({ href = "/familias" }: { href?: string }) {
  return (
    <p className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs leading-relaxed text-mute">
      <span>
        Precio con IVA. Referencial, según stock y comuna. El corte se anida en
        la tira de 6.000 mm.
      </span>
      <Link
        href={href}
        className="inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-face"
      >
        Ver familias
        <Arrow />
      </Link>
    </p>
  );
}
