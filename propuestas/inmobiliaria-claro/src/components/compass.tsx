import type { Orientacion } from "@/lib/data";
import { cn } from "@/lib/utils";

const wedges: Record<Orientacion, string> = {
  N: "M50 50 L38 8 A42 42 0 0 1 62 8 Z",
  NE: "M50 50 L62 8 A42 42 0 0 1 92 38 Z",
  NO: "M50 50 L8 38 A42 42 0 0 1 38 8 Z",
  cruzada:
    "M50 50 L38 8 A42 42 0 0 1 62 8 Z M50 50 L38 92 A42 42 0 0 1 62 92 Z",
};

export function Compass({
  bearing,
  className,
  label,
}: {
  bearing: Orientacion;
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 100 100"
        className="h-14 w-14 shrink-0 text-ink"
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <path d={wedges[bearing]} fill="var(--sol)" opacity="0.92" />
        <circle cx="50" cy="50" r="2.4" fill="currentColor" />
        <text
          x="50"
          y="18"
          textAnchor="middle"
          fill="currentColor"
          fontSize="11"
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.12em"
        >
          N
        </text>
      </svg>
      {label ? (
        <span className="font-mono text-[11px] tracking-[0.14em] text-norte uppercase">
          {label}
        </span>
      ) : null}
    </div>
  );
}
