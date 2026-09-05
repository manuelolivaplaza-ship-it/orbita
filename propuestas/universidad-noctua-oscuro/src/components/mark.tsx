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
        cy="16.6"
        r="10.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle
        cx="12.15"
        cy="15.1"
        r="3.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="12.15" cy="15.1" r="1.05" className="owl-pupil" />
      <circle
        cx="19.85"
        cy="15.1"
        r="3.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="19.85" cy="15.1" r="1.05" className="owl-pupil" />
      <path d="M16 18.15 14.55 21.35h2.9Z" fill="currentColor" />
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

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M7 17L17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
