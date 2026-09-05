"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function isOpen(hour: number, minute: number, weekday: number) {
  if (weekday === 0 || weekday === 6) return false;
  const t = hour * 60 + minute;
  if (t < 9 * 60 + 30) return false;
  if (weekday === 5) return t < 14 * 60;
  return t < 18 * 60 + 30;
}

export function LuzNorte({ className }: { className?: string }) {
  const [label, setLabel] = useState("Santiago · luz norte");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const parts = new Intl.DateTimeFormat("es-CL", {
        timeZone: "America/Santiago",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        weekday: "short",
      }).formatToParts(now);

      const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
      const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
      const weekdayLabel = parts.find((part) => part.type === "weekday")?.value ?? "";
      const weekday = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Santiago" }),
      ).getDay();
      const lit = isOpen(hour, minute, weekday);
      const hh = String(hour).padStart(2, "0");
      const mm = String(minute).padStart(2, "0");

      setOpen(lit);
      setLabel(
        `${weekdayLabel} ${hh}:${mm} · ${lit ? "luz de trabajo" : "el estudio en silencio"}`,
      );
    };

    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "luz-dot inline-block h-1.5 w-1.5 rounded-full",
          open ? "bg-norte" : "bg-muted/50",
        )}
        aria-hidden
      />
      <span>{label}</span>
    </span>
  );
}
