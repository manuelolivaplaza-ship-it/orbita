import Link from "next/link";
import { cn } from "@/lib/utils";

export function SolarMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 40" aria-hidden className={cn("shrink-0", className)}>
      <rect
        x="1"
        y="1"
        width="26"
        height="38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect x="5" y="8" width="14" height="16" fill="var(--teja)" />
      <path
        d="M14 3.2 V6.2 M12.4 4.6 H15.6"
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
      aria-label="SOLAR, inicio"
      className={cn(
        "font-display inline-flex items-center gap-2.5 text-[1.45rem] font-semibold leading-none tracking-[0.16em] text-ink",
        className
      )}
    >
      <SolarMark className="h-[1.35rem] w-[0.95rem] text-ink" />
      SOLAR
    </Link>
  );
}
