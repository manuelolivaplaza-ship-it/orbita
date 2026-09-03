import Link from "next/link";
import { cn } from "@/lib/utils";

export function ClaroMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 28" aria-hidden className={cn("shrink-0", className)}>
      <rect
        x="0.75"
        y="0.75"
        width="12.5"
        height="26.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="5.5" y="0.75" width="3" height="26.5" fill="var(--sol)" />
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
      aria-label="CLARO, inicio"
      className={cn(
        "font-sans inline-flex items-center gap-2.5 text-[1.05rem] font-semibold leading-none tracking-[0.28em] text-ink",
        className
      )}
    >
      <ClaroMark className="h-[1.2rem] w-[0.62rem] text-ink" />
      CLARO
    </Link>
  );
}
