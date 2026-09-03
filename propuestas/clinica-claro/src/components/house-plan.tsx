import { specialties } from "@/lib/data";

const rooms = [
  { slug: "medicina-interna", label: "Interna", x: 168, y: 28, w: 92, h: 70 },
  { slug: "cardiologia", label: "Cardio", x: 268, y: 28, w: 92, h: 70 },
  { slug: "endocrinologia", label: "Endocrino", x: 368, y: 28, w: 92, h: 70 },
  { slug: "gastroenterologia", label: "Gastro", x: 468, y: 28, w: 92, h: 70 },
  { slug: "neurologia", label: "Neuro", x: 168, y: 106, w: 92, h: 70 },
  { slug: "ginecologia", label: "Gineco", x: 268, y: 106, w: 92, h: 70 },
  { slug: "dermatologia", label: "Derma", x: 368, y: 106, w: 92, h: 70 },
  { slug: "salud-mental", label: "Mental", x: 468, y: 106, w: 92, h: 70 },
] as const;

export function HousePlan() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 580 230"
        role="img"
        aria-label="Planta de la casa: pabellón de espera, ocho salas, laboratorio y patio de olivos"
        className="font-sans h-auto w-full min-w-[640px]"
      >
        <rect x="16" y="28" width="136" height="148" fill="var(--luz-2)" stroke="var(--ink)" strokeWidth="1.2" />
        <text x="84" y="96" textAnchor="middle" fill="var(--hoja)" fontSize="11" letterSpacing="0.18em">
          PATIO
        </text>
        <text x="84" y="114" textAnchor="middle" fill="var(--muted)" fontSize="10">
          olivos
        </text>

        {rooms.map((room) => {
          const spec = specialties.find((item) => item.slug === room.slug);
          if (!spec) return null;
          return (
            <a key={room.slug} href={`/especialidades/${spec.slug}`}>
              <g className="plan-room cursor-pointer">
                <rect
                  className="plan-room"
                  x={room.x}
                  y={room.y}
                  width={room.w}
                  height={room.h}
                  fill="var(--papel)"
                  stroke="var(--ink)"
                  strokeWidth="1.2"
                />
                <text
                  x={room.x + room.w / 2}
                  y={room.y + 28}
                  textAnchor="middle"
                  fill="var(--sol)"
                  fontSize="10"
                  letterSpacing="0.16em"
                >
                  {spec.room}
                </text>
                <text
                  x={room.x + room.w / 2}
                  y={room.y + 46}
                  textAnchor="middle"
                  fill="var(--ink)"
                  fontSize="9.5"
                >
                  {room.label}
                </text>
              </g>
            </a>
          );
        })}

        <rect x="16" y="184" width="244" height="32" fill="var(--papel)" stroke="var(--ink)" strokeWidth="1.2" />
        <text x="138" y="204" textAnchor="middle" fill="var(--ink)" fontSize="10" letterSpacing="0.2em">
          PABELLÓN DE LUZ · ESPERA
        </text>

        <a href="/laboratorio">
          <g className="cursor-pointer">
            <rect
              className="plan-room"
              x="268"
              y="184"
              width="192"
              height="32"
              fill="var(--papel)"
              stroke="var(--ink)"
              strokeWidth="1.2"
            />
            <text x="364" y="204" textAnchor="middle" fill="var(--ink)" fontSize="10" letterSpacing="0.18em">
              LABORATORIO
            </text>
          </g>
        </a>

        <rect x="468" y="184" width="92" height="32" fill="var(--luz-2)" stroke="var(--ink)" strokeWidth="1.2" />
        <text x="514" y="204" textAnchor="middle" fill="var(--muted)" fontSize="9" letterSpacing="0.12em">
          ENFERMERÍA
        </text>
      </svg>
    </div>
  );
}
