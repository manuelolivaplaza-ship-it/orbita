"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { days, week, type DayKey } from "@/lib/data";
import { cn } from "@/lib/utils";

function todayKey(): DayKey {
  const map: DayKey[] = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Santiago",
    weekday: "short",
  }).format(new Date());
  const lookup: Record<string, DayKey> = {
    Sun: "domingo",
    Mon: "lunes",
    Tue: "martes",
    Wed: "miercoles",
    Thu: "jueves",
    Fri: "viernes",
    Sat: "sabado",
  };
  return lookup[weekday] ?? map[new Date().getDay()];
}

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 60_000);
  return () => window.clearInterval(id);
}

export function ClassBoard() {
  const today = useSyncExternalStore(subscribe, todayKey, () => "lunes" as DayKey);
  const [picked, setPicked] = useState<DayKey | null>(null);
  const active = picked ?? today;

  const slots = useMemo(
    () => week.filter((c) => c.day === active),
    [active],
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Días de la semana"
        className="no-scrollbar flex gap-1 overflow-x-auto border-b border-line"
      >
        {days.map((day) => {
          const selected = day.key === active;
          return (
            <button
              key={day.key}
              role="tab"
              aria-selected={selected}
              type="button"
              onClick={() => setPicked(day.key)}
              className={cn(
                "relative shrink-0 px-4 py-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors",
                selected ? "text-copper" : "text-ink-soft hover:text-ink",
              )}
            >
              <span className="sm:hidden">{day.short}</span>
              <span className="hidden sm:inline">{day.label}</span>
              {selected ? (
                <span className="absolute inset-x-3 -bottom-px h-px bg-copper" />
              ) : null}
            </button>
          );
        })}
      </div>

      <ul className="divide-y divide-line">
        {slots.map((slot) => (
          <li
            key={`${slot.day}-${slot.time}-${slot.name}`}
            className="grid grid-cols-[4.5rem_1fr_auto] items-baseline gap-4 py-5 sm:grid-cols-[6rem_1fr_8rem_5rem]"
          >
            <p className="font-display text-xl tracking-tight">{slot.time}</p>
            <div>
              <p className="text-[1.05rem]">{slot.name}</p>
              <p className="mt-1 text-sm text-ink-soft">
                {slot.coach} · {slot.room}
              </p>
            </div>
            <p className="hidden text-sm text-ink-soft sm:block">{slot.room}</p>
            <p className="text-right text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft">
              {slot.cupo} cupos
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
