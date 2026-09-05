import Link from "next/link";
import { Mark } from "@/components/mark";
import { cn } from "@/lib/cn";

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
      aria-label="ETER, inicio"
    >
      <Mark className="h-5 w-5" />
      <span className="font-display text-[1.45rem] font-light leading-none tracking-[0.38em]">
        ETER
      </span>
      {!compact ? (
        <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.26em] text-current/55 sm:inline">
          Patio
        </span>
      ) : null}
    </Link>
  );
}
