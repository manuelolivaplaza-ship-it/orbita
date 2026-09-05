import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <line
        x1="3"
        y1="16"
        x2="13.5"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <line
        x1="18.5"
        y1="16"
        x2="29"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <line
        x1="16"
        y1="8"
        x2="16"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.1"
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
