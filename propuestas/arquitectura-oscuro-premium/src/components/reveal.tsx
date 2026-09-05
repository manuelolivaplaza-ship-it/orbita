"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "reveal",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "reveal" | "img-mask";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => node.classList.add("is-in");
    const fallback = window.setTimeout(reveal, 1200);
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.2) {
      window.clearTimeout(fallback);
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(fallback);
          reveal();
          observer.unobserve(node);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 50% 0px" },
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${variant} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
