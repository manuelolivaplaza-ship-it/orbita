export function Pulse({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 36"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        className="ecg-line"
        d="M0 22 H48 L56 22 L62 8 L70 30 L76 22 H118 L126 22 L132 4 L142 32 L150 22 H210 L218 22 L224 10 L232 28 L238 22 H320"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
      />
    </svg>
  );
}
