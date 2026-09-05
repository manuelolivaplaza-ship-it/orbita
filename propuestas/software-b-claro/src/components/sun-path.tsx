"use client";

import { useEffect, useMemo, useState } from "react";
import {
  dayPath,
  formatSantiago,
  northLit,
  santiagoParts,
  solarPosition,
  type DayPath,
} from "@/lib/solar";
import { cn } from "@/lib/utils";

type Live = {
  elevation: number;
  azimuth: number;
  lit: boolean;
  time: string;
  moment: string;
  path: DayPath;
};

function readLive(): Live {
  const now = new Date();
  const pos = solarPosition(now);
  const parts = santiagoParts(now);
  return {
    elevation: pos.elevation,
    azimuth: pos.azimuth,
    lit: northLit(pos),
    time: parts.time,
    moment: parts.moment,
    path: dayPath(now),
  };
}

function polar(elevation: number, azimuth: number, r = 78) {
  const t = ((90 - azimuth) * Math.PI) / 180;
  const p = ((90 - Math.max(elevation, 0)) / 90) * r;
  return { x: 100 + p * Math.cos(t), y: 100 - p * Math.sin(t) };
}

export function SunPath({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [live, setLive] = useState<Live | null>(null);

  useEffect(() => {
    const tick = () => setLive(readLive());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const arc = useMemo(() => {
    if (!live) return "";
    const pts = live.path.samples
      .filter((s) => s.elevation > -0.8)
      .map((s) => polar(s.elevation, s.azimuth));
    if (pts.length < 2) return "";
    return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  }, [live]);

  const sun = live ? polar(Math.max(live.elevation, 0), live.azimuth) : { x: 100, y: 100 };
  const up = live ? live.elevation > 0 : true;

  return (
    <div className={cn("text-ink", className)}>
      <div className={cn("grid items-center gap-6", compact ? "grid-cols-[auto_1fr]" : "")}>
        <svg
          viewBox="0 0 200 200"
          className={compact ? "h-28 w-28" : "h-44 w-44 md:h-52 md:w-52"}
          role="img"
          aria-label="Trayectoria solar de hoy sobre Providencia"
        >
          <circle
            cx="100"
            cy="100"
            r="78"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.12"
          />
          <circle
            cx="100"
            cy="100"
            r="39"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.08"
          />
          <line
            x1="100"
            y1="18"
            x2="100"
            y2="182"
            stroke="currentColor"
            className="text-norte"
            strokeWidth="1"
          />
          <path
            d={arc || "M100,100"}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeOpacity="0.55"
          />
          <circle
            cx={sun.x}
            cy={sun.y}
            r={up ? 5.5 : 3.5}
            fill={up ? "#d63a2f" : "currentColor"}
            opacity={up ? 1 : 0.35}
          />
          <text
            x="100"
            y="14"
            textAnchor="middle"
            className="fill-muted"
            fontSize="8"
            fontFamily="IBM Plex Mono, monospace"
          >
            N
          </text>
        </svg>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[0.72rem] tracking-[0.06em] uppercase text-muted">
          <div>
            <dt>Hora Santiago</dt>
            <dd className="mt-1 font-sans text-[1.05rem] font-semibold tracking-[-0.03em] text-ink normal-case">
              {live ? `${live.time} · ${live.moment}` : "—"}
            </dd>
          </div>
          <div>
            <dt>Elevación</dt>
            <dd className="mt-1 font-sans text-[1.05rem] font-semibold tracking-[-0.03em] text-ink normal-case">
              {live ? `${live.elevation.toFixed(0)}°` : "—"}
            </dd>
          </div>
          <div>
            <dt>Azimut</dt>
            <dd className="mt-1 font-sans text-[1.05rem] font-semibold tracking-[-0.03em] text-ink normal-case">
              {live ? `${live.azimuth.toFixed(0)}°` : "—"}
            </dd>
          </div>
          <div>
            <dt>Fachada norte</dt>
            <dd className="mt-1 font-sans text-[1.05rem] font-semibold tracking-[-0.03em] text-ink normal-case">
              {live ? (live.lit ? "Asoleada" : "En sombra") : "—"}
            </dd>
          </div>
          {!compact && live?.path.noon ? (
            <div className="col-span-2">
              <dt>Cenit solar</dt>
              <dd className="mt-1 normal-case tracking-normal text-ink">
                {formatSantiago(live.path.noon, {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}{" "}
                · {live.path.noonElevation.toFixed(0)}°
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </div>
  );
}
