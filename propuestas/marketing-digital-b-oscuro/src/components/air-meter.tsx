"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Reading = {
  label: string;
  hint: string;
  value: number;
};

function readingForHour(hour: number): Reading {
  if (hour >= 21 || hour < 7) {
    return {
      label: "Aire limpio",
      hint: "Poca gente publicando. Buena hora de awareness.",
      value: 0.22,
    };
  }
  if (hour >= 7 && hour < 10) {
    return {
      label: "Sube",
      hint: "El feed de la mañana se llena. Search todavía trabaja.",
      value: 0.48,
    };
  }
  if (hour >= 10 && hour < 14) {
    return {
      label: "Saturado",
      hint: "Todos publican. El CPC sube. Cortar ruido, no subir presupuesto.",
      value: 0.86,
    };
  }
  if (hour >= 14 && hour < 18) {
    return {
      label: "Alto",
      hint: "Tarde de oficina. B2B todavía responde.",
      value: 0.7,
    };
  }
  return {
    label: "Baja",
    hint: "Sale el trabajo. Ecommerce y WhatsApp se ponen de pie.",
    value: 0.4,
  };
}

export function AirMeter({ className }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => {
      setNow(
        new Date(new Date().toLocaleString("en-US", { timeZone: "America/Santiago" }))
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (!now) {
    return (
      <p className={cn("font-mono text-[0.72rem] tracking-wide text-paper-dim", className)}>
        Aire de Santiago · …
      </p>
    );
  }

  const reading = readingForHour(now.getHours());
  const time = now.toLocaleTimeString("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className={cn("max-w-md", className)}>
      <div className="flex items-center justify-between gap-4 font-mono text-[0.72rem] tracking-[0.12em] uppercase text-paper-dim">
        <span className="flex items-center gap-2">
          <span className="led led-live" aria-hidden />
          Aire de Santiago · {time}
        </span>
        <span className="text-carrier">{reading.label}</span>
      </div>
      <div className="mt-2 h-px w-full bg-line">
        <div
          className="h-px bg-carrier transition-[width] duration-700"
          style={{ width: `${Math.round(reading.value * 100)}%` }}
        />
      </div>
      <p className="mt-2 text-[0.82rem] leading-snug text-muted">{reading.hint}</p>
    </div>
  );
}
