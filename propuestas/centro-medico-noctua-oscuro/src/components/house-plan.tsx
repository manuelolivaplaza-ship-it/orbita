import { rooms, specialties } from "@/data/content";

export function HousePlan() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 560 260"
        role="img"
        aria-label="Planta de la casa NOCTUA: espera, ocho salas, laboratorio e imagen"
        className="h-auto w-full min-w-[520px]"
      >
        <rect
          x="436"
          y="40"
          width="100"
          height="152"
          fill="transparent"
          stroke="var(--line)"
          strokeWidth="1"
        />
        <text
          x="486"
          y="108"
          textAnchor="middle"
          fill="var(--amber)"
          fontSize="9"
          letterSpacing="0.22em"
          style={{ fontFamily: "IBM Plex Mono, ui-monospace, monospace" }}
        >
          ESPERA
        </text>
        <text
          x="486"
          y="124"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="8"
          letterSpacing="0.14em"
          style={{ fontFamily: "IBM Plex Mono, ui-monospace, monospace" }}
        >
          JARDÍN
        </text>

        <rect
          x="20"
          y="204"
          width="400"
          height="28"
          fill="transparent"
          stroke="var(--line)"
          strokeWidth="1"
        />
        <text
          x="220"
          y="222"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="8"
          letterSpacing="0.28em"
          style={{ fontFamily: "IBM Plex Mono, ui-monospace, monospace" }}
        >
          PASILLO
        </text>

        {rooms.map((room) => {
          const spec = specialties.find((item) => item.slug === room.slug);
          if (!spec) return null;
          return (
            <a key={room.slug} href={`/especialidades/${spec.slug}`}>
              <g>
                <rect
                  className="plan-room"
                  x={room.x}
                  y={room.y}
                  width={room.w}
                  height={room.h}
                  fill="transparent"
                  stroke="var(--paper)"
                  strokeWidth="1"
                />
                <text
                  x={room.x + room.w / 2}
                  y={room.y + 32}
                  textAnchor="middle"
                  fill="var(--amber)"
                  fontSize="9"
                  letterSpacing="0.16em"
                  style={{ fontFamily: "IBM Plex Mono, ui-monospace, monospace" }}
                >
                  {spec.n}
                </text>
                <text
                  x={room.x + room.w / 2}
                  y={room.y + 48}
                  textAnchor="middle"
                  fill="var(--paper)"
                  fontSize="8"
                  letterSpacing="0.08em"
                  style={{ fontFamily: "IBM Plex Mono, ui-monospace, monospace" }}
                >
                  {room.label.replace(/^\d+\s/, "")}
                </text>
              </g>
            </a>
          );
        })}
      </svg>
    </div>
  );
}
