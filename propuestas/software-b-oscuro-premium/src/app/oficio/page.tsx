import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { encargo, principles, services, site } from "@/lib/site";
import { uf } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Oficio",
  description:
    "Cómo toma altura Sextante: mira, sistema, producto y compañía. Honorario en UF, por escrito.",
};

export default function OficioPage() {
  return (
    <>
      <PageIntro
        kicker="Oficio"
        title="Tomar altura, después construir."
        lede="No partimos por la arquitectura. Partimos por la operación. Dos semanas de mira, una tesis en una hoja, y recién entonces el primer corte en producción."
      />

      <section className="frame pb-8">
        <ol className="divide-y divide-linea border-y border-linea">
          <li className="grid gap-4 py-10 md:grid-cols-12">
            <p className="kicker md:col-span-3">Terreno</p>
            <div className="md:col-span-8">
              <h2 className="font-display text-[1.9rem] font-semibold tracking-[-0.03em]">
                Estación, no workshop
              </h2>
              <p className="mt-3 max-w-[52ch] text-[1.05rem] leading-[1.75] text-niebla">
                Nos sentamos en el patio, la cámara, la caleta. Radio, planilla,
                el café de las once. Anotamos las palabras del oficio. El
                software se diseña con esas palabras, no con las de un ERP
                genérico.
              </p>
            </div>
          </li>
          <li className="grid gap-4 py-10 md:grid-cols-12">
            <p className="kicker md:col-span-3">Hoja</p>
            <div className="md:col-span-8">
              <h2 className="font-display text-[1.9rem] font-semibold tracking-[-0.03em]">
                Una tesis que cabe en una mira
              </h2>
              <p className="mt-3 max-w-[52ch] text-[1.05rem] leading-[1.75] text-niebla">
                El problema en una frase. El usuario en una persona real. El
                corte que se puede levantar. Si no cabe en una hoja, todavía no
                está claro — y eso también es un resultado.
              </p>
            </div>
          </li>
          <li className="grid gap-4 py-10 md:grid-cols-12">
            <p className="kicker md:col-span-3">Corte</p>
            <div className="md:col-span-8">
              <h2 className="font-display text-[1.9rem] font-semibold tracking-[-0.03em]">
                Algo que se puede pulsar
              </h2>
              <p className="mt-3 max-w-[52ch] text-[1.05rem] leading-[1.75] text-niebla">
                Diseño e ingeniería en la misma mesa. Cada semana, un hecho en
                producción. Lo que no entra al corte tiene nombre. El prototipo
                es un medio; el único entregable que firmamos corre con datos
                reales.
              </p>
            </div>
          </li>
          <li className="grid gap-4 py-10 md:grid-cols-12">
            <p className="kicker md:col-span-3">Invierno</p>
            <div className="md:col-span-8">
              <h2 className="font-display text-[1.9rem] font-semibold tracking-[-0.03em]">
                Hasta que el rumbo es de ustedes
              </h2>
              <p className="mt-3 max-w-[52ch] text-[1.05rem] leading-[1.75] text-niebla">
                Documentación que se consulta, métricas, un canal directo.
                Acompañamos el primer invierno del sistema. Después, el taller
                queda cerca, sin crear una dependencia teatral.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="border-y border-linea bg-mar py-20 md:py-24">
        <div className="frame">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Qué tomamos</h2>
          <ul className="mt-12 divide-y divide-linea border-y border-linea">
            {services.map((item) => (
              <li key={item.slug} className="grid gap-4 py-10 md:grid-cols-12">
                <h3 className="font-display text-[1.7rem] font-semibold tracking-[-0.03em] md:col-span-4">
                  {item.title}
                </h3>
                <div className="md:col-span-8">
                  <p className="max-w-[50ch] text-[1.05rem] leading-relaxed text-marfil-dim">
                    {item.body}
                  </p>
                  <ul className="mt-4 grid gap-1 text-[0.98rem] text-niebla sm:grid-cols-2">
                    {item.includes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="frame py-20 md:py-24">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">
          Honorario en UF
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="encargo-table min-w-[640px]">
            <thead>
              <tr>
                <th>Encargo</th>
                <th>Plazo</th>
                <th>Desde</th>
                <th>Qué incluye</th>
              </tr>
            </thead>
            <tbody>
              {encargo.map((row) => (
                <tr key={row.name}>
                  <td className="font-display text-[1.45rem] font-semibold tracking-[-0.03em]">
                    {row.name}
                  </td>
                  <td className="text-marfil-dim">{row.time}</td>
                  <td className="tabular">
                    {row.unit === "desde"
                      ? uf(row.price)
                      : `${row.price} ${row.unit}`}
                  </td>
                  <td className="max-w-[34ch] text-[0.98rem] leading-relaxed text-niebla">
                    {row.body}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contacto" className="btn btn-primary">
            Pedir una mira
          </Link>
          <a href={site.whatsappHref} className="btn btn-ghost">
            WhatsApp
          </a>
        </div>
      </section>

      <section className="frame pb-24">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">
          Cómo nos medimos
        </h2>
        <ul className="mt-10 grid gap-10 md:grid-cols-2">
          {principles.map((item) => (
            <li key={item.title} className="border-t border-linea pt-6">
              <h3 className="font-display text-[1.5rem] font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[44ch] text-[1.02rem] leading-relaxed text-niebla">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
