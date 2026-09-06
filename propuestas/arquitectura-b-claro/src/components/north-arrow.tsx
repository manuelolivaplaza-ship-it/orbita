import { cn } from "@/lib/utils";

export function NorthArrow({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col items-center gap-1 text-ink", className)}
      aria-hidden
    >
      <svg viewBox="0 0 32 48" className="h-12 w-8">
        <path d="M16 2 L22 22 L16 18 L10 22 Z" fill="var(--cobre)" />
        <path
          d="M16 18 V44"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx="16" cy="44" r="1.4" fill="currentColor" />
      </svg>
      <span className="font-mono text-[10px] tracking-[0.28em]">N</span>
    </div>
  );
}
