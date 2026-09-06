import Link from "next/link";
import { cn } from "@/lib/utils";

export function HelioMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 36" aria-hidden className={cn("shrink-0", className)}>
      <rect
        x="1.2"
        y="1.2"
        width="25.6"
        height="33.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect x="6" y="5.5" width="16" height="11" fill="var(--sol)" />
      <path
        d="M6 22.5 H22 M6 26.5 H16"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
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
      aria-label="HELIO, inicio"
      className={cn(
        "font-display inline-flex items-center gap-2.5 text-[1.45rem] font-semibold leading-none tracking-[0.18em] text-ink",
        className
      )}
    >
      <HelioMark className="h-[1.4rem] w-[1.1rem] text-ink" />
      HELIO
    </Link>
  );
}
