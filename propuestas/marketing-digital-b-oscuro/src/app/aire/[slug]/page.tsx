import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { getTransmission, transmissions } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return transmissions.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tx = getTransmission(slug);
  if (!tx) return {};
  return {
    title: tx.client,
    description: tx.summary,
  };
}

export default async function TransmisionPage({ params }: Props) {
  const { slug } = await params;
  const tx = getTransmission(slug);
  if (!tx) notFound();

  const i = transmissions.findIndex((t) => t.slug === tx.slug);
  const prev = transmissions[i - 1];
  const next = transmissions[i + 1];

  return (
    <div className="shell pb-24">
      <PageIntro
        folio={tx.tx}
        kicker={`${tx.place} · ${tx.year}`}
        title={tx.client}
        lede={tx.title}
      />

      <div className="tx-frame img-zoom relative mt-10 aspect-[16/9]">
        <Image
          src={tx.image}
          alt={`${tx.client} en ${tx.place}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <dl className="mt-8 grid gap-6 border-b border-line pb-8 sm:grid-cols-4">
        <div>
          <dt className="kicker">Métrica</dt>
          <dd className="mt-2 font-display text-[2rem] leading-none tabular">
            {tx.metric}
          </dd>
          <dd className="mt-2 text-sm text-muted">{tx.metricLabel}</dd>
        </div>
        <div>
          <dt className="kicker">Al aire</dt>
          <dd className="mt-2">{tx.months}</dd>
        </div>
        <div>
          <dt className="kicker">Banda</dt>
          <dd className="mt-2">
            <Link href={`/bandas/${tx.bandSlug}`} className="link-line">
              {tx.band}
            </Link>
          </dd>
        </div>
        <div>
          <dt className="kicker">Lugar</dt>
          <dd className="mt-2">{tx.place}</dd>
        </div>
      </dl>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="font-serif max-w-[58ch] space-y-5 text-[1.08rem] text-paper-dim">
          {tx.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside>
          <p className="kicker">Qué se hizo</p>
          <ul className="mt-4 grid gap-2">
            {tx.work.map((w) => (
              <li key={w} className="border-t border-line py-3 text-paper-dim">
                {w}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <nav
        className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8"
        aria-label="Otras transmisiones"
      >
        {prev ? (
          <Link href={`/aire/${prev.slug}`} className="link-line">
            ← {prev.tx} {prev.client}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/aire/${next.slug}`} className="link-line">
            {next.tx} {next.client} →
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
