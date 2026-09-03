"use client";

import { useEffect, useState } from "react";

import { getClinicStatus, type ClinicStatus } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function HoursLive({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<ClinicStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getClinicStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const open = status?.open ?? false;
  const label = status?.label ?? "Horario de consultorio";
  const detail = status?.detail ?? "Lun–Vie 8:30–20 · Sáb 9–14";

  return (
    <p
      className={cn(
        "flex items-center gap-2 text-[0.8rem] text-muted-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 shrink-0 rounded-full",
          status ? (open ? "bg-emerald-700" : "bg-clay") : "bg-border",
        )}
      />
      <span className="whitespace-nowrap">
        <span className="text-foreground">{label}</span>
        {!compact && <span className="hidden sm:inline"> · {detail}</span>}
      </span>
    </p>
  );
}
