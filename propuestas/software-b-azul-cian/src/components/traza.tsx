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
import { type Span, type Trace } from "@/lib/traces";
import { cn } from "@/lib/utils";

function santiagoNow() {
  return new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function prefersReduce() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Traza({
  trace,
  className,
  autoPlay = true,
}: {
  trace: Trace;
  className?: string;
  autoPlay?: boolean;
}) {
  const labelId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef(false);
  const raf = useRef<number>(0);
  const last = useRef<number>(0);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [selected, setSelected] = useState<Span>(trace.spans[0]);
  const [typed, setTyped] = useState(trace.spans[0].detail);
  const [clock, setClock] = useState("—:—:—");
  const [reduce, setReduce] = useState(false);
  const [inView, setInView] = useState(true);

  const total = trace.total;
  const spans = trace.spans;

  const commitTime = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total, next));
      timeRef.current = clamped;
      setTime(clamped);
      const current =
        [...spans].reverse().find((span) => span.start <= clamped) ?? spans[0];
      setSelected((prev) => (prev.id === current.id ? prev : current));
      if (clamped >= total) setPlaying(false);
    },
    [spans, total],
  );

  useEffect(() => {
    const reduced = prefersReduce();
    setReduce(reduced);
    if (reduced || !autoPlay) {
      commitTime(total);
      setPlaying(false);
      return;
    }
    commitTime(0);
    setPlaying(true);
  }, [autoPlay, commitTime, total, trace.id]);

  useEffect(() => {
    setSelected(trace.spans[0]);
    setTyped(prefersReduce() ? trace.spans[0].detail : "");
  }, [trace]);

  useEffect(() => {
    const tick = () => setClock(santiagoNow());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const node = trackRef.current?.closest(".instrument");
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.25),
      { threshold: [0, 0.25, 0.6] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || reduce || !inView) {
      last.current = 0;
      return;
    }
    const speed = total / 7200;
    const loop = (now: number) => {
      if (!last.current) last.current = now;
      const dt = now - last.current;
      last.current = now;
      commitTime(timeRef.current + dt * speed);
      if (timeRef.current < total) raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, [playing, reduce, inView, commitTime, total]);

  useEffect(() => {
    if (reduce) {
      setTyped(selected.detail);
      return;
    }
    setTyped("");
    let i = 0;
    const text = selected.detail;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 12);
    return () => window.clearInterval(id);
  }, [selected, reduce]);

  function timeFromClientX(clientX: number) {
    const node = trackRef.current;
    if (!node) return 0;
    const rect = node.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    return ratio * total;
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    drag.current = true;
    setPlaying(false);
    event.currentTarget.setPointerCapture(event.pointerId);
    commitTime(timeFromClientX(event.clientX));
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    commitTime(timeFromClientX(event.clientX));
  }

  function onPointerUp() {
    drag.current = false;
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === " ") {
      event.preventDefault();
      setPlaying((value) => {
        if (timeRef.current >= total) commitTime(0);
        return !value;
      });
    }
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const index = spans.findIndex((span) => span.id === selected.id);
      const next =
        event.key === "ArrowRight"
          ? spans[Math.min(spans.length - 1, index + 1)]
          : spans[Math.max(0, index - 1)];
      setPlaying(false);
      setSelected(next);
      commitTime(next.start);
    }
  }

  const progress = (time / total) * 100;
  const live = `${selected.service}.${selected.op} · ${selected.duration} ms`;

  return (
    <div
      className={cn("instrument", className)}
      role="region"
      aria-labelledby={labelId}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-5">
        <div className="min-w-0">
          <p id={labelId} className="font-mono text-[0.68rem] tracking-[0.14em] text-cian uppercase">
            Traza · {trace.id}
          </p>
          <p className="mt-1 truncate font-display text-[1.15rem] font-semibold tracking-[-0.03em] text-white">
            {trace.title}
            <span className="ml-2 font-mono text-[0.72rem] font-normal tracking-normal text-[#8eacbe]">
              {trace.subject}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-4 font-mono text-[0.72rem] text-[#8eacbe]">
          <p className="nums">
            {Math.round(time)}
            <span className="text-white/40"> / {total} ms</span>
          </p>
          <p className="nums hidden sm:block">{clock} SCL</p>
          <button
            type="button"
            className="rounded-md border border-white/15 px-3 py-1.5 text-[0.7rem] tracking-[0.12em] text-white uppercase transition-colors duration-200 hover:border-cian hover:text-cian"
            onClick={() => {
              if (timeRef.current >= total) commitTime(0);
              setPlaying((value) => !value);
            }}
            aria-pressed={playing}
          >
            {playing ? "Pausa" : "Reproducir"}
          </button>
        </div>
      </div>

      <div
        className="flex gap-3 px-4 pt-4 pb-2 md:gap-4 md:px-5"
        onKeyDown={onKeyDown}
        tabIndex={0}
        aria-label="Waterfall de spans. Espacio para reproducir, flechas para cambiar de span."
      >
        <ol className="flex w-[6.6rem] shrink-0 flex-col gap-1 sm:w-[8.2rem]">
          {spans.map((span) => (
            <li
              key={span.id}
              className="flex h-8 items-center truncate font-mono text-[0.62rem] tracking-[0.04em] text-[#8eacbe]"
            >
              {span.service}
            </li>
          ))}
        </ol>
        <div
          ref={trackRef}
          className="relative min-w-0 flex-1 touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {!reduce ? (
            <div className="playhead" style={{ left: `${progress}%` }} />
          ) : null}
          <ol className="flex flex-col gap-1">
            {spans.map((span) => {
              const left = (span.start / total) * 100;
              const width = Math.max((span.duration / total) * 100, 3.2);
              const dim = !reduce && span.start > time;
              const active = selected.id === span.id;
              return (
                <li key={span.id} className="relative h-8 rounded-sm bg-white/5">
                  <button
                    type="button"
                    className="instrument-span"
                    style={{ left: `${left}%`, width: `${width}%` }}
                    data-status={span.status}
                    data-active={active}
                    data-dim={dim}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation();
                      setPlaying(false);
                      setSelected(span);
                      commitTime(span.start);
                    }}
                    aria-pressed={active}
                    aria-label={`${span.service} ${span.op}, ${span.duration} milisegundos${span.status === "warn" ? ", con alerta" : ""}`}
                  />
                </li>
              );
            })}
          </ol>
          <div className="mt-3 flex justify-between font-mono text-[0.62rem] tracking-[0.08em] text-[#6f8ea3]">
            <span>0 ms</span>
            <span className="nums">{Math.round(total / 2)} ms</span>
            <span className="nums">{total} ms</span>
          </div>
        </div>
      </div>

      <div
        className="border-t border-white/10 px-4 py-4 md:px-5 md:py-5"
        aria-live="polite"
      >
        <p className="font-mono text-[0.68rem] tracking-[0.12em] text-cian uppercase">
          {live}
          {selected.status === "warn" ? " · warn" : ""}
        </p>
        <p className="mt-2 min-h-[4.4em] max-w-3xl text-[0.95rem] leading-relaxed text-[#d7e8f2]">
          {typed}
          {!reduce && typed.length < selected.detail.length ? (
            <span className="ml-0.5 inline-block h-3 w-[7px] translate-y-px bg-cian" />
          ) : null}
        </p>
        <p className="caption mt-3 text-[#6f8ea3] normal-case tracking-[0.06em]">
          {trace.place}
        </p>
      </div>
    </div>
  );
}
