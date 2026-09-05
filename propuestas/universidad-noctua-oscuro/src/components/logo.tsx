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
      aria-label="NOCTUA, inicio"
    >
      <Mark className="h-6 w-6" />
      <span className="font-display text-[1.15rem] font-semibold tracking-[0.38em] leading-none">
        NOCTUA
      </span>
      {!compact ? (
        <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.28em] text-current/55 sm:inline">
          Instituto
        </span>
      ) : null}
    </Link>
  );
}
