import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M6 21h20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="text-copper"
      />
      <path
        d="M8.2 21a7.8 7.8 0 0 1 15.6 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 8.2v2.4M6.8 13.4l1.9 1.4M25.2 13.4l-1.9 1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        className="text-copper"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-ink", className)}>
      <Mark className="h-7 w-7" />
      <span className="font-display text-[1.35rem] leading-none tracking-[-0.04em]">
        Alba
      </span>
    </span>
  );
}
