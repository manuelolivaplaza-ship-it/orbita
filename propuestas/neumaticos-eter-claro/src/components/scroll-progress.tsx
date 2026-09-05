"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const c = 2 * Math.PI * 14;
  const offset = c * (1 - p);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-30 hidden md:block">
      <svg viewBox="0 0 36 36" className="h-9 w-9 -rotate-90 text-goma" aria-hidden="true">
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          className="opacity-20"
        />
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
}
