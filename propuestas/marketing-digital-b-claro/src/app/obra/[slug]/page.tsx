import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Crop } from "@/components/crop";
import { Reveal } from "@/components/reveal";
import { getWork, works } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: `${work.client} — ${work.title}`,
    description: work.excerpt,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  const others = works.filter((item) => item.slug !== work.slug).slice(0, 2);

  return (
    <>
      <section className="pt-32 pb-10 lg:pt-40">
        <div className="shell">
          <Reveal>
            <p className="kicker">
              {work.client} · {work.year}
            </p>
            <h1 className="font-display mt-4 max-w-[16ch] text-[clamp(2.6rem,6.6vw,5.4rem)] leading-[0.92] tracking-tight">
              {work.title}
            </h1>
            <div className="horizon mt-7 max-w-24" />
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
              {work.excerpt}
            </p>
            <p className="mt-4 text-[13px] tracking-[0.14em] text-cielo uppercase">
              {work.sector}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <Crop
            src={work.cover}
            alt=""
            className="aspect-[16/9]"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="shell grid grid-cols-3 gap-6 border-y border-linea py-8">
          {work.stats.map((item) => (
            <div key={item.label}>
              <p className="font-display nums text-2xl tracking-tight lg:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-[12px] tracking-[0.12em] text-muted uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="space-y-10 lg:col-span-7">
            <div>
              <p className="kicker">El desnivel</p>
              <p className="mt-4 text-[17px] leading-[1.8] text-muted">{work.challenge}</p>
            </div>
            <div>
              <p className="kicker">La lectura</p>
              <p className="mt-4 text-[17px] leading-[1.8] text-muted">{work.approach}</p>
            </div>
            <div>
              <p className="kicker">Lo que se vio</p>
              <p className="mt-4 text-[17px] leading-[1.8] text-muted">{work.result}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="kicker">Oficios</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              {work.services.map((item) => (
                <li key={item} className="border-t border-linea py-2">
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="mt-10 border-t border-linea pt-8">
              <p className="font-display text-[1.55rem] leading-[1.25] tracking-tight">
                “{work.quote.text}”
              </p>
              <footer className="mt-5 text-[14px] text-muted">
                <span className="text-tinta">{work.quote.author}</span>
                <br />
                {work.quote.role}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {work.gallery[1] ? (
        <section className="pb-24">
          <div className="shell">
            <Crop
              src={work.gallery[1]}
              alt=""
              className="aspect-[16/9] lg:aspect-[21/9]"
              sizes="100vw"
            />
          </div>
        </section>
      ) : null}

      <section className="border-t border-linea py-16 lg:py-20">
        <div className="shell">
          <p className="kicker">Otra obra</p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {others.map((item) => (
              <Link key={item.slug} href={`/obra/${item.slug}`} className="group block">
                <h2 className="font-display text-[1.8rem] leading-tight tracking-tight group-hover:text-norte">
                  {item.client}
                </h2>
                <p className="mt-2 text-[15px] text-muted">{item.title}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/contacto"
            className="mt-12 inline-flex h-12 items-center bg-norte px-6 text-[0.82rem] font-semibold tracking-[0.12em] text-nieve uppercase hover:bg-norte-deep"
          >
            Pedir una lectura
          </Link>
        </div>
      </section>
    </>
  );
}
