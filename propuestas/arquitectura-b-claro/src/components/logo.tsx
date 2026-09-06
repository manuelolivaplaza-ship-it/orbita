import Link from "next/link";
import { cn } from "@/lib/utils";

export function CotaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 36" aria-hidden className={cn("shrink-0", className)}>
      <path
        d="M16 4 L28 22 H4 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="miter"
      />
      <path d="M4 22 H28" stroke="var(--cobre)" strokeWidth="1.8" />
      <circle cx="16" cy="22" r="1.6" fill="var(--cobre)" />
    </svg>
  );
}

export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="COTA, inicio"
      className={cn(
        "font-display inline-flex items-center gap-2.5 text-[1.35rem] font-semibold leading-none tracking-[0.22em] text-ink",
        className
      )}
    >
      <CotaMark className="h-[1.45rem] w-[1.3rem] text-ink" />
      COTA
    </Link>
  );
}
