import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { barrios } from "@/lib/data";

export const metadata: Metadata = {
  title: "Barrios",
  description:
    "Ñuñoa, La Reina, Peñalolén y Macul. Cómo lee SOLAR cada comuna: frente, densificación, patio y plan regulador.",
};

export default function BarriosPage() {
  return (
    <>
      <PageIntro
        plate="03"
        kicker="Radio"
        title="La cuadra es parte del precio."
        lead="No vendemos una casa aislada. Vendemos un solar en una manzana que se densifica, o que no. Eso cambia el UF."
      />
      <section className="pb-24">
        <div className="shell grid gap-10">
          {barrios.map((item) => (
            <Reveal key={item.slug}>
              <Link
                href={`/barrios/${item.slug}`}
                className="group grid overflow-hidden border border-line transition-colors hover:border-ink lg:grid-cols-12"
              >
                <div className="img-zoom relative aspect-[16/10] lg:col-span-5 lg:aspect-auto">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center px-6 py-8 lg:col-span-7 lg:px-10">
                  <p className="kicker">
                    Lámina {item.lamina}
                  </p>
                  <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-[15px] text-teja">{item.kicker}</p>
                  <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
                    {item.lead}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
