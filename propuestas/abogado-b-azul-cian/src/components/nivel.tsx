"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function santiagoNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Santiago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const weekday = get("weekday");
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  const isWeekday = !["Sat", "Sun"].includes(weekday);
  const open = isWeekday && hour >= 9 && hour < 18;
  const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  return { open, time };
}

export function Nivel({ className }: { className?: string }) {
  const [state, setState] = useState<{ open: boolean; time: string } | null>(null);

  useEffect(() => {
    const tick = () => setState(santiagoNow());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const open = state?.open ?? false;

  return (
    <div className={cn("flex items-end gap-4", className)}>
      <div
        className="relative h-[4.6rem] w-7 overflow-hidden border border-line bg-paper-2"
        aria-hidden
      >
        <div
          className={cn(
            "nivel-fill absolute inset-x-0 bottom-0",
            open ? "h-[72%] bg-cyan" : "h-[28%] bg-navy/40"
          )}
        />
        <div className="absolute inset-x-0 top-[28%] h-px bg-line" />
        <div className="absolute inset-x-0 top-[55%] h-px bg-line" />
      </div>
      <div>
        <p className="kicker">{open ? "Cauce abierto" : "Fuera de horario"}</p>
        <p className="font-display nums mt-1 text-2xl font-semibold tracking-tight">
          {state ? state.time : "—:—"}
        </p>
        <p className="text-[13px] text-muted">Hora de Santiago · Lun–Vie 9:00–18:00</p>
      </div>
    </div>
  );
}
