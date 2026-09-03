import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { cases, getCase, getOficio } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return { title: "Trabajo" };
  return {
    title: `${c.client} · ${c.sector}`,
    description: c.lead,
    openGraph: {
      images: [{ url: c.cover, width: 1600, height: 900 }],
    },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const related = cases.filter((item) => item.slug !== c.slug).slice(0, 2);

  return (
    <article>
      <div className="relative min-h-[70svh] overflow-hidden">
        <Image
          src={c.cover}
          alt={`${c.client} · ${c.sector}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/45 to-void/30" />
        <div className="shell relative flex min-h-[70svh] flex-col justify-end pb-12 pt-28">
          <p className="kicker">
            {c.folio} · {c.client} · {c.year}
          </p>
          <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.92]">
            {c.title}
          </h1>
          <p className="mt-5 max-w-[44ch] text-[1.08rem] text-paper-dim">
            {c.lead}
          </p>
        </div>
      </div>

      <div className="shell py-16 sm:py-20">
        <dl className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {c.metrics.map((m) => (
            <div key={m.label} className="bg-void px-5 py-6">
              <dt className="kicker">{m.label}</dt>
              <dd className="mt-2 font-display text-[1.9rem] leading-none tabular">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {c.body.map((para) => (
              <p
                key={para}
                className="mt-5 max-w-[58ch] text-[1.05rem] leading-relaxed text-paper-dim first:mt-0"
              >
                {para}
              </p>
            ))}
            <p className="mt-8 max-w-[50ch] border-l border-ember pl-5 text-[0.95rem] text-paper-dim">
              {c.result}
            </p>
          </Reveal>
          <aside className="border border-line bg-ink p-7 lg:col-span-5">
            <p className="kicker">Lo que se cortó</p>
            <ul className="mt-5 grid gap-3">
              {c.corte.map((item) => (
                <li
                  key={item}
                  className="border-b border-line pb-3 text-[0.95rem] text-paper-dim last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="kicker mt-8">Oficios</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.oficios.map((slugOficio) => {
                const o = getOficio(slugOficio);
                if (!o) return null;
                return (
                  <li key={slugOficio}>
                    <Link
                      href={`/oficios/${o.slug}`}
                      className="inline-flex min-h-9 items-center border border-line px-3 font-mono text-[0.68rem] tracking-[0.14em] uppercase text-paper-dim hover:border-ember hover:text-ember"
                    >
                      {o.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/diagnostico" className="btn btn-primary mt-8 w-full">
              Pedir un diagnóstico
            </Link>
          </aside>
        </div>

        {c.gallery.length > 1 ? (
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {c.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                {i === 0 ? (
                  <span className="sr-only">{c.client}</span>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-20 border-t border-line pt-12">
          <p className="kicker">Sigue en la mesa</p>
          <ul className="mt-6 grid gap-8 md:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/trabajo/${item.slug}`} className="group block">
                  <div className="img-zoom relative aspect-[16/9] bg-ink">
                    <Image
                      src={item.cover}
                      alt=""
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 kicker">
                    {item.client} · {item.sector}
                  </p>
                  <h2 className="mt-2 font-display text-2xl leading-tight group-hover:text-ember">
                    {item.title}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
