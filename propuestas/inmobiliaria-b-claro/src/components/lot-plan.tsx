import type { Lot } from "@/lib/data";
import { cn } from "@/lib/utils";

export function LotPlan({
  lot,
  frente,
  fondo,
  className,
}: {
  lot: Lot;
  frente: number;
  fondo: number;
  className?: string;
}) {
  const pad = 28;
  const w = lot.frente;
  const h = lot.fondo;
  const vw = w + pad * 2;
  const vh = h + pad * 2;
  const nx = lot.north === "top" ? pad + w / 2 : lot.north === "right" ? pad + w + 14 : 14;
  const ny = lot.north === "top" ? 12 : pad + 18;

  return (
    <div className={cn("bg-lima/40 p-3", className)}>
      <svg
        viewBox={`0 0 ${vw} ${vh}`}
        className="h-full w-full"
        role="img"
        aria-label={`Plano del solar, ${frente} metros de frente por ${fondo} de fondo`}
      >
        <rect width={vw} height={vh} fill="transparent" />
        <rect
          x={pad}
          y={pad}
          width={w}
          height={h}
          fill="#f4efe3"
          stroke="#1b1914"
          strokeWidth="1.4"
        />
        <rect
          x={pad + lot.builtX}
          y={pad + lot.builtY}
          width={lot.builtW}
          height={lot.builtD}
          fill="#c24e2f"
          opacity="0.92"
        />
        <text
          x={pad + lot.builtX + lot.builtW / 2}
          y={pad + lot.builtY + lot.builtD / 2 + 4}
          textAnchor="middle"
          fill="#f4efe3"
          fontSize="11"
          fontFamily="IBM Plex Mono, ui-monospace, monospace"
          letterSpacing="0.12em"
        >
          CASA
        </text>
        <text
          x={pad + w / 2}
          y={pad - 8}
          textAnchor="middle"
          fill="#6a6458"
          fontSize="10"
          fontFamily="IBM Plex Mono, ui-monospace, monospace"
        >
          {frente.toString().replace(".", ",")} m
        </text>
        <text
          x={pad + w + 12}
          y={pad + h / 2}
          textAnchor="middle"
          fill="#6a6458"
          fontSize="10"
          fontFamily="IBM Plex Mono, ui-monospace, monospace"
          transform={`rotate(90 ${pad + w + 12} ${pad + h / 2})`}
        >
          {fondo.toString().replace(".", ",")} m
        </text>
        <g transform={`translate(${nx} ${ny})`}>
          <polygon points="0,-7 4,5 -4,5" fill="#2f5a3e" />
          <text
            y="14"
            textAnchor="middle"
            fill="#2f5a3e"
            fontSize="9"
            fontFamily="IBM Plex Mono, ui-monospace, monospace"
          >
            N
          </text>
        </g>
      </svg>
    </div>
  );
}
