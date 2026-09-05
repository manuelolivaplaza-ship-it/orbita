import Link from "next/link";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={cn("text-copper", className)}
      aria-hidden="true"
    >
      <polygon
        points="18,2 34,18 18,34 2,18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <polygon points="18,12 24,18 18,24 12,18" fill="currentColor" />
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
        "group flex items-center gap-3 text-ivory",
        className,
      )}
      aria-label="Obsidiana, inicio"
    >
      <Mark className="h-7 w-7 transition-transform duration-700 group-hover:rotate-45" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.35rem] font-medium tracking-[0.22em]">
          OBSIDIANA
        </span>
        {!compact ? (
          <span className="mt-1 font-mono text-[0.58rem] tracking-[0.38em] text-muted uppercase">
            Club
          </span>
        ) : null}
      </span>
    </Link>
  );
}
