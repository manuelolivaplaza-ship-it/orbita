import { cn } from "@/lib/cn";

export function OwlMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 40"
      className={cn("overflow-visible", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M8 14 L12.2 4.5 L16 14 M16 14 L19.8 4.5 L24 14"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="miter"
      />
      <path
        d="M6.4 15.6 C6.4 9.6 25.6 9.6 25.6 15.6 C25.6 27.2 20.2 33.2 16 35.4 C11.8 33.2 6.4 27.2 6.4 15.6Z"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <circle cx="12.4" cy="18" r="2.15" stroke="currentColor" strokeWidth="1.05" />
      <circle cx="19.6" cy="18" r="2.15" stroke="currentColor" strokeWidth="1.05" />
      <circle cx="12.4" cy="18" r="0.55" fill="currentColor" />
      <circle cx="19.6" cy="18" r="0.55" fill="currentColor" />
      <path d="M16 20.4 L14.4 23.6 L16 24.8 L17.6 23.6 Z" fill="currentColor" />
    </svg>
  );
}
