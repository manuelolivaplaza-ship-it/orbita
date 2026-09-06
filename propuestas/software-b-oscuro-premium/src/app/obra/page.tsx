import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { obras } from "@/lib/obra";

export const metadata: Metadata = {
  title: "Obra",
  description:
    "Cuatro sistemas en producción: un terminal en San Antonio, una naviera en el Chacao, frío en Talcahuano y una bodega en Casablanca.",
};

export default function ObraPage() {
  return (
    <>
      <PageIntro
        kicker="Obra"
        title="Cuatro miras. Sistemas que ya zarparon."
        lede="Puerto, flota, frío y bodega. Operaciones chilenas con poco margen de error. El software se juzga en el turno, no en el deck."
      />
      <ol className="frame pb-24">
        {obras.map((obra) => (
          <li key={obra.slug} className="border-t border-linea py-12">
            <Link href={`/obra/${obra.slug}`} className="group grid gap-8 lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
                <Image
                  src={obra.cover}
                  alt={obra.coverAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="kicker">
                  {obra.code} · {obra.year} · {obra.altura}
                </p>
                <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">
                  {obra.name}
                </h2>
                <p className="mt-2 text-limbo">{obra.sector} · {obra.location}</p>
                <p className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-niebla">
                  {obra.lede}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
