import Link from "next/link";
import { cn } from "@/lib/utils";

export function NorteMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 22"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <rect
        x="1.2"
        y="1.2"
        width="19.6"
        height="19.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect x="1.2" y="10.2" width="19.6" height="1.6" fill="var(--norte)" />
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
      aria-label="NORTE, inicio"
      className={cn(
        "inline-flex items-center gap-2.5 text-[1.05rem] font-semibold leading-none tracking-[0.28em] text-tinta",
        className
      )}
    >
      <NorteMark className="h-[1.05rem] w-[1.05rem] text-tinta" />
      NORTE
    </Link>
  );
}
