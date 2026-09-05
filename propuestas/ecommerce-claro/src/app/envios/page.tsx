import type { Metadata } from "next";
import Link from "next/link";
import { formatCLP } from "@/lib/format";
import { regions } from "@/lib/shipping";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Despacho y cambios",
  description:
    "Despacho a todo Chile, retiro en Lastarria, diez días para devolver. Precios con IVA.",
};

const faqs = [
  {
    q: "¿El precio incluye IVA?",
    a: "Sí. Lo que ves en la ficha es lo que pagas, más despacho si corresponde. No hay recargo al cerrar.",
  },
  {
    q: "¿Cuánto demora?",
    a: "Santiago, un día hábil. Valparaíso y O’Higgins, dos. El sur largo y el norte, cuatro a cinco. Aysén y Magallanes, una semana. Retiro en Lastarria: el mismo día, en horario de casa.",
  },
  {
    q: "¿Puedo cambiar una pieza?",
    a: "Diez días corridos, con la pieza intacta y su embalaje. El lino que ya se lavó no se cambia. El aceite y la vela, solo si no se abrieron.",
  },
  {
    q: "¿Hacen factura?",
    a: "Sí. En el pago eliges boleta o factura. Para factura pedimos RUT. El documento sale por correo.",
  },
  {
    q: "¿Qué pasa si llega rota?",
    a: "Escríbenos el mismo día, con una foto. Reponemos o devolvemos. No discutimos el gres ni el vidrio: se rompen, se cubren.",
  },
];

export default function EnviosPage() {
  return (
    <section className="shell pt-28 pb-24 lg:pt-36 lg:pb-32">
      <p className="kicker">Despacho</p>
      <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.92] tracking-tight">
        A tu comuna, o a Lastarria.
      </h1>
      <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-tinta-suave">
        Empacamos en papel y caja. El vidrio lleva doble pared. Desde{" "}
        {formatCLP(site.freeShippingFrom)} el despacho no se cobra en Chile
        continental.
      </p>

      <div className="mt-16 overflow-x-auto border-y border-linea">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
              <th className="py-4 pr-4 font-medium">Región</th>
              <th className="py-4 pr-4 font-medium">Despacho</th>
              <th className="py-4 font-medium">Plazo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-linea">
              <td className="py-4 pr-4">Retiro en Lastarria</td>
              <td className="font-mono nums py-4 pr-4">Sin costo</td>
              <td className="py-4">El mismo día</td>
            </tr>
            {regions.map((r) => (
              <tr key={r.id} className="border-t border-linea">
                <td className="py-4 pr-4">{r.name}</td>
                <td className="font-mono nums py-4 pr-4">
                  {formatCLP(r.shipping)}
                </td>
                <td className="py-4">
                  {r.lead === 1 ? "1 día hábil" : `${r.lead} días hábiles`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
        Sobre {formatCLP(site.freeShippingFrom)}, despacho sin costo en Chile
        continental (no Aysén ni Magallanes).
      </p>

      <div className="mt-20 grid gap-px bg-linea md:grid-cols-2">
        {faqs.map((f) => (
          <article key={f.q} className="bg-papel p-8">
            <h2 className="font-display text-2xl tracking-tight">{f.q}</h2>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-tinta-suave">
              {f.a}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link href="/coleccion" className="btn btn-ink">
          Volver a la colección
        </Link>
        <Link href="/contacto" className="btn btn-ghost">
          Una duda
        </Link>
      </div>
    </section>
  );
}
