import Link from "next/link";
import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
    >
      <circle
        cx="16"
        cy="16"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle cx="20.2" cy="12.2" r="1.35" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 no-underline",
        inverted ? "text-cream" : "text-ink",
        className,
      )}
      aria-label="ETER, inicio"
    >
      <Mark className="transition-transform duration-500 group-hover:rotate-[28deg]" />
      <span className="font-serif text-[1.55rem] leading-none tracking-[0.18em]">
        ETER
      </span>
    </Link>
  );
}
