import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Car, Maximize } from "lucide-react";

import { formatUF } from "@/lib/format";
import type { Property } from "@/lib/properties";
import { cn } from "@/lib/utils";

export function PropertyCard({
  property,
  className,
}: {
  property: Property;
  className?: string;
}) {
  const priceLabel =
    property.operation === "arriendo"
      ? `${formatUF(property.priceUF)} / mes`
      : formatUF(property.priceUF);

  return (
    <Link
      href={`/propiedades/${property.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_rgba(23,28,25,0.35)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium tracking-wide text-foreground uppercase">
            {property.operation === "venta" ? "Venta" : "Arriendo"}
          </span>
          {property.badge ? (
            <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-medium tracking-wide text-primary-foreground uppercase">
              {property.badge}
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {property.comuna} · {property.sector}
        </p>
        <h3 className="mt-1.5 font-heading text-[1.35rem] leading-snug text-foreground">
          {property.title}
        </h3>
        <p className="mt-3 font-heading text-2xl text-primary">{priceLabel}</p>
        <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <Spec icon={Maximize} label={`${property.area} m²`} />
          <Spec icon={BedDouble} label={`${property.bedrooms} dorm.`} />
          <Spec icon={Bath} label={`${property.bathrooms} baños`} />
          {property.parking > 0 ? (
            <Spec icon={Car} label={`${property.parking} est.`} />
          ) : null}
        </dl>
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
