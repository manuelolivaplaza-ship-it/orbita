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
        r="13"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeDasharray="62 20"
        strokeDashoffset="8"
      />
      <circle
        cx="16"
        cy="16"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.55"
        strokeDasharray="36 14"
        strokeDashoffset="4"
      />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" />
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
