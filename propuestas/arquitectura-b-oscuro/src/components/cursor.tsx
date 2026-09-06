"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.body.classList.add("has-cursor");
    const el = dot.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let scale = 1;
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const hit = target?.closest("a, button, [data-cursor]");
      scale = hit ? 2.4 : 1;
      el.classList.toggle("is-link", Boolean(hit));
    };

    const tick = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dot} className="cursor-dot" aria-hidden />;
}
