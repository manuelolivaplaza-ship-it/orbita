import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M16 3.2 L19.2 10.2 H12.8 Z"
        fill="currentColor"
        className="text-norte"
      />
      <path
        d="M16 10.2 V28.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <path
        d="M12.2 16.6 H19.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        className="text-norte"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-ink", className)}>
      <Mark className="h-7 w-7" />
      <span className="font-display text-[1.2rem] font-semibold leading-none tracking-[-0.04em]">
        Meridiano
      </span>
    </span>
  );
}
