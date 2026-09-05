"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

function santiagoParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Santiago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const weekday = get("weekday");
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  return { weekday, hour, minute, decimal: hour + minute / 60 };
}

function isOpen(weekday: string, decimal: number) {
  if (weekday === "Sun") return false;
  if (weekday === "Sat") {
    return decimal >= site.saturdayOpen && decimal < site.saturdayClose;
  }
  return decimal >= site.openHour && decimal < site.closeHour;
}

export function DayRibbon() {
  const [now, setNow] = useState<{
    weekday: string;
    hour: number;
    minute: number;
    decimal: number;
  } | null>(null);

  useEffect(() => {
    const tick = () => setNow(santiagoParts(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const start = 8;
  const end = 20;
  const span = end - start;
  const open = now ? isOpen(now.weekday, now.decimal) : false;
  const clamped = now
    ? Math.min(end, Math.max(start, now.decimal))
    : start;
  const left = ((clamped - start) / span) * 100;
  const timeLabel = now
    ? `${String(now.hour).padStart(2, "0")}:${String(now.minute).padStart(2, "0")}`
    : "";

  return (
    <div className="border-y border-linea bg-papel">
      <div className="shell py-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris">
            El día de la casa
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-eter">
            {now
              ? open
                ? `Abierta · Santiago ${timeLabel}`
                : `Cerrada · Santiago ${timeLabel}`
              : "Santiago"}
          </p>
        </div>
        <div className="relative mt-4 h-8">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-linea" />
          <span className="absolute left-0 top-1/2 h-2 w-px -translate-y-1/2 bg-tinta" />
          <span className="absolute right-0 top-1/2 h-2 w-px -translate-y-1/2 bg-tinta" />
          {now ? (
            <span
              className="absolute top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-eter"
              style={{ left: `${left}%` }}
              aria-hidden="true"
            />
          ) : null}
        </div>
        <div className="mt-2 flex justify-between font-mono text-[0.58rem] uppercase tracking-[0.2em] text-gris">
          <span>8:00</span>
          <span>14:00</span>
          <span>20:00</span>
        </div>
      </div>
    </div>
  );
}
