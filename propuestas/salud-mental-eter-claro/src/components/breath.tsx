"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const INHALE = 4000;
const EXHALE = 6000;
const CYCLE = INHALE + EXHALE;
const CYCLES = 6;

type Phase = "idle" | "inhale" | "exhale" | "done";

export function Breath() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [remaining, setRemaining] = useState(CYCLES);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  function clearTimers() {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }

  function start() {
    clearTimers();
    setRemaining(CYCLES);
    runCycle(CYCLES);
  }

  function runCycle(left: number) {
    if (left <= 0) {
      setPhase("done");
      return;
    }
    setPhase("inhale");
    const t1 = window.setTimeout(() => {
      setPhase("exhale");
    }, INHALE);
    const t2 = window.setTimeout(() => {
      setRemaining(left - 1);
      runCycle(left - 1);
    }, CYCLE);
    timers.current.push(t1, t2);
  }

  const label =
    phase === "idle"
      ? "El sitio también respira"
      : phase === "inhale"
        ? "Inhala"
        : phase === "exhale"
          ? "Exhala"
          : "Gracias por quedarte";

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative flex h-56 w-56 items-center justify-center md:h-72 md:w-72">
        <span
          className="absolute inset-0 rounded-full border border-sage/30"
          aria-hidden="true"
        />
        <span
          className={cn(
            "absolute inset-8 rounded-full border border-sage/50",
            phase === "idle" || phase === "done" ? "breath-ring" : "",
          )}
          style={
            phase === "inhale" || phase === "exhale"
              ? {
                  transition: `transform ${phase === "inhale" ? INHALE : EXHALE}ms ease-in-out`,
                  transform: phase === "inhale" ? "scale(1.18)" : "scale(0.86)",
                }
              : undefined
          }
          aria-hidden="true"
        />
        <span
          className="absolute inset-[4.5rem] rounded-full bg-sage/10 md:inset-24"
          aria-hidden="true"
        />
        <p
          className="relative z-10 max-w-[12ch] text-center font-display text-xl font-light italic leading-snug text-tinta-suave md:text-2xl"
          aria-live="polite"
        >
          {label}
        </p>
      </div>

      {phase === "idle" ? (
        <button
          type="button"
          onClick={start}
          className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sage-deep link-sage"
        >
          Respirar un minuto
        </button>
      ) : null}

      {phase === "inhale" || phase === "exhale" ? (
        <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris">
          {remaining} {remaining === 1 ? "ciclo" : "ciclos"}
        </p>
      ) : null}

      {phase === "done" ? (
        <button
          type="button"
          onClick={() => {
            setPhase("idle");
            setRemaining(CYCLES);
          }}
          className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris link-line"
        >
          Otra vez, cuando quieras
        </button>
      ) : null}
    </div>
  );
}
