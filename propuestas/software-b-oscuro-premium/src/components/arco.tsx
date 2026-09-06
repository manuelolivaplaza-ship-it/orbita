"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { obras } from "@/lib/obra";
import { cn } from "@/lib/utils";

const CX = 340;
const CY = 92;
const R = 268;
const VIEW_W = 640;
const VIEW_H = 430;
const MIN = 16;
const MAX = 86;

type Mira = {
  deg: number;
  slug: string;
  name: string;
  place: string;
  line: string;
};

const MIRAS: Mira[] = obras.map((obra, i) => ({
  deg: [28, 47, 62, 78][i] ?? 28,
  slug: obra.slug,
  name: obra.name,
  place: obra.location,
  line: obra.headline,
}));

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function thetaOf(alt: number) {
  return 220 + ((alt - MIN) / (MAX - MIN)) * 100;
}

function point(alt: number, radius = R) {
  const t = (thetaOf(alt) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(t),
    y: CY - radius * Math.sin(t),
  };
}

function altFromPoint(x: number, y: number) {
  const dx = x - CX;
  const dy = CY - y;
  let theta = (Math.atan2(dy, dx) * 180) / Math.PI;
  if (theta < 0) theta += 360;
  const alt = MIN + ((theta - 220) / 100) * (MAX - MIN);
  return clamp(alt, MIN, MAX);
}

function nearest(alt: number) {
  return MIRAS.reduce((best, mira) =>
    Math.abs(mira.deg - alt) < Math.abs(best.deg - alt) ? mira : best,
  );
}

function arcPath(r: number) {
  const a = point(MIN, r);
  const b = point(MAX, r);
  return `M ${a.x} ${a.y} A ${r} ${r} 0 0 1 ${b.x} ${b.y}`;
}

