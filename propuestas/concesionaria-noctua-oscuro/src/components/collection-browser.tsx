"use client";

import { useMemo, useState } from "react";
import { VehicleCard, type VehicleCardData } from "@/components/vehicle-card";
import type { Temperament } from "@/data/vehicles";
import { cn } from "@/lib/cn";

const filters: { id: "todas" | Temperament; label: string; note: string }[] = [
  { id: "todas", label: "Todas", note: "La casa completa" },
  { id: "corte", label: "Corte", note: "Cupés y precisos" },
  { id: "estela", label: "Estela", note: "Sedanes y wagons" },
  { id: "territorio", label: "Territorio", note: "SUV" },
];

export function CollectionBrowser({ vehicles }: { vehicles: VehicleCardData[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("todas");

  const list = useMemo(() => {
    if (filter === "todas") return vehicles;
    return vehicles.filter((vehicle) => vehicle.temperament === filter);
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
                  ? "bg-amber text-void"
                  : "text-muted hover:text-paper",
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
        <p className="py-24 font-display text-3xl font-semibold text-paper-dim">
          No hay piezas en este temperamento, por ahora.
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
