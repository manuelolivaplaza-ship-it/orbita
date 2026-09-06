export function SunSection() {
  return (
    <figure className="border border-line bg-cal px-4 py-6 sm:px-8 sm:py-8">
      <svg
        viewBox="0 0 640 320"
        className="h-auto w-full"
        role="img"
        aria-label="Corte de una casa en Chile: el sol entra por el norte, el alero corta el poniente."
      >
        <rect width="640" height="320" fill="var(--cal)" />
        <line
          x1="24"
          x2="616"
          y1="248"
          y2="248"
          stroke="var(--cobre)"
          strokeWidth="1.5"
        />
        <polygon points="24,248 32,240 40,248" fill="var(--cobre)" />
        <text
          x="48"
          y="268"
          fill="var(--muted)"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
        >
          ±0.00
        </text>

        <path
          d="M120 248 L120 150 L280 150 L280 108 L430 108 L430 248"
          fill="var(--cal-2)"
          stroke="var(--ink)"
          strokeWidth="1.4"
        />
        <path
          d="M280 108 L430 108 L458 108"
          stroke="var(--ink)"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M430 108 L510 108"
          stroke="var(--ink)"
          strokeWidth="1.8"
        />
        <path d="M510 108 L510 118" stroke="var(--ink)" strokeWidth="1.8" />

        <rect
          x="292"
          y="118"
          width="86"
          height="70"
          fill="color-mix(in srgb, var(--cielo) 55%, white)"
          stroke="var(--ink)"
          strokeWidth="1"
        />
        <rect
          x="160"
          y="168"
          width="44"
          height="80"
          fill="color-mix(in srgb, var(--cielo) 35%, white)"
          stroke="var(--ink)"
          strokeWidth="1"
        />

        <circle cx="500" cy="44" r="16" fill="var(--cobre)" opacity="0.9" />
        <path
          d="M488 70 L360 150"
          stroke="var(--cobre)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M512 62 L470 108"
          stroke="var(--cobre)"
          strokeWidth="1.2"
        />

        <text
          x="488"
          y="34"
          fill="var(--ink)"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          textAnchor="middle"
        >
          N
        </text>
        <text
          x="86"
          y="140"
          fill="var(--muted)"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
        >
          S
        </text>
        <text
          x="300"
          y="98"
          fill="var(--ink)"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
        >
          ALERO
        </text>
        <text
          x="300"
          y="292"
          fill="var(--muted)"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
        >
          Corte A–A · latitud 33° S · sol al norte
        </text>
      </svg>
      <figcaption className="font-serif mt-4 max-w-xl text-[15px] leading-relaxed text-muted italic">
        En Santiago, el 21 de diciembre a las 14:00 el sol está al norte, alto.
        El alero se calcula para esa hora. El render no.
      </figcaption>
    </figure>
  );
}
