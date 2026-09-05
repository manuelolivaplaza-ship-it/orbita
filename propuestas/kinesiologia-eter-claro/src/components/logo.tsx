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
      <Mark className="h-5 w-5 transition-transform duration-700 group-hover:rotate-90" />
      <span className="font-display text-[1.35rem] font-light tracking-[0.42em] leading-none">
        ETER
      </span>
      {!compact ? (
        <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.28em] text-current/55 sm:inline">
          Kine
        </span>
      ) : null}
    </Link>
  );
}
