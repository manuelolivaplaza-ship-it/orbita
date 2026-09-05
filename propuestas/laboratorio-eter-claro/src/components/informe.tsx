import { Mark } from "@/components/logo";
import { cn } from "@/lib/cn";

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
    <article className="border border-line bg-cream px-5 py-8 md:px-12 md:py-12">
      <header className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-ink">
            <Mark className="h-6 w-6" />
            <span className="font-serif text-2xl tracking-[0.18em]">ETER</span>
          </div>
          <p className="mt-4 font-serif text-3xl md:text-4xl">Informe de laboratorio</p>
        </div>
        <p className="eyebrow text-right">
          Folio ETR-260828-441
          <br />
          Toma 28 ago 2026 · 07:42
        </p>
      </header>

      <dl className="mt-8 grid gap-4 text-sm md:grid-cols-4">
        <div>
          <dt className="eyebrow">Paciente</dt>
          <dd className="mt-2">Camila Soto Riquelme</dd>
        </div>
        <div>
          <dt className="eyebrow">RUT</dt>
          <dd className="mt-2 font-mono">16.482.339-3</dd>
        </div>
        <div>
          <dt className="eyebrow">Médico</dt>
          <dd className="mt-2">Dra. Paz Undurraga</dd>
        </div>
        <div>
          <dt className="eyebrow">Sucursal</dt>
          <dd className="mt-2">Providencia</dd>
        </div>
      </dl>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="eyebrow border-b border-line">
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
                <td className={cn("py-4 font-mono text-sm", row.out && "text-[#9a5a3a]")}>
                  {row.valor} {row.unidad}
                </td>
                <td className="py-4 font-mono text-xs text-mute">{row.rango}</td>
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
        <p className="text-sm leading-relaxed text-ink-soft">
          <span className="eyebrow block mb-3">Comentario</span>
          Perfil metabólico y hematológico dentro de rango. Vitamina D en rango
          de insuficiencia —frecuente en Santiago, sobre todo al final del
          invierno—. Conversar suplementación con tu médico. Este informe no
          reemplaza una consulta.
        </p>
        <p className="text-sm leading-relaxed text-ink-soft">
          <span className="eyebrow block mb-3">Validado</span>
          QF. Ignacio Reyes · Jefe de laboratorio
          <br />
          Métodos trazables a estándares internacionales. Muestra tomada en
          ayunas de 10 horas.
        </p>
      </div>
    </article>
  );
}
