export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.2"
        y="3.2"
        width="25.6"
        height="25.6"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M3.2 22.5 L28.8 9.5"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

export function Wordmark({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark className={`h-6 w-6 ${inverted ? "text-paper" : "text-ink"}`} />
      <span
        className={`font-display text-[1.35rem] leading-none tracking-[0.18em] ${
          inverted ? "text-paper" : "text-ink"
        }`}
      >
        VETA
      </span>
      {!compact ? (
        <span
          className={`hidden text-[10px] uppercase tracking-[0.28em] sm:inline ${
            inverted ? "text-paper/70" : "text-muted"
          }`}
        >
          Atelier
        </span>
      ) : null}
    </span>
  );
}
