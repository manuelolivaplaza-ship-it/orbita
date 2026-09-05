"use client";

import { useEffect, useState } from "react";
import { getVentana } from "@/data/catalog";
import { site } from "@/data/site";
import {
  currentVentanaId,
  isRondaLive,
  moonPhaseName,
  santiagoParts,
} from "@/lib/night";

export function NightBar() {
  const [state, setState] = useState<{
    time: string;
    live: boolean;
    moon: string;
    ventana: string;
  } | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const id = currentVentanaId(now);
      setState({
        time: santiagoParts(now).time,
        live: isRondaLive(now),
        moon: moonPhaseName(now),
        ventana: id ? (getVentana(id)?.name ?? "") : "Silencio",
      });
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="border-y border-line bg-ink">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-6 py-3 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-muted md:px-10 lg:px-16">
        <p>
          {site.coords.lat} · {site.coords.lng} · {site.address.commune}
        </p>
        <p className="flex items-center gap-3">
          <span>Santiago · {state?.time ?? "—:—"}</span>
          <span className="hidden text-line sm:inline">/</span>
          <span className={state?.live ? "text-amber" : undefined}>
            {state?.live
              ? `Ronda ${state.ventana}`
              : "CD en silencio"}
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
  const [live, setLive] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => setLive(isRondaLive());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (live === null) return null;

  return (
    <span
      className="hidden items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted lg:flex"
      title={live ? "La ronda está en curso" : "La ronda sale a las 21:00"}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${live ? "bg-amber" : "bg-line"}`}
      />
      {live ? "En ronda" : "En silencio"}
    </span>
  );
}
