"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const wrap = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || motion || !wrap.current) return;

    wrap.current.dataset.on = "true";
    document.body.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let hover = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      hover = Boolean(t?.closest("a, button, [data-cursor='gold']"));
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      }
      if (ring.current) {
        const size = hover ? 52 : 28;
        ring.current.style.width = `${size}px`;
        ring.current.style.height = `${size}px`;
        ring.current.style.transform = `translate3d(${rx - size / 2}px, ${ry - size / 2}px, 0)`;
        ring.current.style.borderColor = hover
          ? "rgba(196, 164, 106, 0.9)"
          : "rgba(237, 230, 214, 0.45)";
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrap}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden data-[on=true]:block"
    >
      <div
        ref={dot}
        className="absolute h-[6px] w-[6px] rounded-full bg-ivory mix-blend-difference"
      />
      <div
        ref={ring}
        className="absolute rounded-full border border-ivory/40 transition-[width,height,border-color] duration-300 ease-out"
      />
    </div>
  );
}
