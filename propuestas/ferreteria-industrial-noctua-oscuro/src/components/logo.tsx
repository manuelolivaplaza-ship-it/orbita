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
      <Mark className="h-7 w-7" />
      <span className="font-display text-[1.7rem] font-medium leading-none tracking-[0.22em]">
        NOCTUA
      </span>
      {!compact ? (
        <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.26em] text-mute sm:inline">
          Nave
        </span>
      ) : null}
    </Link>
  );
}
