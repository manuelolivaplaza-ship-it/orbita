import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { fees, refusals, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Método",
  description:
    "Diagnóstico, corte, sistema, lectura. Retainer en UF. Pauta en su Business Manager. Lo que no hacemos, también está escrito.",
};

export default function MetodoPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="03"
        kicker="Método"
        title="Primero el corte. Después el medio."
        lede="Cuarenta minutos. Una página. Un socio. Lectura los martes. Si en 90 días no hay caso, se sale."
      />

      <ol className="mt-14 grid gap-0 border-t border-line">
        {steps.map((s) => (
          <li
            key={s.folio}
            className="grid gap-4 border-b border-line py-10 sm:grid-cols-12 sm:items-baseline"
          >
            <p className="kicker sm:col-span-2">{s.folio}</p>
            <h2 className="font-display text-3xl leading-tight sm:col-span-3">
              {s.title}
            </h2>
            <p className="max-w-[48ch] text-paper-dim sm:col-span-7">{s.body}</p>
          </li>
        ))}
      </ol>

      <section className="mt-24">
        <Reveal>
          <p className="kicker">Honorario</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            En UF, por escrito. IVA aparte.
          </h2>
        </Reveal>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="kicker py-4 pr-4 font-medium">Servicio</th>
                <th className="kicker py-4 pr-4 font-medium">Honorario</th>
                <th className="kicker py-4 font-medium">Nota</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((f) => (
                <tr key={f.servicio} className="border-b border-line align-top">
                  <td className="py-5 pr-4 font-display text-xl leading-tight">
                    {f.servicio}
                  </td>
                  <td className="py-5 pr-4 font-display text-xl tabular text-ember">
                    {f.precio}
                  </td>
                  <td className="py-5 max-w-[42ch] text-[0.95rem] text-paper-dim">
                    {f.nota}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-[54ch] text-[0.9rem] text-muted">
          La UF se toma al valor del día de la factura. No hay markup sobre
          pauta. No hay horas de community escondidas. Lo que no está en esta
          tabla, se cotiza en el corte.
        </p>
      </section>

      <section className="mt-24">
        <Reveal>
          <p className="kicker">Lo que no hacemos</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            También está escrito.
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {refusals.map((r) => (
            <li key={r.title} className="bg-void p-7">
              <h3 className="font-display text-xl leading-tight">{r.title}</h3>
              <p className="mt-3 text-[0.95rem] text-paper-dim">{r.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <Reveal className="mt-20 flex flex-wrap gap-3">
        <Link href="/diagnostico" className="btn btn-primary">
          Pedir un diagnóstico
        </Link>
        <Link href="/trabajo" className="btn btn-ghost">
          Ver el trabajo
        </Link>
      </Reveal>
    </div>
  );
}
