"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setGone(true);
      return;
    }
    const t1 = window.setTimeout(() => setHide(true), 1100);
    const t2 = window.setTimeout(() => setGone(true), 1700);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
      style={{
        clipPath: hide ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
        transition: "clip-path 600ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-6">
        <span className="block h-16 w-px origin-center bg-brass" />
        <p className="font-display text-sm tracking-[0.42em] text-paper">UMBRAL</p>
      </div>
    </div>
  );
}
