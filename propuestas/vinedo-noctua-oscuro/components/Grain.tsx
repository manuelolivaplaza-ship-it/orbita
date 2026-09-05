export function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.11] mix-blend-overlay"
      aria-hidden
    >
      <svg className="h-full w-full">
        <filter id="noctua-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noctua-grain)" />
      </svg>
    </div>
  );
}
