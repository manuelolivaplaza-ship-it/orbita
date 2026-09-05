import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect
        x="9"
        y="6"
        width="14"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M9 6 L16 17 L23 6" fill="currentColor" className="text-sol" />
      <path
        d="M7 26h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-ink", className)}>
      <Mark className="h-7 w-7" />
      <span className="font-display text-[1.45rem] leading-none tracking-[-0.03em]">
        Nítida
      </span>
    </span>
  );
}
