import Link from "next/link";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      aria-hidden="true"
      className={cn("text-copper", className)}
    >
      <circle cx="18" cy="20" r="6.2" fill="currentColor" />
      <path
        d="M7 20c0-6.075 4.925-11 11-11s11 4.925 11 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M6 27.5h24" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3 text-ink",
        className,
      )}
      aria-label="ALBA, ir al inicio"
    >
      <Mark className="h-8 w-8 transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.55rem] font-medium tracking-[-0.03em]">
          ALBA
        </span>
        {!compact ? (
          <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-ink-soft">
            Club de entrenamiento
          </span>
        ) : null}
      </span>
    </Link>
  );
}
