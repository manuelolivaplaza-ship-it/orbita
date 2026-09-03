"use client";

import { useMemo, useState } from "react";
import { VehicleCard, type VehicleCardData } from "@/components/vehicle-card";
import type { Powertrain } from "@/data/vehicles";
import { cn } from "@/lib/cn";

const filters: { id: "todas" | Powertrain; label: string; note: string }[] = [
  { id: "todas", label: "Todas", note: "La casa completa" },
  { id: "electrico", label: "Silencio", note: "Eléctrico" },
  { id: "hibrido", label: "Aliento", note: "Híbrido" },
  { id: "combustion", label: "Pulso", note: "Combustión" },
];

export function CollectionBrowser({ vehicles }: { vehicles: VehicleCardData[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("todas");

  const list = useMemo(() => {
    if (filter === "todas") return vehicles;
    return vehicles.filter((vehicle) => vehicle.powertrain === filter);
  }, [filter, vehicles]);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={cn(
                "px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.24em] transition-colors duration-300",
                filter === item.id
                  ? "bg-ink text-paper"
                  : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
          {list.length.toString().padStart(2, "0")}{" "}
          {list.length === 1 ? "pieza" : "piezas"}
        </p>
      </div>

      {list.length === 0 ? (
        <p className="py-24 font-display text-3xl font-light text-ink-soft">
          No hay piezas en esta atmósfera, por ahora.
        </p>
      ) : (
        <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {list.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.slug}
              vehicle={vehicle}
              large={index === 0 && filter === "todas"}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
