import Link from "next/link";
import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <rect
        x="4"
        y="10"
        width="24"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="16" cy="17" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
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
      className={cn("group flex items-center gap-3", className)}
      aria-label="Bazar Austral, inicio"
    >
      <Mark className="text-bronce transition-transform duration-700 group-hover:rotate-90" />
      <span className="font-display text-[1.35rem] leading-none tracking-[0.18em]">
        BAZAR
      </span>
      {!compact ? (
        <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.28em] text-current/55 sm:inline">
          Austral
        </span>
      ) : null}
    </Link>
  );
}
