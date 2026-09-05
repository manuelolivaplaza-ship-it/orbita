import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { works } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) return {};
  return {
    title: `${work.client} — ${work.title}`,
    description: work.excerpt,
    openGraph: {
      images: [{ url: work.cover, width: 1600, height: 900 }],
    },
  };
}

export default async function TrabajoSlugPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) notFound();
  const others = works.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="pt-28 lg:pt-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">
              {work.sector} · {work.year}
            </p>
            <h1 className="font-display mt-4 max-w-[18ch] text-[clamp(2.6rem,6.4vw,5.4rem)] font-medium leading-[0.92] tracking-tight">
              {work.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
              {work.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {work.services.map((item) => (
                <span
                  key={item}
                  className="border border-line px-3 py-1 text-[12px] font-semibold tracking-[0.12em] uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="relative mt-12 aspect-[16/9] min-h-[280px] lg:aspect-[2.3/1]">
          <Image
            src={work.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-b border-line bg-luz-2">
        <div className="shell grid grid-cols-1 gap-8 py-10 sm:grid-cols-3">
          {work.stats.map((item) => (
            <div key={item.label}>
              <p className="font-display nums text-4xl font-medium tracking-tight lg:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 text-[13px] tracking-[0.12em] text-muted uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">El problema</p>
            <p className="mt-4 text-[17px] leading-relaxed">{work.challenge}</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4">
            <p className="kicker">El sistema</p>
            <p className="mt-4 text-[17px] leading-relaxed">{work.approach}</p>
          </Reveal>
          <Reveal delay={0.16} className="lg:col-span-4">
            <p className="kicker">La luz</p>
            <p className="mt-4 text-[17px] leading-relaxed">{work.result}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="shell grid gap-4 lg:grid-cols-12">
          {work.gallery.map((src, index) => (
            <div
              key={src}
              className={`relative ${
                index === 0
                  ? "aspect-[16/10] lg:col-span-7"
                  : "aspect-[4/5] lg:col-span-5"
              }`}
            >
              <Image src={src} alt="" fill sizes="50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell">
          <Reveal className="border border-line bg-luz-2 px-8 py-12 lg:px-16">
            <p className="font-display max-w-3xl text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium leading-snug tracking-tight">
              “{work.quote.text}”
            </p>
            <p className="mt-8 text-[15px] font-semibold">{work.quote.author}</p>
            <p className="mt-1 text-[14px] text-muted">{work.quote.role}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-24">
        <div className="shell">
          <p className="kicker">Sigue mirando</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {others.map((item) => (
              <Link key={item.slug} href={`/trabajo/${item.slug}`} className="group">
                <div className="img-zoom relative aspect-[16/10]">
                  <Image
                    src={item.cover}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-[12px] tracking-[0.16em] text-muted uppercase">
                  {item.client}
                </p>
                <h2 className="font-display mt-1 text-2xl font-medium tracking-tight">
                  {item.title}
                </h2>
              </Link>
            ))}
          </div>
          <Link
            href="/contacto"
            className="mt-14 inline-flex h-12 items-center bg-sol px-6 text-[0.92rem] font-semibold text-ink hover:bg-sol-deep"
          >
            Pedir un brief
          </Link>
        </div>
      </section>
    </>
  );
}
