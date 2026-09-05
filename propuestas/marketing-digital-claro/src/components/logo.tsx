import Link from "next/link";
import { cn } from "@/lib/utils";

export function FaroMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 32" aria-hidden className={cn("shrink-0", className)}>
      <path
        d="M12 2h4v4h4v24H8V6h4V2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect x="13" y="8" width="2" height="16" fill="var(--sol)" />
      <path d="M16 7 L27 3.5 L27 12.5 L16 10Z" fill="var(--sol)" />
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
      aria-label="FARO, inicio"
      className={cn(
        "font-display inline-flex items-center gap-2.5 text-[1.45rem] font-semibold leading-none tracking-[0.2em] text-ink",
        className
      )}
    >
      <FaroMark className="h-7 w-6 text-ink" />
      FARO
    </Link>
  );
}
