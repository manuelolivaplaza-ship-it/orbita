import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 48"
      aria-hidden="true"
      className={cn("overflow-visible", className)}
    >
      <path
        d="M20.4 2.2 L37.6 14.8 L33.1 45.6 L9.2 43.4 L3.4 16.1 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M20.4 2.2 L15.6 43.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.8"
      />
    </svg>
  );
}
