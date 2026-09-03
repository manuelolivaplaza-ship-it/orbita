import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/data/properties";
import { statusLabels, typeLabels } from "@/data/properties";
import { cn } from "@/lib/cn";
import { formatM2, formatUF, padIndex } from "@/lib/format";

export function PropertyCard({
  property,
  index,
  large = false,
}: {
  property: Property
  index: number
  large?: boolean
}) {
  return (
    <Link
      href={`/propiedades/${property.slug}`}
      className="group block"
      data-cursor="hot"
    >
      <article>
        <div
          className={cn(
            "img-zoom relative overflow-hidden bg-[#10100e]",
            large ? "aspect-[16/11] lg:aspect-[16/10]" : "aspect-[4/5]",
          )}
        >
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            sizes={large ? "(min-width:1024px) 58vw, 100vw" : "(min-width:1024px) 28vw, 100vw"}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={cn("status-dot", property.status)} />
            <span className="font-mono text-[10px] tracking-[0.22em] text-ivory uppercase">
              {statusLabels[property.status]}
            </span>
          </div>
          <span className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.22em] text-gold">
            {padIndex(index)}
          </span>
          <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-3xl leading-none lg:text-4xl">
                {property.name}
              </p>
              <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-ivory-soft uppercase">
                {property.comuna} · {typeLabels[property.type]}
              </p>
            </div>
            <p className="hidden font-mono text-[11px] tracking-[0.14em] text-gold sm:block">
              {formatUF(property.uf)}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-[11px] tracking-[0.16em] text-muted uppercase">
          <p>
            {formatM2(property.m2)} · {property.dormitorios} dorm. · {property.banos} baños
          </p>
          <p className="text-gold transition-transform duration-500 group-hover:translate-x-1">
            Ver ficha →
          </p>
        </div>
      </article>
    </Link>
  );
}
