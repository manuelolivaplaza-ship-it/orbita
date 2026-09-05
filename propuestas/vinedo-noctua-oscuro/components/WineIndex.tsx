"use client";

import { useMemo, useState } from "react";
import { WineCard } from "@/components/WineCard";
import { wines, type WineColor } from "@/lib/wines";
import { cn } from "@/lib/cn";

const filters: { id: "todos" | WineColor; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "tinto", label: "Tintos" },
  { id: "blanco", label: "Blancos" },
];

export function WineIndex() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("todos");

  const list = useMemo(
    () => (filter === "todos" ? wines : wines.filter((w) => w.color === filter)),
    [filter],
  );

  return (
    <div>
      <div className="flex gap-6">
        {filters.map((item) => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={cn(
              "font-sans text-[11px] uppercase tracking-[0.22em] transition-colors",
              filter === item.id ? "text-brass" : "text-mist hover:text-bone",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((wine) => (
          <WineCard key={wine.slug} wine={wine} />
        ))}
      </div>
    </div>
  );
}
