import Link from "next/link";
import { cn } from "@/lib/utils";

export function MeanderMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 20"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path
        d="M1 5C8 1.2 13 8.8 19 5s11-3.8 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 10C8 6.2 13 13.8 19 10s11-3.8 16 0"
        fill="none"
        stroke="var(--cyan)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M1 15C8 11.2 13 18.8 19 15s11-3.8 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
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
      aria-label="CAUCE, inicio"
      className={cn(
        "inline-flex items-center gap-2.5 text-ink",
        className
      )}
    >
      <MeanderMark className="h-[1.05rem] w-[1.9rem]" />
      <span className="font-display text-[1.35rem] font-semibold leading-none tracking-[0.18em]">
        CAUCE
      </span>
    </Link>
  );
}
