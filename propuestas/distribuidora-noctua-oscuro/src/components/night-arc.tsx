"use client";

import { useEffect, useState } from "react";
import { getVentana } from "@/data/catalog";
import { currentVentanaId, isRondaLive, santiagoParts } from "@/lib/night";

const CX = 100;
const CY = 100;
const R = 78;

function polar(hour: number, radius = R) {
  const angle = (hour / 24) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  };
}

function arcPath(fromHour: number, toHour: number, radius = R) {
  const start = polar(fromHour, radius);
  const end = polar(toHour, radius);
  const sweep = ((toHour - fromHour + 24) % 24) / 24;
  const large = sweep > 0.5 ? 1 : 0;
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${radius} ${radius} 0 ${large} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

const ticks = [0, 3, 6, 9, 12, 15, 18, 21];

export function NightArc({ className }: { className?: string }) {
  const [state, setState] = useState<{
    hour: number;
    time: string;
    live: boolean;
    label: string;
  } | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const parts = santiagoParts(now);
      const id = currentVentanaId(now);
      setState({
        hour: parts.hour + parts.minute / 60,
        time: parts.time,
        live: isRondaLive(now),
        label: id ? (getVentana(id)?.name ?? "Ronda") : "Silencio",
      });
    };
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  const hour = state?.hour ?? 21;
  const needle = polar(hour, R - 6);
  const hub = polar(hour, 18);

  return (
    <figure className={className}>
      <svg
        viewBox="0 0 200 200"
        role="img"
        aria-label={`Reloj de 24 horas. Ventana de ronda de 21:00 a 06:00. Ahora ${state?.time ?? "—"}, ${state?.label ?? "—"}.`}
        className="w-full max-w-[18rem]"
      >
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          className="text-line"
        />
        <path
          d={arcPath(21, 6)}
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          className="arc-sweep text-amber"
        />
        {ticks.map((h) => {
          const outer = polar(h, R + 4);
          const inner = polar(h, R - 5);
          const night = h >= 21 || h <= 6;
          return (
            <line
              key={h}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke="currentColor"
              strokeWidth={night ? 1.2 : 0.6}
              className={night ? "text-amber" : "text-muted"}
            />
          );
        })}
        {["21", "00", "03", "06"].map((label) => {
          const h = Number(label);
          const p = polar(h, R + 14);
          return (
            <text
              key={label}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              className="text-muted"
              style={{ fontSize: 7, letterSpacing: "0.12em" }}
            >
              {label}
            </text>
          );
        })}
        <line
          x1={hub.x}
          y1={hub.y}
          x2={needle.x}
          y2={needle.y}
          stroke="currentColor"
          strokeWidth="1.1"
          className="text-paper"
        />
        <circle cx={CX} cy={CY} r="2.2" fill="currentColor" className="text-amber" />
        <text
          x={CX}
          y={CY - 10}
          textAnchor="middle"
          fill="currentColor"
          className="text-paper"
          style={{ fontSize: 9, letterSpacing: "0.22em" }}
        >
          {(state?.label ?? "—").toUpperCase()}
        </text>
        <text
          x={CX}
          y={CY + 16}
          textAnchor="middle"
          fill="currentColor"
          className="text-muted"
          style={{ fontSize: 8, letterSpacing: "0.16em" }}
        >
          {state?.time ?? "—:—"}
        </text>
      </svg>
    </figure>
  );
}
