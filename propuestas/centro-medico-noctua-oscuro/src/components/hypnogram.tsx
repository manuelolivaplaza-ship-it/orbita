const stages = [
  { t: 0, y: 18 },
  { t: 8, y: 18 },
  { t: 12, y: 42 },
  { t: 18, y: 66 },
  { t: 28, y: 90 },
  { t: 40, y: 66 },
  { t: 46, y: 114 },
  { t: 56, y: 66 },
  { t: 62, y: 90 },
  { t: 78, y: 66 },
  { t: 86, y: 114 },
  { t: 98, y: 42 },
  { t: 108, y: 18 },
  { t: 120, y: 18 },
] as const;

const hours = ["22:00", "00:00", "02:00", "04:00", "06:00"] as const;
const labels = [
  { y: 18, name: "W" },
  { y: 42, name: "N1" },
  { y: 66, name: "N2" },
  { y: 90, name: "N3" },
  { y: 114, name: "REM" },
] as const;

function pathFrom(points: typeof stages) {
  return points
    .map((point, index) => {
      const x = 48 + (point.t / 120) * 520;
      const cmd = index === 0 ? "M" : "L";
      return `${cmd}${x} ${point.y}`;
    })
    .join(" ");
}

export function Hypnogram() {
  const d = pathFrom(stages);

  return (
    <div className="border border-line bg-ink px-4 py-6 md:px-8 md:py-8">
      <div className="flex items-end justify-between gap-6">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-amber">
          Hipnograma · una noche
        </p>
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted">
          22:00 — 06:00
        </p>
      </div>
      <svg
        viewBox="0 0 600 150"
        className="mt-6 h-auto w-full"
        role="img"
        aria-label="Hipnograma de una noche: vigilia, N1, N2, N3 y REM"
      >
        {labels.map((row) => (
          <g key={row.name}>
            <line
              x1="48"
              x2="568"
              y1={row.y}
              y2={row.y}
              stroke="var(--line)"
              strokeWidth="0.6"
            />
            <text
              x="8"
              y={row.y + 3}
              fill="var(--muted)"
              fontSize="8"
              letterSpacing="0.16em"
              style={{ fontFamily: "IBM Plex Mono, ui-monospace, monospace" }}
            >
              {row.name}
            </text>
          </g>
        ))}
        <path
          className="hypno-line"
          d={d}
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.4"
        />
        {hours.map((hour, index) => {
          const x = 48 + (index / (hours.length - 1)) * 520;
          return (
            <text
              key={hour}
              x={x}
              y="142"
              textAnchor="middle"
              fill="var(--muted)"
              fontSize="8"
              letterSpacing="0.12em"
              style={{ fontFamily: "IBM Plex Mono, ui-monospace, monospace" }}
            >
              {hour}
            </text>
          );
        })}
      </svg>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper-dim">
        Lo que se ve aquí no es un adorno. Es el oficio: vigilia, N1, N2, N3,
        REM. Si la arquitectura de la noche está rota, se nombra. Después se
        trata.
      </p>
    </div>
  );
}
