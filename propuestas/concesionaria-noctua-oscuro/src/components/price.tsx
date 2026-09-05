"use client";

import { useState } from "react";
import { formatCLP, formatUF } from "@/lib/format";
import { cn } from "@/lib/cn";

export function Price({ value }: { value: number }) {
  const [unit, setUnit] = useState<"clp" | "uf">("clp");

  return (
    <div>
      <p className="font-display text-5xl font-semibold tracking-tight tabular-nums">
        {unit === "clp" ? formatCLP(value) : formatUF(value)}
      </p>
      <div className="mt-3 flex gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]">
        <button
          type="button"
          onClick={() => setUnit("clp")}
          className={cn(unit === "clp" ? "text-amber" : "text-muted")}
        >
          CLP
        </button>
        <span className="text-line">/</span>
        <button
          type="button"
          onClick={() => setUnit("uf")}
          className={cn(unit === "uf" ? "text-amber" : "text-muted")}
        >
          UF
        </button>
      </div>
    </div>
  );
}
