export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="block h-4 w-px bg-brass"
      />
      <span className="font-display text-[1.15rem] leading-none tracking-[0.22em]">
        UMBRAL
      </span>
    </span>
  );
}
