import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Cian, inicio"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-8 place-items-center" aria-hidden>
        <svg viewBox="0 0 32 32" className="size-8">
          <path
            d="M7 12.5c4.4-3.4 13.6-3.4 18 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            className={inverted ? "text-cian" : "text-primary"}
          />
          <path
            d="M6 18h20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-cian"
          />
          <circle
            cx="16"
            cy="18"
            r="1.65"
            className={inverted ? "fill-background" : "fill-navy"}
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-[1.28rem] leading-none tracking-[0.22em]",
          inverted ? "text-background" : "text-foreground"
        )}
      >
        CIAN
      </span>
    </Link>
  );
}
