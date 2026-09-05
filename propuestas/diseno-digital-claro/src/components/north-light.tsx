"use client";

import { useEffect } from "react";

export function NorthLight() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    const onScroll = () => {
      const max = root.scrollHeight - root.clientHeight;
      const progress = max > 0 ? root.scrollTop / max : 0;
      root.style.setProperty("--scroll", progress.toFixed(4));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (reduce) {
      return () => window.removeEventListener("scroll", onScroll);
    }

    let x = window.innerWidth * 0.62;
    let y = 90;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      tx = event.clientX;
      ty = Math.min(event.clientY, window.innerHeight * 0.5);
    };

    const tick = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      root.style.setProperty("--nx", `${x}px`);
      root.style.setProperty("--ny", `${y}px`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="north-light" aria-hidden />
      <div className="grain" aria-hidden />
      <div className="read-progress" aria-hidden />
    </>
  );
}
