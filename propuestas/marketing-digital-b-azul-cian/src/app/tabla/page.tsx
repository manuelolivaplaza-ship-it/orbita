import type { Metadata } from "next";
import Link from "next/link";
import { Frame } from "@/components/frame";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { TideTable } from "@/components/tide-table";
import { hoursOfWork } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tabla de mareas",
  description:
    "La atención digital chilena tiene hora. MAREA lee la tabla antes de gastar. Arrastre el coeficiente.",
};

export default function TablaPage() {
  return (
    <>
      <PageIntro
        mark="Tabla · estación Valparaíso"
        title="Se gasta cuando sube."
        lead="La curva de abajo no es un dashboard. Es la hora chilena de la atención: search, Meta, WhatsApp. Arrástrela. Si coincide con su pauta de las 15:00, ya sabemos por qué no llega."
      />

      <section className="pb-16 lg:pb-24">
        <div className="shell">
          <TideTable />
          <p className="font-mono mt-4 max-w-3xl text-[12px] leading-relaxed text-muted">
            Coeficiente de atención, días hábiles y fin de semana, huso America/Santiago.
            No es un CPC en vivo: es el pulso con el que cortamos. La lectura de su cuenta
            sale aparte, por escrito, {site.lecturaPrice}.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <Frame
            src="/images/boya.jpg"
            alt="Boya de canal con banda cian en el agua del puerto de Valparaíso"
            caption="Boya de canal · el oficio es marcar, no decorar"
            ratio="aspect-[4/5] lg:aspect-[21/9]"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="mark">Bitácora del día</p>
            <h2 className="font-display mt-4 max-w-[12ch] text-[clamp(2rem,4vw,3.1rem)] font-medium leading-[0.96] tracking-tight">
              El corte no espera al reporte.
            </h2>
          </Reveal>
          <ol className="lg:col-span-7 lg:col-start-6">
            {hoursOfWork.map((item, i) => (
              <Reveal key={item.time} delay={0.05 * i}>
                <li className="grid gap-2 border-t border-line py-6 sm:grid-cols-[6.5rem_1fr] sm:gap-8">
                  <p className="font-mono nums text-[1.15rem] text-cyan-deep">
                    {item.time}
                  </p>
                  <div>
                    <h3 className="font-display text-[1.55rem] leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[42ch] text-[17px] leading-relaxed text-muted">
            Si quiere que leamos su cuenta —no esta tabla genérica—, la lectura
            es {site.lecturaPrice} y se descuenta si cerramos.
          </p>
          <Link
            href="/lectura"
            className="inline-flex h-12 items-center bg-navy px-6 text-[0.92rem] font-semibold text-foam transition-colors hover:bg-ink"
          >
            Pedir una lectura
          </Link>
        </div>
      </section>
    </>
  );
}
