"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import {
  WEEKDAY_CURVE,
  WEEKEND_CURVE,
  coefficient,
  extrema,
  sampleCurve,
  tideState,
} from "@/lib/tide";
import { cn, formatHour, santiagoParts } from "@/lib/utils";

const VB = { w: 240, h: 92, padX: 8, padTop: 10, padBot: 18 };

function curvePoints(curve: readonly number[]) {
  const innerW = VB.w - VB.padX * 2;
  const innerH = VB.h - VB.padTop - VB.padBot;
  return curve.map((value, i) => {
    const x = VB.padX + (i / (curve.length - 1)) * innerW;
    const y = VB.padTop + (1 - value) * innerH;
    return { x, y, value };
  });
}

function toSmoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)}`;
  for (let i = 0; i < pts.length - 1; i += 1) {
    const p0 = pts[i === 0 ? 0 : i - 1];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return d;
}

function hourFromClientX(
  clientX: number,
  rect: DOMRect,
) {
  const x = clientX - rect.left;
  const innerW = rect.width * ((VB.w - VB.padX * 2) / VB.w);
  const origin = rect.width * (VB.padX / VB.w);
  const t = (x - origin) / innerW;
  return Math.min(23.99, Math.max(0, t * 23));
}

const STATIC_HOURS = [
  { hour: 3, label: "03:00" },
  { hour: 11, label: "11:00" },
  { hour: 15, label: "15:00" },
  { hour: 18, label: "18:00" },
] as const;

export function TideTable({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const dragging = useRef(false);
  const lockedRef = useRef(false);
  const labelId = useId();
  const [ready, setReady] = useState(false);
  const [weekend, setWeekend] = useState(false);
  const [nowHour, setNowHour] = useState(11);
  const [hour, setHour] = useState(11);
  const [locked, setLocked] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    lockedRef.current = locked;
  }, [locked]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(reduce.matches);
    const onReduce = () => setReduced(reduce.matches);
    reduce.addEventListener("change", onReduce);

    const tick = () => {
      const s = santiagoParts();
      setWeekend(s.isWeekend);
      setNowHour(s.decimal);
      if (!lockedRef.current) setHour(s.decimal);
      setReady(true);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => {
      window.clearInterval(id);
      reduce.removeEventListener("change", onReduce);
    };
  }, []);

  const curve = weekend ? WEEKEND_CURVE : WEEKDAY_CURVE;
  const value = sampleCurve(curve, hour);
  const coef = coefficient(value);
  const state = tideState(hour, weekend);
  const marks = extrema(curve);
  const pts = curvePoints(curve);
  const line = toSmoothPath(pts);
  const area =
    line +
    ` L ${pts[pts.length - 1].x.toFixed(2)} ${(VB.h - VB.padBot).toFixed(2)} L ${pts[0].x.toFixed(2)} ${(VB.h - VB.padBot).toFixed(2)} Z`;

  const innerW = VB.w - VB.padX * 2;
  const cursorX = VB.padX + (hour / 23) * innerW;
  const cursorY =
    VB.padTop + (1 - Math.min(1, Math.max(0, value))) * (VB.h - VB.padTop - VB.padBot);

  const moveTo = useCallback((clientX: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const next = hourFromClientX(clientX, svg.getBoundingClientRect());
    setHour(next);
    setLocked(true);
  }, []);

  function onPointerDown(event: PointerEvent<SVGSVGElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = true;
    moveTo(event.clientX);
  }

  function onPointerMove(event: PointerEvent<SVGSVGElement>) {
    if (!dragging.current) return;
    moveTo(event.clientX);
  }

  function onPointerUp(event: PointerEvent<SVGSVGElement>) {
    dragging.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function onKeyDown(event: KeyboardEvent<SVGSVGElement>) {
    const step = event.shiftKey ? 1 : 0.25;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setLocked(true);
      setHour((h) => Math.max(0, h - step));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setLocked(true);
      setHour((h) => Math.min(23.99, h + step));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setLocked(true);
      setHour(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      setLocked(true);
      setHour(23.99);
    }
  }

  if (reduced) {
    return (
      <div className={cn("border border-line bg-foam", className)}>
        <div className="flex items-end justify-between gap-4 border-b border-line px-5 py-4">
          <p className="mark">Tabla de mareas · atención Chile</p>
          <p className="font-mono nums text-[13px] text-muted">
            {weekend ? "Sábado–domingo" : "Lunes–viernes"}
          </p>
        </div>
        <ol>
          {STATIC_HOURS.map((row) => {
            const v = sampleCurve(curve, row.hour);
            const st = tideState(row.hour, weekend);
            return (
              <li
                key={row.label}
                className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[4.5rem_6.5rem_1fr]"
              >
                <p className="font-mono nums text-[15px]">{row.label}</p>
                <p className="font-mono nums text-[15px] text-cyan-deep">
                  {coefficient(v)} · {st.name}
                </p>
                <p className="col-span-2 text-[14px] leading-relaxed text-muted sm:col-span-1">
                  {st.line}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  return (
    <div className={cn("border border-line bg-foam", className)}>
      <div className="flex flex-wrap items-end justify-between gap-3 px-5 pt-5 pb-3 sm:px-6">
        <div>
          <p className="mark" id={labelId}>
            Tabla de mareas · atención Chile
          </p>
          <p className="font-display mt-2 nums text-[2.4rem] leading-none tracking-tight sm:text-[2.8rem]">
            {ready ? formatHour(hour) : "—:—"}
            <span className="ml-3 font-sans text-[0.95rem] tracking-normal text-muted">
              {state.name}
            </span>
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono nums text-[0.7rem] tracking-[0.14em] text-muted uppercase">
            Coeficiente
          </p>
          <p className="font-mono nums text-[2rem] leading-none text-cyan-deep">
            {ready ? coef : "—"}
          </p>
        </div>
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        className="block h-[220px] w-full cursor-ew-resize touch-none select-none sm:h-[260px]"
        role="slider"
        tabIndex={0}
        aria-labelledby={labelId}
        aria-valuemin={0}
        aria-valuemax={24}
        aria-valuenow={Math.round(hour * 4) / 4}
        aria-valuetext={`${formatHour(hour)}, coeficiente ${coef}, ${state.name}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        <rect width={VB.w} height={VB.h} fill="var(--foam)" />
        {[0, 6, 12, 18, 23].map((h) => {
          const x = VB.padX + (h / 23) * innerW;
          return (
            <g key={h}>
              <line
                x1={x}
                x2={x}
                y1={VB.padTop}
                y2={VB.h - VB.padBot}
                stroke="var(--line)"
                strokeWidth="0.4"
              />
              <text
                x={x}
                y={VB.h - 6}
                textAnchor="middle"
                fill="var(--muted)"
                fontSize="4.6"
                fontFamily="IBM Plex Mono, ui-monospace, monospace"
              >
                {String(h).padStart(2, "0")}h
              </text>
            </g>
          );
        })}
        <path
          d={area}
          fill="var(--cyan)"
          fillOpacity="0.22"
          className="tide-draw"
        />
        <path
          d={line}
          fill="none"
          stroke="var(--cyan-deep)"
          strokeWidth="1.35"
          className="tide-draw"
        />
        <line
          x1={VB.padX + (marks.pleamar / 23) * innerW}
          x2={VB.padX + (marks.pleamar / 23) * innerW}
          y1={VB.padTop}
          y2={VB.h - VB.padBot}
          stroke="var(--blue)"
          strokeWidth="0.45"
          strokeDasharray="1.4 1.4"
        />
        {ready ? (
          <>
            <line
              x1={cursorX}
              x2={cursorX}
              y1={VB.padTop - 2}
              y2={VB.h - VB.padBot}
              stroke="var(--navy)"
              strokeWidth="0.7"
            />
            <circle
              cx={cursorX}
              cy={cursorY}
              r="2.4"
              fill="var(--foam)"
              stroke="var(--blue)"
              strokeWidth="1.2"
            />
          </>
        ) : null}
      </svg>

      <div className="grid gap-4 border-t border-line px-5 py-5 sm:grid-cols-12 sm:px-6">
        <p className="text-[15px] leading-relaxed text-muted sm:col-span-7">
          {state.line}
        </p>
        <div className="sm:col-span-5 sm:text-right">
          <p className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
            Canal de esta hora
          </p>
          <p className="mt-1 text-[15px] font-medium">{state.channel}</p>
          <div className="mt-3 flex flex-wrap gap-3 sm:justify-end">
            {locked ? (
              <button
                type="button"
                onClick={() => {
                  setLocked(false);
                  setHour(nowHour);
                }}
                className="font-mono text-[11px] tracking-[0.08em] text-blue uppercase link-line"
              >
                Volver a ahora
              </button>
            ) : (
              <p className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
                Arrastre la hora · Chile
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
