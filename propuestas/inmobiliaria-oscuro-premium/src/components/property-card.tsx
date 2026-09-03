import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/properties";
import { statusLabel, typeLabel } from "@/lib/properties";
import { cn, formatM2, formatUF } from "@/lib/utils";

export function PropertyCard({
  property,
  featured = false,
  className,
}: {
  property: Property;
  featured?: boolean;
  className?: string;
}) {
  return (
    <article className={cn("group", className)}>
      <Link href={`/propiedades/${property.slug}`} className="block">
        <div
          className={cn(
            "img-zoom relative overflow-hidden bg-surface",
            featured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/5]",
          )}
        >
          <Image
            src={property.cover}
            alt={property.gallery[0]?.alt ?? property.name}
            fill
            sizes={
              featured
                ? "(min-width: 1024px) 70vw, 100vw"
                : "(min-width: 1024px) 33vw, 100vw"
            }
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="font-mono text-[0.68rem] tracking-[0.16em] text-brass uppercase">
              {property.folio}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="border border-paper/25 bg-void/50 px-2 py-1 font-mono text-[0.62rem] tracking-[0.14em] text-paper uppercase backdrop-blur-sm">
              {statusLabel[property.status]}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <p className="kicker text-brass">{property.kicker}</p>
            <h3
              className={cn(
                "mt-2 font-display leading-[0.95] text-paper",
                featured
                  ? "text-[clamp(1.8rem,3vw,2.8rem)]"
                  : "text-[1.55rem]",
              )}
            >
              {property.name}
            </h3>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[0.72rem] tracking-wide text-paper-dim uppercase">
              <span className="tabular text-brass">{formatUF(property.uf)}</span>
              <span>{formatM2(property.m2)}</span>
              <span>
                {property.dormitorios} dorm. · {typeLabel[property.type]}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function PropertyRow({ property }: { property: Property }) {
  return (
    <Link
      href={`/propiedades/${property.slug}`}
      className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-line py-5 sm:grid-cols-[5.5rem_1fr_auto_auto]"
    >
      <span className="font-mono text-[0.72rem] tracking-[0.14em] text-brass uppercase">
        {property.folio}
      </span>
      <span className="min-w-0">
        <span className="block font-display text-xl leading-tight group-hover:text-brass sm:text-2xl">
          {property.name}
        </span>
        <span className="mt-1 block text-sm text-muted">
          {property.comuna} · {property.barrio}
        </span>
      </span>
      <span className="hidden font-mono text-[0.72rem] tracking-wide text-muted uppercase sm:block">
        {formatM2(property.m2)}
      </span>
      <span className="font-display text-lg tabular text-paper sm:text-xl">
        {formatUF(property.uf)}
      </span>
    </Link>
  );
}
