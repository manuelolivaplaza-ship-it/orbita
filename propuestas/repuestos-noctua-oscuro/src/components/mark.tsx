import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="11.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <line
        x1="16"
        y1="3.4"
        x2="16"
        y2="8.2"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <line
        x1="16"
        y1="23.8"
        x2="16"
        y2="28.6"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <line
        x1="3.4"
        y1="16"
        x2="8.2"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <line
        x1="23.8"
        y1="16"
        x2="28.6"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <circle cx="12.2" cy="14.4" r="1.15" fill="currentColor" />
      <circle cx="19.8" cy="14.4" r="1.15" fill="currentColor" />
      <path
        d="M16 17.4 14.7 20.3h2.6Z"
        fill="currentColor"
      />
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
