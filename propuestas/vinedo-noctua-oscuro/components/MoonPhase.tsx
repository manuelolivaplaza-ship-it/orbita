import { cn } from "@/lib/cn";
import type { Moon } from "@/lib/wines";

export function MoonPhase({
  moon,
  size = 28,
  className,
}: {
  moon: Moon;
  size?: number;
  className?: string;
}) {
  const r = 12;
  const offset = moon.waxing
    ? r * (1 - moon.illumination) * 2
    : -r * (1 - moon.illumination) * 2;
  const clipId = `moon-${moon.name.replace(/\s+/g, "-")}-${moon.illumination}-${size}`;

  return (
    <span
      className={cn("inline-flex items-center gap-2 text-brass", className)}
      title={`Luna ${moon.name}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        aria-hidden
        className="shrink-0"
      >
        <circle cx="16" cy="16" r="12" fill="#1c1f28" stroke="#b8956a" strokeWidth="0.6" />
        <defs>
          <clipPath id={clipId}>
            <circle cx="16" cy="16" r="11.2" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <circle cx="16" cy="16" r="11.2" fill="#e7dfd1" />
          <ellipse
            cx={16 + offset}
            cy="16"
            rx="11.2"
            ry="11.2"
            fill="#1c1f28"
          />
        </g>
      </svg>
    </span>
  );
}
