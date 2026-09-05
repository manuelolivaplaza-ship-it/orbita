export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 24 H22 V8" stroke="currentColor" strokeWidth="1.15" />
      <path d="M22 8 H28" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="22" cy="8" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark className="h-6 w-6 text-copper" />
      <span className="font-display text-[1.45rem] leading-none tracking-[0.22em] text-paper">
        ORILLA
      </span>
      {!compact ? (
        <span className="hidden text-[10px] uppercase tracking-[0.28em] text-muted sm:inline">
          Estudio
        </span>
      ) : null}
    </span>
  );
}
