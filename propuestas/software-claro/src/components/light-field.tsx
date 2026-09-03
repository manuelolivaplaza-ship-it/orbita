"use client";

import { useEffect } from "react";

export function LightField() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--lx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--ly", `${event.clientY}px`);
    };

    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const progress = max > 0 ? root.scrollTop / max : 0;
      root.style.setProperty("--scroll", progress.toFixed(4));
    };

    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="light-field" aria-hidden />
      <div className="grain" aria-hidden />
      <div className="read-progress" aria-hidden />
    </>
  );
}
