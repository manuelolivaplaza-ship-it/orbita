import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <circle
        cx="16"
        cy="15.2"
        r="10.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle
        cx="16"
        cy="15.2"
        r="4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M10 26.4h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
