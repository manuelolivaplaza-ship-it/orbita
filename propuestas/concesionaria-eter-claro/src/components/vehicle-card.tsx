import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import type { Vehicle } from "@/data/vehicles";
import { formatCLP, formatKm, formatPowertrain } from "@/lib/format";
import { cn } from "@/lib/cn";

export type VehicleCardData = Pick<
  Vehicle,
  | "slug"
  | "brand"
  | "model"
  | "year"
  | "priceCLP"
  | "status"
  | "powertrain"
  | "km"
  | "color"
  | "image"
>;

const statusLabel: Record<Vehicle["status"], string> = {
  disponible: "Disponible",
  reservada: "Reservada",
  proxima: "Próxima",
};

export function VehicleCard({
  vehicle,
  large = false,
  index = 0,
}: {
  vehicle: VehicleCardData;
  large?: boolean;
  index?: number;
}) {
  return (
    <Link
      href={`/coleccion/${vehicle.slug}`}
      className={cn("group block", large && "md:col-span-2")}
    >
      <article>
        <div
          className={cn(
            "frame relative",
            large ? "aspect-[16/9] md:aspect-[2/1]" : "aspect-[16/10]",
          )}
        >
          <Image
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model} ${vehicle.color}`}
            fill
            sizes={large ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover"
            priority={index < 2}
          />
          <div className="absolute left-5 top-5 flex items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-paper">
            <span className="bg-ink/55 px-2 py-1 backdrop-blur-sm">
              {statusLabel[vehicle.status]}
            </span>
            <span className="bg-ink/35 px-2 py-1 backdrop-blur-sm">
              {formatPowertrain(vehicle.powertrain)}
            </span>
          </div>
        </div>
        <div className="flex items-end justify-between gap-6 pt-6">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              {vehicle.brand} · {vehicle.year}
            </p>
            <h3 className="mt-2 font-display text-3xl font-light tracking-tight md:text-[2rem]">
              {vehicle.model}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              {formatCLP(vehicle.priceCLP)}
              <span className="text-muted"> · {formatKm(vehicle.km)}</span>
            </p>
          </div>
          <span className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <Arrow />
          </span>
        </div>
      </article>
    </Link>
  );
}
