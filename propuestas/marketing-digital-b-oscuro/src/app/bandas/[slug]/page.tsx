import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { bands, getBand, getPerson } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return bands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const band = getBand(slug);
  if (!band) return {};
  return {
    title: band.title,
    description: band.lead,
  };
}

export default async function BandaPage({ params }: Props) {
  const { slug } = await params;
  const band = getBand(slug);
  if (!band) notFound();
  const person = getPerson(band.personSlug);

  return (
    <div className="shell pb-24">
      <PageIntro
        folio={band.freq}
        kicker="Banda"
        title={band.title}
        lede={band.lead}
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="tx-frame img-zoom relative aspect-[16/10]">
            <Image
              src={band.image}
              alt={`Ambiente de la banda ${band.title} en el estudio SEÑAL`}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="font-serif mt-10 max-w-[58ch] space-y-5 text-[1.08rem] text-paper-dim">
            {band.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="h-fit border border-line bg-ink p-6 sm:p-8">
          <p className="kicker">Honorario</p>
          <p className="mt-3 font-display text-[1.8rem] leading-none">{band.price}</p>
          <p className="mt-3 text-sm text-muted">{band.priceNote}</p>
          {person ? (
            <Link
              href={`/mesa/${person.slug}`}
              className="mt-8 flex items-center gap-4 border-t border-line pt-6"
            >
              <span className="relative h-14 w-14 shrink-0 overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="56px"
                  className="object-cover object-top"
                />
              </span>
              <span>
                <span className="block text-sm text-muted">Firma</span>
                <span className="link-line">{person.name}</span>
              </span>
            </Link>
          ) : null}
          <Link href="/lectura" className="btn btn-primary mt-8 w-full">
            Pedir lectura
          </Link>
        </aside>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        <div>
          <p className="kicker">Qué entra</p>
          <ul className="mt-4 grid gap-2 text-paper-dim">
            {band.work.map((w) => (
              <li key={w} className="border-t border-line py-3">
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">Cuándo viene</p>
          <ul className="mt-4 grid gap-2 text-paper-dim">
            {band.when.map((w) => (
              <li key={w} className="border-t border-line py-3">
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">Cuándo no</p>
          <ul className="mt-4 grid gap-2 text-paper-dim">
            {band.not.map((w) => (
              <li key={w} className="border-t border-line py-3">
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
