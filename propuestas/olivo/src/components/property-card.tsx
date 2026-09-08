import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bath, BedDouble, Car, Maximize } from "lucide-react";

import { formatUF, ufPerM2 } from "@/lib/format";
import type { Property } from "@/lib/properties";
import { cn } from "@/lib/utils";

export function PropertyCard({
  property,
  className,
  layout = "grid",
}: {
  property: Property;
  className?: string;
  layout?: "grid" | "editorial";
}) {
  const priceLabel =
    property.operation === "arriendo"
      ? `${formatUF(property.priceUF)} / mes`
      : formatUF(property.priceUF);
  const m2 = property.operation === "venta" ? ufPerM2(property.priceUF, property.area) : null;
  const editorial = layout === "editorial";

  return (
    <Link
      href={`/propiedades/${property.slug}`}
      className={cn(
        "group overflow-hidden rounded-2xl bg-card ring-1 ring-border transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_rgba(23,28,25,0.35)]",
        editorial
          ? "grid md:grid-cols-2 md:rounded-3xl"
          : "flex flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-muted",
          editorial ? "min-h-[280px] md:min-h-full" : "aspect-[4/3]",
        )}
      >
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          sizes={editorial ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#171c19]/55 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium tracking-wide text-foreground uppercase">
            {property.operation === "venta" ? "Venta" : "Arriendo"}
          </span>
          {property.badge ? (
            <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-medium tracking-wide text-primary-foreground uppercase">
              {property.badge}
            </span>
          ) : null}
        </div>
        <p className="absolute bottom-3 left-3 font-heading text-2xl text-white drop-shadow-sm">
          {priceLabel}
        </p>
      </div>
      <div className={cn("flex flex-1 flex-col", editorial ? "justify-center p-7 md:p-10" : "p-5")}>
        <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {property.comuna} · {property.sector}
        </p>
        <h3
          className={cn(
            "mt-1.5 leading-snug text-foreground",
            editorial ? "font-heading text-3xl md:text-4xl" : "font-heading text-[1.35rem]",
          )}
        >
          {property.title}
        </h3>
        {editorial ? (
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            {property.headline}
          </p>
        ) : null}
        <p className={cn("font-heading text-primary", editorial ? "mt-5 text-3xl" : "mt-3 text-2xl")}>
          {priceLabel}
        </p>
        {m2 ? (
          <p className="mt-1 text-xs text-muted-foreground">{m2} UF/m² útiles</p>
        ) : property.available ? (
          <p className="mt-1 text-xs text-muted-foreground">Disponible {property.available}</p>
        ) : null}
        <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <Spec icon={Maximize} label={`${property.area} m²`} />
          {property.terrain ? <Spec icon={Maximize} label={`${property.terrain} m² terr.`} /> : null}
          <Spec icon={BedDouble} label={`${property.bedrooms} dorm.`} />
          <Spec icon={Bath} label={`${property.bathrooms} baños`} />
          {property.parking > 0 ? (
            <Spec icon={Car} label={`${property.parking} est.`} />
          ) : null}
        </dl>
        {editorial ? (
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Ver ficha <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </span>
        ) : null}
      </div>
    </Link>
  );
}

function Spec({
  icon: Icon,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="size-3.5" />
      <span>{label}</span>
    </div>
  );
}
