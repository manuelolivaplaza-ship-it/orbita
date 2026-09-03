import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Bruma, inicio"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden>
        <path
          d="M5 20.5c4.2-3.2 8.4-3.2 11 0 2.6 3.2 6.8 3.2 11 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          className={onDark ? "text-primary-foreground/90" : "text-primary"}
        />
        <ellipse
          cx="16"
          cy="13.2"
          rx="2.15"
          ry="3.1"
          className={onDark ? "fill-lagoon" : "fill-lagoon"}
        />
      </svg>
      <span
        className={cn(
          "font-display text-[1.45rem] leading-none tracking-[0.22em]",
          onDark ? "text-primary-foreground" : "text-foreground"
        )}
      >
        BRUMA
      </span>
    </Link>
  );
}
