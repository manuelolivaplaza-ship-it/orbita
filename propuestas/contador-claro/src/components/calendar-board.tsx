"use client";

import { useMemo, useState } from "react";
import {
  daysUntil,
  deadlinesInMonth,
  formatLongDate,
  kindLabel,
  monthNames,
  santiagoToday,
  upcomingDeadlines,
} from "@/lib/calendar";
import { cn } from "@/lib/utils";

export function CalendarBoard() {
  const today = useMemo(() => santiagoToday(), []);
  const [year, setYear] = useState(today.year);
  const [month, setMonth] = useState(today.month);
  const items = deadlinesInMonth(year, month);
  const upcoming = upcomingDeadlines(undefined, 5);

  function shift(delta: number) {
    const date = new Date(Date.UTC(year, month - 1 + delta, 1));
    setYear(date.getUTCFullYear());
    setMonth(date.getUTCMonth() + 1);
  }

  const canPrev = year > 2026 || (year === 2026 && month > 1);
  const canNext = year < 2027 || (year === 2027 && month < 12);

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="kicker">Próximos</p>
        <ol className="mt-6 border-t border-line">
          {upcoming.map((item) => {
            const days = daysUntil(item.iso);
            return (
              <li
                key={`${item.iso}-${item.kind}-${item.period}`}
                className="border-b border-line py-4"
              >
                <p className="text-[12px] tracking-[0.14em] text-muted uppercase">
                  {kindLabel[item.kind]} · {item.period}
                </p>
                <p className="font-display mt-1 text-xl font-medium tracking-tight">
                  {item.title}
                </p>
                <p className="nums mt-1 text-[14px] text-cobre">
                  {formatLongDate(item.iso)}
                  {days === 0
                    ? " · hoy"
                    : days === 1
                      ? " · mañana"
                      : ` · ${days} días`}
                </p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="lg:col-span-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Mes</p>
            <h2 className="font-display mt-2 text-4xl font-medium tracking-tight capitalize">
              {monthNames[month - 1]} {year}
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => shift(-1)}
              disabled={!canPrev}
              className="h-10 px-4 text-[0.82rem] font-semibold tracking-wide border border-ink disabled:opacity-30"
              aria-label="Mes anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => shift(1)}
              disabled={!canNext}
              className="h-10 px-4 text-[0.82rem] font-semibold tracking-wide border border-ink disabled:opacity-30"
              aria-label="Mes siguiente"
            >
              →
            </button>
          </div>
        </div>

        <ul className="mt-8 border-t border-line">
          {items.length === 0 ? (
            <li className="py-8 text-[16px] text-muted">
              Este mes no hay vencimientos cargados en la libreta.
            </li>
          ) : (
            items.map((item) => {
              const isToday = item.iso === today.iso;
              const past = item.iso < today.iso;
              return (
                <li
                  key={`${item.iso}-${item.kind}-${item.period}`}
                  className={cn(
                    "grid gap-2 border-b border-line py-5 sm:grid-cols-12 sm:items-baseline",
                    past && "opacity-50"
                  )}
                >
                  <p className="nums sm:col-span-3 text-[15px] font-semibold">
                    {formatLongDate(item.iso).replace(/ de \d{4}$/, "")}
                    {isToday ? (
                      <span className="ml-2 text-[11px] tracking-[0.16em] text-cobre uppercase">
                        Hoy
                      </span>
                    ) : null}
                  </p>
                  <div className="sm:col-span-9">
                    <p className="font-display text-[18px] font-medium tracking-tight">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-muted">
                      {item.note} · {item.period}
                    </p>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
