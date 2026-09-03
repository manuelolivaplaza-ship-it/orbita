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
      aria-label="Estuario, inicio"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <svg viewBox="0 0 36 36" className="size-8" aria-hidden>
        <path
          d="M4 18 C9 18 11 11 18 11 C25 11 27 18 32 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={onDark ? "text-primary-foreground/90" : "text-river"}
        />
        <path
          d="M4 18 C9 18 11 25 18 25 C25 25 27 18 32 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={onDark ? "text-moss" : "text-moss"}
        />
        <circle
          cx="18"
          cy="18"
          r="1.6"
          className={onDark ? "fill-primary-foreground" : "fill-river"}
        />
      </svg>
      <span
        className={cn(
          "font-sans text-[0.95rem] font-medium tracking-[0.28em] uppercase",
          onDark ? "text-primary-foreground" : "text-foreground"
        )}
      >
        Estuario
      </span>
    </Link>
  );
}
