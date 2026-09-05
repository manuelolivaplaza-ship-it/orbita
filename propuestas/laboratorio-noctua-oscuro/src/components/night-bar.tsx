"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import {
  labPhase,
  moonPhaseName,
  phaseLabel,
  samplesInFlight,
  santiagoParts,
  type LabPhase,
} from "@/lib/night";

export function NightBar() {
  const [state, setState] = useState<{
    time: string;
    phase: LabPhase;
    moon: string;
    samples: number;
  } | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setState({
        time: santiagoParts(now).time,
        phase: labPhase(now),
        moon: moonPhaseName(now),
        samples: samplesInFlight(now),
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
        <p className="flex flex-wrap items-center gap-3">
          <span>Santiago · {state?.time ?? "—:—"}</span>
          <span className="hidden text-line sm:inline">/</span>
          <span className={state?.phase !== "silencio" ? "text-amber" : undefined}>
            {state ? phaseLabel(state.phase) : "—"}
          </span>
          <span className="hidden text-line md:inline">/</span>
          <span className="hidden md:inline">
            {state ? `${state.samples} muestras en curso` : "—"}
          </span>
          <span className="hidden text-line lg:inline">/</span>
          <span className="hidden lg:inline">Luna {state?.moon ?? "—"}</span>
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
  const [phase, setPhase] = useState<LabPhase | null>(null);

  useEffect(() => {
    const tick = () => setPhase(labPhase());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (phase === null) return null;

  return (
    <span
      className="hidden items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted lg:flex"
      title={phaseLabel(phase)}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          phase === "silencio" ? "bg-line" : "bg-amber"
        }`}
      />
      {phaseLabel(phase)}
    </span>
  );
}
