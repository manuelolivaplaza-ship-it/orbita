import { convenios, prices } from "@/data/content";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export function PriceTable() {
  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <div className="border-t border-linea">
          {prices.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-12 items-baseline gap-4 border-b border-linea py-6"
            >
              <div className="col-span-8 md:col-span-7">
                <p className="font-display text-2xl font-light tracking-tight md:text-3xl">
                  {row.name}
                </p>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
                  {row.detail}
                </p>
              </div>
              <div className="col-span-4 text-right md:col-span-5">
                <p className="font-display text-2xl font-light nums tracking-tight md:text-3xl">
                  {formatCLP(row.amount)}
                </p>
                <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-gris">
                  {row.note}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-gris">
          Valores desde, en pesos chilenos, para particular. Bono electrónico y
          reembolso informados antes. El valor final se confirma al agendar
          según previsión. Nunca partimos sin bono emitido.
        </p>
      </div>

      <aside className="border-t border-linea pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
          Previsión
        </p>
        <p className="mt-4 font-display text-3xl font-light tracking-tight">
          FONASA, ISAPRE, particular.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-tinta-suave">
          {convenios.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
          Casa · horario
        </p>
        <p className="mt-3 text-sm leading-relaxed text-tinta-suave">
          {site.address.line1}
          <br />
          {site.address.commune}
          <br />
          {site.hoursShort}
        </p>
      </aside>
    </div>
  );
}
