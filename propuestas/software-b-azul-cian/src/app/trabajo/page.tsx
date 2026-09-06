import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { trabajos } from "@/lib/trabajo";

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Casos de Traza: Puerto San Vicente, Mutual del Sur y Cobre Loa. Sistemas que se pueden seguir de punta a punta.",
};

export default function TrabajoPage() {
  return (
    <>
      <section className="shell pb-10 pt-12 md:pb-14 md:pt-20">
        <h1 className="display max-w-[14ch] text-[clamp(2.8rem,7vw,5.6rem)]">
          Tres operaciones. Tres trazas.
        </h1>
        <p className="mt-6 max-w-xl text-[1.08rem] leading-[1.7] text-muted">
          Puerto, mutual, faena. En cada una, un identificador que sobrevive al
          cambio de turno. El resto es consecuencia.
        </p>
      </section>

      <ol>
        {trabajos.map((item, index) => (
          <li
            key={item.slug}
            className="border-t border-line"
          >
            <Link href={`/trabajo/${item.slug}`} className="shell group grid gap-8 py-12 md:grid-cols-12 md:py-16">
              <div className="md:col-span-5">
                <p className="caption">
                  {item.code} · {item.year}
                </p>
                <h2 className="font-display mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] tracking-[-0.03em]">
                  {item.headline}
                </h2>
                <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-muted">
                  {item.lede}
                </p>
                <p className="caption mt-6">
                  {item.name} · {item.location}
                </p>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden md:col-span-6 md:col-start-7">
                <Image
                  src={item.cover}
                  alt={item.coverAlt}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.015]"
                  sizes="(min-width: 768px) 46vw, 100vw"
                />
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
