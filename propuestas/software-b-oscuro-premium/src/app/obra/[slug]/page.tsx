import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { obraBySlug, obras } from "@/lib/obra";

type Params = { slug: string };

export function generateStaticParams() {
  return obras.map((obra) => ({ slug: obra.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const obra = obraBySlug(slug);
  if (!obra) return { title: "Obra" };
  return {
    title: obra.name,
    description: obra.lede,
  };
}

export default async function ObraSlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const obra = obraBySlug(slug);
  if (!obra) notFound();

  const others = obras.filter((item) => item.slug !== obra.slug);

  return (
    <article>
      <header className="frame grid gap-8 pb-10 pt-10 md:grid-cols-12 md:pb-14 md:pt-14">
        <p className="kicker md:col-span-3 md:pt-3">
          {obra.code} · {obra.year}
        </p>
        <div className="md:col-span-9">
          <p className="text-limbo">
            {obra.sector} · {obra.location} · {obra.altura}
          </p>
          <h1 className="display mt-3 text-[clamp(2.6rem,7vw,5rem)]">
            {obra.headline}
          </h1>
          <p className="mt-6 max-w-[44ch] text-[1.1rem] leading-[1.7] text-niebla">
            {obra.lede}
          </p>
        </div>
      </header>

      <div className="relative aspect-[16/9] min-h-[40vh] w-full">
        <Image
          src={obra.cover}
          alt={obra.coverAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <p className="frame py-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-niebla">
        {obra.location} · {obra.altura}
      </p>

      <div className="frame grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <section className="md:col-span-7">
          <h2 className="font-display text-[1.7rem] font-semibold tracking-[-0.03em]">
            Lo que había
          </h2>
          <p className="mt-4 text-[1.05rem] leading-[1.75] text-niebla">
            {obra.challenge}
          </p>
          <h2 className="mt-12 font-display text-[1.7rem] font-semibold tracking-[-0.03em]">
            La mira
          </h2>
          <ol className="mt-4 space-y-4">
            {obra.approach.map((step) => (
              <li
                key={step}
                className="text-[1.05rem] leading-[1.75] text-marfil-dim"
              >
                {step}
              </li>
            ))}
          </ol>
          <h2 className="mt-12 font-display text-[1.7rem] font-semibold tracking-[-0.03em]">
            En producción
          </h2>
          <p className="mt-4 text-[1.05rem] leading-[1.75] text-niebla">
            {obra.outcome}
          </p>
        </section>
        <aside className="md:col-span-4 md:col-start-9">
          <table className="w-full text-left">
            <caption className="kicker mb-4 caption-top text-left">
              Lectura
            </caption>
            <tbody>
              {obra.reading.map((row) => (
                <tr key={row.label} className="border-t border-linea">
                  <th className="py-4 font-display text-[1.8rem] font-semibold tracking-[-0.03em]">
                    {row.value}
                  </th>
                  <td className="py-4 pl-4 text-sm text-niebla">{row.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <blockquote className="mt-10 border-t border-linea pt-8">
            <p className="font-display text-[1.55rem] font-medium leading-snug tracking-[-0.03em]">
              “{obra.quote.text}”
            </p>
            <footer className="mt-4 text-sm text-niebla">
              {obra.quote.author}
              <br />
              {obra.quote.role}
            </footer>
          </blockquote>
          <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-niebla">
            {obra.stack.join(" · ")}
          </p>
        </aside>
      </div>

      <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
        <Image
          src={obra.atmosphere}
          alt={obra.atmosphereAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <nav className="frame py-16 md:py-20" aria-label="Otras obras">
        <p className="kicker">Otras miras</p>
        <ul className="mt-6 divide-y divide-linea border-y border-linea">
          {others.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/obra/${item.slug}`}
                className="flex flex-wrap items-baseline justify-between gap-3 py-5 hover:text-limbo"
              >
                <span className="font-display text-[1.6rem] font-semibold tracking-[-0.03em]">
                  {item.name}
                </span>
                <span className="text-sm text-niebla">
                  {item.location} · {item.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