export function Arco({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef(false);
  const [alt, setAlt] = useState(28);
  const [active, setActive] = useState(MIRAS[0]);
  const [dragging, setDragging] = useState(false);
  const [reduce, setReduce] = useState(false);
  const labelId = useId();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(media.matches);
    if (media.matches) return;
    let frame = 0;
    const from = 16;
    const to = 28;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 720);
      const eased = 1 - Math.pow(1 - t, 3);
      setAlt(from + (to - from) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const toSvg = useCallback((clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    return {
      x: ((clientX - rect.left) / rect.width) * VIEW_W,
      y: ((clientY - rect.top) / rect.height) * VIEW_H,
    };
  }, []);

  const move = useCallback(
    (clientX: number, clientY: number) => {
      const p = toSvg(clientX, clientY);
      if (!p) return;
      const next = altFromPoint(p.x, p.y);
      setAlt(next);
      setActive(nearest(next));
    },
    [toSvg],
  );

  const end = useCallback(() => {
    if (!drag.current) return;
    drag.current = false;
    setDragging(false);
    setAlt((current) => {
      const mira = nearest(current);
      setActive(mira);
      return mira.deg;
    });
  }, []);

  useEffect(() => {
    const up = () => end();
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [end]);

  const arm = point(alt);
  const ticks = Array.from({ length: 15 }, (_, i) => MIN + i * 5);

  function onKey(event: React.KeyboardEvent<SVGSVGElement>) {
    const index = MIRAS.findIndex((mira) => mira.slug === active.slug);
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      const mira = MIRAS[Math.min(MIRAS.length - 1, index + 1)];
      setActive(mira);
      setAlt(mira.deg);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      const mira = MIRAS[Math.max(0, index - 1)];
      setActive(mira);
      setAlt(mira.deg);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setActive(MIRAS[0]);
      setAlt(MIRAS[0].deg);
    }
    if (event.key === "End") {
      event.preventDefault();
      const mira = MIRAS[MIRAS.length - 1];
      setActive(mira);
      setAlt(mira.deg);
    }
  }

  return (
    <figure className={cn("select-none", className)}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="slider"
        tabIndex={0}
        aria-labelledby={labelId}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={Math.round(alt)}
        aria-valuetext={`${Math.round(alt)} grados · ${active.name}`}
        className="h-auto w-full touch-none cursor-grab active:cursor-grabbing outline-offset-4"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          drag.current = true;
          setDragging(true);
          move(event.clientX, event.clientY);
        }}
        onPointerMove={(event) => {
          if (!drag.current) return;
          move(event.clientX, event.clientY);
        }}
        onKeyDown={onKey}
      >
        <line
          x1="48"
          y1={CY}
          x2="592"
          y2={CY}
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
        <text
          x="52"
          y={CY - 8}
          fill="currentColor"
          opacity="0.4"
          fontSize="9"
          fontFamily="var(--font-mono), ui-monospace, monospace"
          letterSpacing="1.6"
        >
          HORIZONTE
        </text>

        <path
          d={arcPath(R + 10)}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d={arcPath(R)}
          fill="none"
          stroke="#e6dfd0"
          strokeWidth="7"
          strokeLinecap="butt"
        />
        <path
          d={arcPath(R)}
          fill="none"
          stroke="#090a0c"
          strokeWidth="1.15"
          strokeOpacity="0.35"
        />

        {ticks.map((tick) => {
          const outer = point(tick, R + 14);
          const inner = point(tick, tick % 10 === 0 ? R - 16 : R - 9);
          const label = point(tick, R + 28);
          return (
            <g key={tick}>
              <line
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke="#e6dfd0"
                strokeWidth={tick % 10 === 0 ? 1.4 : 0.8}
                strokeOpacity={tick % 10 === 0 ? 0.9 : 0.45}
              />
              {tick % 10 === 0 ? (
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#b7ad98"
                  fontSize="10"
                  fontFamily="var(--font-mono), ui-monospace, monospace"
                >
                  {tick}
                </text>
              ) : null}
            </g>
          );
        })}

        {MIRAS.map((mira) => {
          const p = point(mira.deg, R - 28);
          const on = mira.slug === active.slug;
          return (
            <circle
              key={mira.slug}
              cx={p.x}
              cy={p.y}
              r={on ? 4.2 : 2.6}
              fill={on ? "#b24a3c" : "#e6dfd0"}
              opacity={on ? 1 : 0.55}
            />
          );
        })}

        <line
          x1={CX}
          y1={CY}
          x2={arm.x}
          y2={arm.y}
          stroke="#e6dfd0"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{
            transition: dragging || reduce ? "none" : "all 160ms var(--ease)",
          }}
        />
        <circle cx={CX} cy={CY} r="5.5" fill="#e6dfd0" />
        <circle cx={CX} cy={CY} r="2.2" fill="#090a0c" />
        <circle
          cx={arm.x}
          cy={arm.y}
          r="6"
          fill="#090a0c"
          stroke="#e6dfd0"
          strokeWidth="1.6"
        />
        <rect
          x={CX + 18}
          y={CY - 11}
          width="36"
          height="10"
          rx="1"
          fill="none"
          stroke="#e6dfd0"
          strokeOpacity="0.55"
          strokeWidth="1"
        />
      </svg>

      <figcaption id={labelId} className="mt-5 grid gap-1 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-6">
        <p className="font-display text-[2.6rem] font-semibold leading-none tracking-[-0.04em] tabular">
          {Math.round(alt)}
          <span className="ml-1 text-[1.05rem] tracking-normal text-niebla">
            °
          </span>
        </p>
        <div>
          <p className="kicker">
            {active.name} · {active.place}
          </p>
          <p className="mt-1 max-w-[34ch] text-[1.02rem] leading-snug text-marfil-dim">
            {active.line}{" "}
            <Link href={`/obra/${active.slug}`} className="link-line text-marfil">
              Ver la obra
            </Link>
          </p>
        </div>
      </figcaption>
      <p className="mt-3 text-[0.8rem] leading-relaxed text-niebla">
        Arrastre el alidada — o use las flechas — para tomar las cuatro miras.
      </p>
    </figure>
  );
}
