import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { terrenoList, tires, sizeLabel, tiresByTerreno } from "@/data/tires";
import { formatCLP, stockLabel } from "@/lib/format";

export const metadata: Metadata = {
  title: "Compuestos",
  description:
    "Ciudad, ruta, cordillera, invierno y carga. El piso de ETER en La Reina, con precio instalado.",
};

export default function CompuestosPage() {
  return (
    <>
      <PageIntro
        kicker="Piso"
        title="El compuesto según el Chile que recorres."
        lead="No vendemos un catálogo infinito. Vendemos la goma correcta para lluvia, cuesta, costa o furgón — con stock que se puede tocar."
      />

      <section className="mx-auto max-w-[1440px] px-6 pb-8 md:px-10 lg:px-16">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-5">
          {terrenoList.map((item) => (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              className="link-line font-mono text-[0.62rem] uppercase tracking-[0.24em] text-ink-soft"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>

      {terrenoList.map((terreno, index) => {
        const items = tiresByTerreno(terreno.slug);
        return (
          <section
            key={terreno.slug}
            id={terreno.slug}
            className="scroll-mt-24 border-b border-line"
          >
            <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
              <div
                className={`relative min-h-[280px] md:col-span-5 md:min-h-[520px] ${index % 2 ? "md:order-2" : ""}`}
              >
                <Image
                  src={terreno.image}
                  alt={terreno.lead}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-14 md:col-span-7 md:px-12 md:py-16 lg:px-16">
                <Reveal>
                  <p className="kicker">{terreno.kicker}</p>
                  <h2 className="mt-4 font-display text-5xl font-light tracking-tight">
                    {terreno.title}
                  </h2>
                  <p className="mt-5 max-w-lg text-ink-soft">{terreno.lead}</p>
                </Reveal>
                <ul className="mt-10 divide-y divide-line border-y border-line">
                  {items.map((tire) => (
                    <li key={tire.slug}>
                      <Link
                        href={`/compuestos/${tire.slug}`}
                        className="grid gap-1 py-5 md:grid-cols-12 md:items-baseline"
                      >
                        <span className="font-display text-xl font-light md:col-span-6">
                          {tire.brand} {tire.model}
                        </span>
                        <span className="font-mono text-[0.62rem] tracking-[0.16em] text-muted md:col-span-2">
                          {sizeLabel(tire)}
                        </span>
                        <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-goma md:col-span-2">
                          {stockLabel(tire.stock)}
                        </span>
                        <span className="tabular-nums md:col-span-2 md:text-right">
                          {formatCLP(tire.priceCLP)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <p className="max-w-md font-display text-3xl font-light leading-snug">
            {tires.length} presencias en piso. Si tu medida no está, la pedimos.
          </p>
          <Link href="/medida" className="btn btn-ink">
            Buscar otra medida
            <Arrow />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
