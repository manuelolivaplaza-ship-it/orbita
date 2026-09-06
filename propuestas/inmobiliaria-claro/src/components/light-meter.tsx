import { cn } from "@/lib/utils";

export function LightMeter({
  invierno,
  verano,
  className,
}: {
  invierno: number;
  verano: number;
  className?: string;
}) {
  const max = 10;
  return (
    <div className={cn("space-y-3", className)}>
      <p className="kicker">Horas de sol directo</p>
      <Meter label="Invierno" hours={invierno} max={max} />
      <Meter label="Verano" hours={verano} max={max} />
      <p className="text-[12px] leading-relaxed text-muted">
        Medidas en el vano principal, solsticio de junio y de diciembre.
        Santiago, 33° S.
      </p>
    </div>
  );
}

function Meter({
  label,
  hours,
  max,
}: {
  label: string;
  hours: number;
  max: number;
}) {
  const pct = Math.min(100, (hours / max) * 100);
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
          {label}
        </span>
        <span className="font-display nums text-lg font-semibold leading-none">
          {hours.toString().replace(".", ",")} h
        </span>
      </div>
      <div className="h-[6px] bg-luz-3">
        <div
          className="luz-bar h-full bg-sol"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
