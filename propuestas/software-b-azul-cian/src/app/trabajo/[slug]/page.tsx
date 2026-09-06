import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Traza } from "@/components/traza";
import { traces } from "@/lib/traces";
import { getAdjacent, getTrabajo, trabajos } from "@/lib/trabajo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return trabajos.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getTrabajo(slug);
  if (!item) return {};
  return {
    title: `${item.name} · Trabajo`,
    description: item.lede,
  };
}

export default async function TrabajoDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getTrabajo(slug);
  if (!item) notFound();
  const { prev, next } = getAdjacent(slug);
  const trace = traces[item.trace];

  return (
    <>
      <section className="shell pb-8 pt-12 md:pt-16">
        <p className="caption">
          <Link href="/trabajo" className="link-line">
            Trabajo
          </Link>
          <span className="mx-2">·</span>
          {item.code}
        </p>
        <h1 className="display mt-4 max-w-[16ch] text-[clamp(2.6rem,6.5vw,5.2rem)]">
          {item.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-[1.1rem] leading-[1.7] text-muted">
          {item.lede}
        </p>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[0.5rem] bg-line sm:grid-cols-4">
          <Meta label="Cliente" value={item.name} />
          <Meta label="Sector" value={item.sector} />
          <Meta label="Lugar" value={item.location} />
          <Meta label="Año" value={item.year} />
        </dl>
      </section>

      <section className="shell pb-10">
        <figure>
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/7.5]">
            <Image
              src={item.cover}
              alt={item.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <figcaption className="caption mt-3">{item.caption}</figcaption>
        </figure>
      </section>

      <section className="shell grid gap-10 pb-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
            El problema
          </h2>
          <p className="mt-4 text-[1.05rem] leading-[1.75] text-muted">
            {item.challenge}
          </p>
          <h2 className="font-display mt-12 text-2xl tracking-[-0.03em] md:text-3xl">
            Lo que hicimos
          </h2>
          <ol className="mt-4 space-y-4">
            {item.approach.map((step) => (
              <li
                key={step}
                className="text-[1.05rem] leading-[1.75] text-muted"
              >
                {step}
              </li>
            ))}
          </ol>
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <blockquote className="border-l-2 border-cian pl-5">
            <p className="text-[1.08rem] leading-[1.65]">“{item.quote.text}”</p>
            <footer className="mt-4 text-sm text-muted">
              {item.quote.author}
              <br />
              {item.quote.role}
            </footer>
          </blockquote>
          <p className="mt-10 text-[1.05rem] leading-[1.75]">{item.outcome}</p>
          <p className="caption mt-8">Stack que heredan</p>
          <p className="mt-2 font-mono text-[0.78rem] tracking-[0.04em] text-muted">
            {item.stack.join(" · ")}
          </p>
        </aside>
      </section>

      <section className="shell pb-20">
        <p className="caption mb-4">La traza de este encargo</p>
        <Traza trace={trace} autoPlay={false} />
      </section>

      <nav
        className="shell flex flex-col gap-6 border-t border-line py-12 md:flex-row md:justify-between"
        aria-label="Otros encargos"
      >
        <Link href={`/trabajo/${prev.slug}`} className="group max-w-sm">
          <p className="caption">Anterior</p>
          <p className="font-display mt-2 text-2xl tracking-[-0.03em] group-hover:text-cian-deep">
            {prev.name}
          </p>
        </Link>
        <Link href={`/trabajo/${next.slug}`} className="group max-w-sm md:text-right">
          <p className="caption">Siguiente</p>
          <p className="font-display mt-2 text-2xl tracking-[-0.03em] group-hover:text-cian-deep">
            {next.name}
          </p>
        </Link>
      </nav>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-papel px-4 py-3">
      <dt className="caption">{label}</dt>
      <dd className="mt-1 text-sm">{value}</dd>
    </div>
  );
}
