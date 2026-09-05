import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { formatCLP, padIndex } from "@/lib/format";

export function Filmstrip() {
  return (
    <div className="filmstrip px-6 md:px-10 lg:px-16">
      {vehicles.map((vehicle, index) => (
        <Link
          key={vehicle.slug}
          href={`/coleccion/${vehicle.slug}`}
          className="group w-[78vw] max-w-[420px] md:w-[380px]"
        >
          <div className="frame relative aspect-[16/10]">
            <Image
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.model}`}
              fill
              sizes="380px"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-paper">
              {padIndex(index)}
            </span>
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-4">
            <div>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-muted">
                {vehicle.brand}
              </p>
              <p className="mt-1 font-display text-xl font-semibold tracking-tight">
                {vehicle.model}
              </p>
            </div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] tabular-nums text-muted">
              {formatCLP(vehicle.priceCLP)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
