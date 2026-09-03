import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 64"
      aria-hidden="true"
      className={cn("text-gold", className)}
    >
      <path
        d="M24 2 L44 22 L36 62 L12 62 L4 22 Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="miter"
      />
      <path
        d="M24 2 L24 62 M4 22 L44 22 M12 62 L24 22 L36 62"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.7"
      />
    </svg>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Mark className={compact ? "h-7 w-5" : "h-8 w-6"} />
      <span className="flex flex-col leading-none">
        <span className="font-mono text-[11px] tracking-[0.38em] text-ivory">
          OBSIDIANA
        </span>
        {!compact ? (
          <span className="mt-1 font-mono text-[9px] tracking-[0.32em] text-gold">
            ATELIER
          </span>
        ) : null}
      </span>
    </span>
  );
}
