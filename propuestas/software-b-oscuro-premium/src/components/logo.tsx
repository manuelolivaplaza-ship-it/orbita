import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      aria-hidden
    >
      <path
        d="M6.2 24.8 A12.4 12.4 0 0 1 25.8 24.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 8.2 L22.4 24.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8.2" r="1.35" fill="currentColor" />
      <circle cx="22.4" cy="24.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 text-marfil", className)}>
      <Mark className="h-7 w-7" />
      <span className="font-display text-[1.55rem] font-semibold tracking-[-0.04em]">
        Sextante
      </span>
    </span>
  );
}
