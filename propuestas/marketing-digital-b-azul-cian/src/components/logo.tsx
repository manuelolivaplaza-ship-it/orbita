import Link from "next/link";
import { cn } from "@/lib/utils";

export function BuoyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 28" aria-hidden className={cn("shrink-0", className)}>
      <path
        d="M11 2 v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="11" cy="2.2" r="1.4" fill="var(--cyan)" />
      <rect
        x="5.2"
        y="8"
        width="11.6"
        height="17.2"
        rx="5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="5.2" y="14.2" width="11.6" height="4.6" fill="var(--cyan)" />
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
      aria-label="MAREA, inicio"
      className={cn(
        "inline-flex items-center gap-2.5 text-ink",
        className
      )}
    >
      <BuoyMark className="h-[1.35rem] w-[1.05rem]" />
      <span className="text-[1.02rem] font-semibold leading-none tracking-[0.28em]">
        MAREA
      </span>
    </Link>
  );
}
