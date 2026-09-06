import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { transmissions } from "@/lib/site";

export const metadata: Metadata = {
  title: "El aire",
  description:
    "Bitácora de transmisiones: Textil Tomé, Sierra Blanca, Molino San Carlos, Puerto Seco, Editora Trama y Deriva.",
};

export default function AirePage() {
  const [featured, ...rest] = transmissions;

  return (
    <div className="shell pb-24">
      <PageIntro
        folio="LOG"
        kicker="Bitácora"
        title="Lo que estuvo en el aire."
        lede="Seis cuentas. Lugar, meses, un número. Sin mockups de Instagram ni logos de clientes que no nos contrataron."
      />

      <Link
        href={`/aire/${featured.slug}`}
        className="group mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]"
      >
        <div className="tx-frame img-zoom relative aspect-[16/10]">
          <Image
            src={featured.image}
            alt={`Textil Tomé: sala de telares con luz de costa`}
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-end">
          <p className="kicker">
            {featured.tx} · {featured.place}
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] group-hover:text-carrier">
            {featured.client}
          </h2>
          <p className="font-serif mt-4 max-w-[40ch] text-paper-dim">
            {featured.summary}
          </p>
          <p className="mt-6 font-display text-[2rem] leading-none tabular">
            {featured.metric}
          </p>
          <p className="mt-2 font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted">
            {featured.metricLabel}
          </p>
        </div>
      </Link>

      <ol className="mt-16 border-t border-line">
        {rest.map((tx) => (
          <li key={tx.slug} className="border-b border-line">
            <Link
              href={`/aire/${tx.slug}`}
              className="group grid items-center gap-4 py-6 sm:grid-cols-[5.5rem_8rem_1fr_auto]"
            >
              <span className="font-mono text-[0.72rem] tracking-[0.16em] text-carrier">
                {tx.tx}
              </span>
              <span className="relative hidden aspect-[16/10] overflow-hidden sm:block">
                <Image
                  src={tx.image}
                  alt={tx.client}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block font-display text-[1.6rem] leading-none group-hover:text-carrier">
                  {tx.client}
                </span>
                <span className="mt-2 block text-sm text-muted">
                  {tx.place} · {tx.band} · {tx.months}
                </span>
              </span>
              <span className="text-right">
                <span className="block font-display text-[1.5rem] leading-none tabular">
                  {tx.metric}
                </span>
                <span className="mt-1 block max-w-[16ch] font-mono text-[0.62rem] tracking-[0.12em] uppercase text-muted">
                  {tx.metricLabel}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
