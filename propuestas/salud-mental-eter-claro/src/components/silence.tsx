"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export function Silence() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.55 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setSecond(true);
      return;
    }
    const id = window.setTimeout(() => setSecond(true), 1800);
    return () => window.clearTimeout(id);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center bg-papel"
    >
      <div className="shell text-center">
        <p
          className={cn(
            "font-display text-[clamp(2.4rem,6vw,5.6rem)] font-light italic leading-[0.95] tracking-tight transition-opacity duration-1000",
            inView ? "opacity-100" : "opacity-0",
          )}
        >
          Quédate un segundo.
        </p>
        <p
          className={cn(
            "mt-8 font-display text-2xl font-light text-tinta-suave transition-opacity duration-[1400ms] md:text-3xl",
            second ? "opacity-100" : "opacity-0",
          )}
        >
          Nadie te va a apurar.
        </p>
      </div>
    </section>
  );
}
