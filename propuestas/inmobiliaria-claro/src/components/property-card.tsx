import Image from "next/image";
import Link from "next/link";
import { Compass } from "@/components/compass";
import { type Property, statusLabel, typeLabel } from "@/lib/data";
import { formatM2, formatUf } from "@/lib/utils";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/lista/${property.slug}`} className="group block">
      <div className="img-zoom relative aspect-[4/3] bg-luz-2">
        <Image
          src={property.cover}
          alt={property.gallery[0]?.alt ?? property.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="font-mono absolute top-3 left-3 bg-luz/92 px-2.5 py-1 text-[10px] tracking-[0.16em] text-ink uppercase backdrop-blur-sm">
          {property.folio}
        </span>
        {property.status === "reservado" ? (
          <span className="font-mono absolute top-3 right-3 bg-ink px-2.5 py-1 text-[10px] tracking-[0.16em] text-luz uppercase">
            {statusLabel[property.status]}
          </span>
        ) : null}
      </div>
      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <p className="kicker">
            {property.comuna} · {typeLabel[property.type]}
          </p>
          <h3 className="font-display mt-1.5 text-[1.55rem] leading-tight font-medium tracking-tight group-hover:text-sol">
            {property.name}
          </h3>
          <p className="mt-2 text-[14px] text-muted">
            {formatM2(property.m2)} · {property.dormitorios} dorm. ·{" "}
            {property.visitaIdeal}
          </p>
        </div>
        <Compass bearing={property.orientacion} className="mt-1 hidden sm:flex" />
      </div>
      <p className="font-display nums mt-3 text-2xl font-semibold tracking-tight">
        UF {formatUf(property.uf)}
      </p>
    </Link>
  );
}

export function PropertyRow({ property }: { property: Property }) {
  return (
    <Link
      href={`/lista/${property.slug}`}
      className="group grid gap-5 border-t border-line py-6 sm:grid-cols-12 sm:items-center"
    >
      <div className="img-zoom relative aspect-[4/3] bg-luz-2 sm:col-span-4 lg:col-span-3">
        <Image
          src={property.cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 22vw, 40vw"
          className="object-cover"
        />
      </div>
      <div className="sm:col-span-5 lg:col-span-6">
        <p className="kicker">
          {property.folio} · {property.comuna}
        </p>
        <h3 className="font-display mt-2 text-[1.7rem] leading-tight font-medium tracking-tight group-hover:text-sol">
          {property.name}
        </h3>
        <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-muted">
          {property.lede}
        </p>
      </div>
      <div className="flex items-end justify-between gap-4 sm:col-span-3 sm:flex-col sm:items-end">
        <Compass bearing={property.orientacion} label={property.orientacion} />
        <p className="font-display nums text-2xl font-semibold tracking-tight">
          UF {formatUf(property.uf)}
        </p>
      </div>
    </Link>
  );
}
