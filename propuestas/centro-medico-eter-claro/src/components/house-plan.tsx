import { specialties } from "@/data/content";

const rooms = [
  { slug: "medicina-interna", x: 28, y: 36, w: 88, h: 64 },
  { slug: "pediatria", x: 124, y: 36, w: 88, h: 64 },
  { slug: "ginecologia", x: 220, y: 36, w: 88, h: 64 },
  { slug: "traumatologia", x: 316, y: 36, w: 88, h: 64 },
  { slug: "dermatologia", x: 28, y: 108, w: 88, h: 64 },
  { slug: "otorrino", x: 124, y: 108, w: 88, h: 64 },
  { slug: "cardiologia", x: 220, y: 108, w: 88, h: 64 },
  { slug: "procedimientos", x: 316, y: 108, w: 88, h: 64 },
] as const;

export function HousePlan() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 560 248"
        role="img"
        aria-label="Planta de la casa ETER: pabellón de espera, ocho salas, laboratorio y patio del olivo"
        className="h-auto w-full min-w-[520px] font-sans"
      >
        <rect
          x="420"
          y="36"
          width="116"
          height="136"
          fill="var(--papel-2)"
          stroke="var(--tinta)"
          strokeWidth="1.1"
        />
        <text
          x="478"
          y="98"
          textAnchor="middle"
          fill="var(--eter)"
          fontSize="10"
          letterSpacing="0.22em"
        >
          PATIO
        </text>
        <text
          x="478"
          y="116"
          textAnchor="middle"
          fill="var(--gris)"
          fontSize="9"
          letterSpacing="0.16em"
        >
          OLIVO
        </text>

        {rooms.map((room) => {
          const spec = specialties.find((item) => item.slug === room.slug);
          if (!spec) return null;
          return (
            <a key={room.slug} href={`/especialidades/${spec.slug}`}>
              <g className="cursor-pointer">
                <rect
                  className="plan-room"
                  x={room.x}
                  y={room.y}
                  width={room.w}
                  height={room.h}
                  fill="var(--papel)"
                  stroke="var(--tinta)"
                  strokeWidth="1.1"
                />
                <text
                  x={room.x + room.w / 2}
                  y={room.y + 26}
                  textAnchor="middle"
                  fill="var(--eter)"
                  fontSize="9"
                  letterSpacing="0.18em"
                >
                  {spec.n}
                </text>
                <text
                  x={room.x + room.w / 2}
                  y={room.y + 44}
                  textAnchor="middle"
                  fill="var(--tinta)"
                  fontSize="9"
                >
                  {spec.title.split(" ")[0]}
                </text>
              </g>
            </a>
          );
        })}

        <rect
          x="28"
          y="184"
          width="280"
          height="36"
          fill="var(--papel)"
          stroke="var(--tinta)"
          strokeWidth="1.1"
        />
        <text
          x="168"
          y="206"
          textAnchor="middle"
          fill="var(--tinta)"
          fontSize="10"
          letterSpacing="0.2em"
        >
          PABELLÓN DE ESPERA
        </text>

        <a href="/laboratorio">
          <g className="cursor-pointer">
            <rect
              className="plan-room"
              x="316"
              y="184"
              width="220"
              height="36"
              fill="var(--papel)"
              stroke="var(--tinta)"
              strokeWidth="1.1"
            />
            <text
              x="426"
              y="206"
              textAnchor="middle"
              fill="var(--tinta)"
              fontSize="10"
              letterSpacing="0.2em"
            >
              LABORATORIO
            </text>
          </g>
        </a>
      </svg>
    </div>
  );
}
