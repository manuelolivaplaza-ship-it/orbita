import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { obras } from "@/lib/obra";

export const metadata: Metadata = {
  title: "Obra",
  description:
    "Índice de obra de Meridiano: sistemas de operación para agua, acuicultura, ruta y bosque en Chile.",
};

export default function ObraPage() {
  return (
    <>
      <section className="sheet pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="kicker">
          <span className="text-norte">01</span>
          <span className="mx-2">·</span>
          Índice de obra
        </p>
        <h1 className="display mt-5 max-w-[14ch] text-[clamp(3rem,8vw,6.4rem)]">
          Cuatro latitudes. Un mismo eje.
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          Encargos recientes a lo largo de Chile. Agua en la cuenca, salmones
          en el seno, una ruta de montaña, un predio en Nahuelbuta. El oficio
          cambia. El norte, no.
        </p>
      </section>

      <ol className="sheet grid gap-16 pb-24 md:gap-24 md:pb-32">
        {obras.map((obra, index) => (
          <Reveal as="li" key={obra.slug} delay={index * 60}>
            <Link href={`/obra/${obra.slug}`} className="group grid gap-6 md:grid-cols-12">
              <div className="img-cut relative aspect-[16/10] md:col-span-7 md:aspect-[16/9]">
                <Image
                  src={obra.cover}
                  alt={obra.coverAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-between md:col-span-5">
                <div>
                  <p className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-norte">
                    {obra.code} · {obra.lat}
                  </p>
                  <h2 className="font-display mt-3 text-3xl tracking-[-0.04em] md:text-4xl">
                    {obra.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    {obra.sector} · {obra.location} · {obra.year}
                  </p>
                  <p className="mt-5 text-[1.05rem] leading-relaxed">{obra.headline}</p>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                    {obra.lede}
                  </p>
                </div>
                <p className="mt-8 text-sm tracking-[0.04em] text-norte">
                  Abrir ficha →
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </ol>
    </>
  );
}
