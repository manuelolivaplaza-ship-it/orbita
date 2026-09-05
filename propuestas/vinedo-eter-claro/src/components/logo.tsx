import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="ETER, inicio">
      <Mark />
      <span
        className={`font-display tracking-tight ${compact ? "text-xl" : "text-2xl"}`}
      >
        ETER
      </span>
    </Link>
  );
}

export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="0.9" />
      <line
        x1="5"
        y1="16"
        x2="27"
        y2="16"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.55"
      />
      <line
        x1="8"
        y1="13"
        x2="24"
        y2="13"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.28"
      />
    </svg>
  );
}

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}
