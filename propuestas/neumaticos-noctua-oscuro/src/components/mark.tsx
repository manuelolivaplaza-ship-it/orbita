import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      aria-hidden
      fill="none"
    >
      <ellipse
        cx="11.2"
        cy="16"
        rx="6.2"
        ry="7.4"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <ellipse
        cx="20.8"
        cy="16"
        rx="6.2"
        ry="7.4"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <circle cx="12.4" cy="16.6" r="2.05" fill="#D4A054" />
      <circle cx="22" cy="16.6" r="2.05" fill="#D4A054" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-[0.95rem] font-extrabold tracking-[0.34em]",
        className,
      )}
      style={{ fontFamily: "var(--font-syne), Syne, sans-serif" }}
    >
      NOCTUA
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-ink", className)}>
      <Mark className="h-7 w-7" />
      <Wordmark />
    </span>
  );
}
