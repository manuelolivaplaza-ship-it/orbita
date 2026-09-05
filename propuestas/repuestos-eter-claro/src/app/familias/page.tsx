import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { families, piecesByFamily } from "@/lib/data";

export const metadata: Metadata = {
  title: "Familias",
  description:
    "Frenos, motor, filtros, suspensión, eléctrico y refrigeración. El cruce es por ficha, no por parecido.",
};

export default function FamiliasPage() {
  return (
    <>
      <PageIntro
        kicker="Índice de oficio"
        title="Seis familias."
        lead="Cada pieza entra por familia y sale por ficha. El índice no es un catálogo de ofertas: es el mapa de la sala."
      />
      <section className="py-16 lg:py-24">
        <div className="shell space-y-0">
          {families.map((item, i) => {
            const count = piecesByFamily(item.slug).length;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={item.slug}>
                <article
                  className={`grid items-center gap-8 border-t border-line py-12 lg:grid-cols-12 lg:gap-10 lg:py-16 ${
                    i === families.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden lg:col-span-6 ${
                      reverse ? "lg:col-start-7 lg:row-start-1" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`lg:col-span-5 ${
                      reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"
                    }`}
                  >
                    <p className="font-sku text-[12px] text-ether">{item.index}</p>
                    <h2 className="font-display mt-3 text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.95] tracking-tight">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-[13px] tracking-[0.16em] text-muted uppercase">
                      {item.kicker}
                    </p>
                    <p className="mt-5 max-w-[40ch] text-[16px] leading-relaxed text-muted">
                      {item.lead}
                    </p>
                    <p className="mt-4 text-[14px] text-muted">
                      {count} referencias en sala
                    </p>
                    <Link
                      href={`/familias/${item.slug}`}
                      className="font-ui mt-8 inline-flex h-12 items-center border border-ink px-6 text-[0.78rem] font-medium tracking-[0.14em] uppercase transition-colors hover:border-ether hover:text-ether-deep"
                    >
                      Abrir familia
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
