import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { PriceTable } from "@/components/price-table";
import { Reveal } from "@/components/reveal";
import { convenios } from "@/data/content";

export const metadata: Metadata = {
  title: "Valores y convenios",
  description:
    "Valores de kinesiología ETER en Las Condes: evaluación, sesión de box, domicilio, packs. Boleta reembolsable ISAPRE y FONASA.",
};

export default function ValoresPage() {
  return (
    <>
      <PageIntro
        kicker="Valores"
        title="El número, a la vista."
        lead="Sin ‘desde consultar’. Sin pack de veinte por adelantado. El valor final se confirma en la evaluación, con el plan escrito delante."
      />

      <section id="precios" className="pb-24 lg:pb-32">
        <div className="shell">
          <div className="mb-10 flex flex-wrap gap-x-8 gap-y-2">
            {convenios.map((item) => (
              <p
                key={item}
                className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris"
              >
                {item}
              </p>
            ))}
          </div>
          <PriceTable />
        </div>
      </section>

      <section className="border-t border-linea py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Reembolso</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              Boleta el mismo día. El porcentaje lo define tu plan.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
              Orientamos con código y tope. No prometemos un número que no
              controlamos. FONASA, ISAPRE y particular. Convenio directo, cuando
              aplica.
            </p>
            <Link href="/agenda" className="btn btn-ink mt-8 w-fit">
              Agendar evaluación
              <Arrow />
            </Link>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7" id="faq">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
