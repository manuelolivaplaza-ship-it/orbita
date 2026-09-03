import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  onLight = true,
}: {
  className?: string;
  onLight?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Alba, inicio"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-8 place-items-center">
        <svg
          viewBox="0 0 32 32"
          className="size-8"
          aria-hidden
        >
          <path
            d="M6 22c0-5.5 4.5-10 10-10s10 4.5 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={onLight ? "text-primary" : "text-primary-foreground"}
          />
          <circle
            cx="16"
            cy="22"
            r="1.7"
            className="fill-clay"
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-[1.35rem] leading-none tracking-[0.18em]",
          onLight ? "text-foreground" : "text-primary-foreground"
        )}
      >
        ALBA
      </span>
    </Link>
  );
}
