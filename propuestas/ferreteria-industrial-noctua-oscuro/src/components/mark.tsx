import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <line x1="2" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="1.1" />
      <line x1="2" y1="18" x2="2" y2="22" stroke="currentColor" strokeWidth="1.1" />
      <line x1="12" y1="19.5" x2="12" y2="22" stroke="currentColor" strokeWidth="1.1" />
      <line x1="22" y1="19.5" x2="22" y2="22" stroke="currentColor" strokeWidth="1.1" />
      <line x1="30" y1="18" x2="30" y2="22" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M11 11c0-2.4 2.1-4.2 5-4.2s5 1.8 5 4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="13.4" cy="12.2" r="1.05" fill="currentColor" />
      <circle cx="18.6" cy="12.2" r="1.05" fill="currentColor" />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("h-3 w-3", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
