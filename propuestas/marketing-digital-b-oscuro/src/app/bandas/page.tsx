import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { bands } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bandas",
  description:
    "Lectura, pauta, pieza, sitio, marca y eco. Seis bandas. Las que SEÑAL lee de verdad.",
};

export default function BandasPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="FM"
        kicker="El dial"
        title="Seis bandas. Fuera de eso, ruido."
        lede="No un catálogo de servicios. Un dial corto. Si lo que necesita no está acá, se lo decimos en la primera respuesta."
      />

      <ul className="mt-4">
        {bands.map((b) => (
          <li key={b.slug} className="border-b border-line">
            <Link
              href={`/bandas/${b.slug}`}
              className="group grid items-center gap-6 py-8 lg:grid-cols-[7rem_1fr_12rem_auto]"
            >
              <span className="font-mono text-sm tabular tracking-[0.2em] text-carrier">
                {b.freq}
              </span>
              <span>
                <span className="block font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none group-hover:text-carrier">
                  {b.title}
                </span>
                <span className="font-serif mt-3 block max-w-[46ch] text-paper-dim">
                  {b.lead}
                </span>
              </span>
              <span className="hidden text-sm text-muted lg:block">
                {b.price}
              </span>
              <span className="hidden font-mono text-[0.68rem] tracking-[0.16em] uppercase text-muted group-hover:text-carrier lg:block">
                sintonizar
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="tx-frame img-zoom relative mt-16 aspect-[16/7]">
        <Image
          src="/images/mast.jpg"
          alt="Mástil de radio visto desde abajo, LED lima, cielo de Santiago"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
