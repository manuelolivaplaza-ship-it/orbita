import { Mark } from "@/components/mark";
import { cn } from "@/lib/cn";
import { DEMO_RUT } from "@/lib/format";

type Row = {
  nombre: string;
  valor: string;
  unidad: string;
  rango: string;
  pct: number;
  out?: boolean;
};

const filas: Row[] = [
  { nombre: "Hemoglobina", valor: "13,8", unidad: "g/dL", rango: "12,0 – 15,5", pct: 52 },
  { nombre: "Hematocrito", valor: "41,2", unidad: "%", rango: "36 – 46", pct: 52 },
  { nombre: "Leucocitos", valor: "6,4", unidad: "×10³/µL", rango: "4,5 – 11,0", pct: 29 },
  { nombre: "Plaquetas", valor: "248", unidad: "×10³/µL", rango: "150 – 400", pct: 39 },
  { nombre: "Glicemia", valor: "92", unidad: "mg/dL", rango: "70 – 99", pct: 76 },
  { nombre: "HbA1c", valor: "5,4", unidad: "%", rango: "< 5,7", pct: 40 },
  { nombre: "Colesterol total", valor: "198", unidad: "mg/dL", rango: "< 200", pct: 72 },
  { nombre: "HDL", valor: "58", unidad: "mg/dL", rango: "> 50", pct: 70 },
  { nombre: "LDL", valor: "128", unidad: "mg/dL", rango: "< 130", pct: 78 },
  { nombre: "Triglicéridos", valor: "118", unidad: "mg/dL", rango: "< 150", pct: 48 },
  { nombre: "TSH", valor: "2,1", unidad: "µUI/mL", rango: "0,4 – 4,0", pct: 47 },
  {
    nombre: "Vitamina D (25-OH)",
    valor: "18",
    unidad: "ng/mL",
    rango: "30 – 100",
    pct: 12,
    out: true,
  },
  { nombre: "Ferritina", valor: "42", unidad: "ng/mL", rango: "15 – 150", pct: 20 },
];

export function Informe() {
  return (
    <article className="border border-line bg-surface px-5 py-8 md:px-12 md:py-12">
      <header className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Mark className="h-6 w-6" />
            <span className="font-display text-xl tracking-[0.32em]">NOCTUA</span>
          </div>
          <p className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Informe de laboratorio
          </p>
        </div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted md:text-right">
          Folio NOC-260903-441
          <br />
          Toma 2 sep 2026 · 19:14 · Ocaso
          <br />
          Validado 3 sep 2026 · 06:12
        </p>
      </header>

      <dl className="mt-8 grid gap-4 text-sm md:grid-cols-4">
        <div>
          <dt className="kicker">Paciente</dt>
          <dd className="mt-2">Magdalena Ossandón Rivas</dd>
        </div>
        <div>
          <dt className="kicker">RUT</dt>
          <dd className="mt-2 font-mono nums">{DEMO_RUT}</dd>
        </div>
        <div>
          <dt className="kicker">Médico</dt>
          <dd className="mt-2">Dra. Paz Undurraga</dd>
        </div>
        <div>
          <dt className="kicker">Sucursal</dt>
          <dd className="mt-2">Vitacura · ocaso</dd>
        </div>
      </dl>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted border-b border-line">
              <th className="py-3 font-normal">Examen</th>
              <th className="py-3 font-normal">Resultado</th>
              <th className="py-3 font-normal">Rango</th>
              <th className="hidden py-3 font-normal md:table-cell">Posición</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((row) => (
              <tr key={row.nombre} className="border-b border-line/70">
                <td className="py-4 pr-4">{row.nombre}</td>
                <td
                  className={cn(
                    "py-4 font-mono text-sm nums",
                    row.out && "text-amber",
                  )}
                >
                  {row.valor} {row.unidad}
                </td>
                <td className="py-4 font-mono text-xs text-muted">{row.rango}</td>
                <td className="hidden py-4 md:table-cell">
                  <div className="range-track">
                    <span
                      className={cn("range-mark", row.out && "is-out")}
                      style={{ left: `${Math.min(row.pct, 100)}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <p className="text-sm leading-relaxed text-paper-dim">
          <span className="kicker mb-3 block">Comentario</span>
          Perfil metabólico y hematológico dentro de rango. Vitamina D en rango
          de insuficiencia —frecuente en Santiago, sobre todo al final del
          invierno—. Conversar suplementación con tu médico. Este informe no
          reemplaza una consulta.
        </p>
        <p className="text-sm leading-relaxed text-paper-dim">
          <span className="kicker mb-3 block">Validado</span>
          QF. Tomás Errázuriz · Jefe de laboratorio
          <br />
          Dra. Emilia Vial · Directora médica
          <br />
          Métodos trazables. Muestra tomada en ayunas de 8 horas, turno de
          ocaso. NCh-ISO 15189.
        </p>
      </div>
    </article>
  );
}
