"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Phase = "idle" | "in" | "out";

export function Lamp() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!running) {
      setPhase("idle");
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("in");
      return;
    }

    setPhase("in");
    let cancelled = false;
    let timer = 0;
    let count = 0;

    const loop = (next: Phase) => {
      if (cancelled) return;
      setPhase(next);
      const duration = next === "in" ? 4000 : 6000;
      timer = window.setTimeout(() => {
        if (next === "out") {
          count += 1;
          setCycles(count);
        }
        loop(next === "in" ? "out" : "in");
      }, duration);
    };

    loop("in");
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [running]);

  const label =
    phase === "in" ? "Cuatro hacia adentro" : phase === "out" ? "Seis hacia afuera" : "Un minuto";

  return (
    <div className="flex flex-col items-center text-center">
      <button
        type="button"
        onClick={() => setRunning((value) => !value)}
        aria-pressed={running}
        className="group relative grid h-56 w-56 place-items-center md:h-72 md:w-72"
      >
        <span
          className={cn(
            "lamp-core absolute inset-6 rounded-full bg-amber/25 blur-2xl",
            running && phase === "in" && "opacity-80",
          )}
          aria-hidden="true"
        />
        <span
          className="absolute inset-10 rounded-full border border-amber/40"
          aria-hidden="true"
        />
        <span className="relative font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
          {running ? "Detener" : "Encender"}
        </span>
      </button>
      <p className="mt-6 font-display text-3xl font-semibold tracking-tight">
        {label}
      </p>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper-dim">
        Cuatro segundos hacia adentro. Seis hacia afuera. El sitio lo hace
        solo; tú, si quieres, te sumas. No es terapia. Es un segundo.
      </p>
      {cycles > 0 ? (
        <p className="mt-4 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted">
          {cycles} {cycles === 1 ? "ciclo" : "ciclos"}
        </p>
      ) : null}
    </div>
  );
}
