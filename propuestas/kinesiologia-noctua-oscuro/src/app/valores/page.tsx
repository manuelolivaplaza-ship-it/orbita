import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { convenios, prices } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Valores",
  description:
    "Valores de kinesiología NOCTUA en Vitacura. Lectura $48.000. Boleta reembolsable ISAPRE y FONASA.",
};

export default function ValoresPage() {
  return (
    <>
      <PageIntro
        kicker="Valores"
        title="Claros. Sin sorpresas."
        lead="La lectura se cobra. El pack se ofrece después, si hace falta. El valor de las sesiones siguientes se confirma ese día, no antes."
      />

      <section className="pb-12">
        <div className="shell flex flex-wrap gap-x-8 gap-y-2">
          {convenios.map((item) => (
            <p
              key={item}
              className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="pb-28">
        <div className="shell">
          <ul className="border-t border-line">
            {prices.map((price, index) => (
              <Reveal key={price.name} delay={index * 50}>
                <li className="grid items-end gap-2 border-b border-line py-8 md:grid-cols-12">
                  <div className="md:col-span-7">
                    <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      {price.name}
                    </h2>
                    <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                      {price.detail}
                    </p>
                  </div>
                  <p className="font-display text-4xl font-semibold nums tracking-tight md:col-span-5 md:text-right md:text-5xl">
                    {formatCLP(price.amount)}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-paper-dim">
            Valores referenciales «desde». Boleta el mismo día. El porcentaje
            de reembolso lo define tu plan: te orientamos con el código y el
            tope, no prometemos un número que no controlamos.
          </p>
          <Link href="/hora" className="btn btn-amber mt-10 w-fit">
            Pedir lectura
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
