import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect x="3" y="7" width="22" height="4.2" rx="1.4" fill="#12C4D4" />
      <rect x="8" y="14" width="16" height="4.2" rx="1.4" fill="#1A5FD0" />
      <rect x="5" y="21" width="12" height="4.2" rx="1.4" fill="#0B1F33" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-tinta", className)}>
      <Mark className="h-7 w-7" />
      <span className="font-display text-[1.35rem] font-semibold leading-none tracking-[-0.04em]">
        Traza
      </span>
    </span>
  );
}
