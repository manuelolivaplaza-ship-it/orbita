import type { Metadata } from "next";
import Link from "next/link";
import { Crop } from "@/components/crop";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "Obra",
  description:
    "Casos de NORTE: hotel, editorial, taller, movilidad, vivero y arquitectura. Números, no moodboards.",
};

export default function ObraPage() {
  return (
    <>
      <PageIntro
        kicker="Obra"
        title="Seis encargos. Ningún atardecer de stock."
        lead="Marcas chilenas que ya facturaban y necesitaban un canal que se pudiera defender. Lo que sigue son números, no un reel."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-x-8 gap-y-14 md:grid-cols-2">
          {works.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <Link href={`/obra/${item.slug}`} className="group block">
                <Crop
                  src={item.cover}
                  alt=""
                  className="aspect-[4/3]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <p className="kicker">{item.client}</p>
                  <p className="text-[12px] tracking-[0.12em] text-muted uppercase">
                    {item.year}
                  </p>
                </div>
                <h2 className="font-display mt-2 max-w-[22ch] text-[1.85rem] leading-[1.05] tracking-tight group-hover:text-norte">
                  {item.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {item.excerpt}
                </p>
                <p className="mt-3 text-[12px] tracking-[0.12em] text-cielo uppercase">
                  {item.sector}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
