import Link from "next/link";
import { cn } from "@/lib/utils";

export function WindowMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18 26"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <rect
        x="1"
        y="1"
        width="16"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect x="1" y="8" width="16" height="2.2" fill="var(--cobre)" />
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
        "font-display inline-flex items-center gap-2.5 text-[1.35rem] font-semibold leading-none tracking-[0.2em] text-ink",
        className
      )}
    >
      <WindowMark className="h-[1.15rem] w-[0.8rem] text-ink" />
      CLARO
    </Link>
  );
}
