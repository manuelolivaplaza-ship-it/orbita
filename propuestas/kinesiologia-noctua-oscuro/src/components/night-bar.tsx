"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { isClinicOpen, moonPhaseName, santiagoParts } from "@/lib/night";

export function NightBar() {
  const [state, setState] = useState<{
    time: string;
    open: boolean;
    moon: string;
  } | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setState({
        time: santiagoParts(now).time,
        open: isClinicOpen(now),
        moon: moonPhaseName(now),
      });
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="border-y border-line bg-ink">
      <div className="shell flex flex-wrap items-center justify-between gap-3 py-3 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-muted">
        <p>
          {site.coords.lat} · {site.coords.lng} · {site.address.commune}
        </p>
        <p className="flex items-center gap-3">
          <span>Santiago · {state?.time ?? "—:—"}</span>
          <span className="hidden text-line sm:inline">/</span>
          <span className={state?.open ? "text-amber" : undefined}>
            {state?.open ? "Casa abierta" : "Casa en silencio"}
          </span>
          <span className="hidden text-line md:inline">/</span>
          <span className="hidden md:inline">Luna {state?.moon ?? "—"}</span>
        </p>
      </div>
    </div>
  );
}

export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(santiagoParts().time);
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
      Santiago · {time}
    </p>
  );
}

export function OpenBadge() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => setOpen(isClinicOpen());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (open === null) return null;

  return (
    <span
      className="hidden items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted lg:flex"
      title={open ? "La casa está abierta ahora" : "La casa abre a las 15:00"}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${open ? "bg-amber" : "bg-line"}`}
      />
      {open ? "Abierta" : "En silencio"}
    </span>
  );
}
