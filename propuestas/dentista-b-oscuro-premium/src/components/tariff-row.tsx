import Link from "next/link";
import type { Treatment } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TariffRow({ item }: { item: Treatment }) {
  return (
    <Link
      href={`/tratamientos/${item.slug}`}
      className={cn(
        "group grid grid-cols-[1fr_auto] items-baseline gap-x-6 border-b border-line py-[15px] transition-colors duration-160 hover:bg-foreground/[0.03]",
        item.featured && "border-l-2 border-l-amber pl-4"
      )}
    >
      <div>
        <div className="flex flex-wrap items-baseline gap-3">
          <p className="font-display text-[1.2rem] leading-tight tracking-tight sm:text-[1.35rem]">
            {item.name}
          </p>
          {item.featured ? (
            <span className="text-[0.65rem] tracking-[0.14em] text-amber uppercase">
              Cupo esta semana
            </span>
          ) : null}
        </div>
        <p className="tariff-meta mt-1 max-h-12 text-[0.82rem] leading-snug text-muted-foreground sm:max-h-0 sm:overflow-hidden sm:transition-all sm:duration-160 sm:group-hover:mt-1.5 sm:group-hover:max-h-12 sm:group-focus-visible:mt-1.5 sm:group-focus-visible:max-h-12">
          {item.duration} · {item.includes}
        </p>
      </div>
      <p
        className={cn(
          "font-display text-[1.05rem] tabular sm:text-lg",
          item.featured ? "text-teal" : "text-champagne"
        )}
      >
        {item.priceValue}
      </p>
    </Link>
  );
}
