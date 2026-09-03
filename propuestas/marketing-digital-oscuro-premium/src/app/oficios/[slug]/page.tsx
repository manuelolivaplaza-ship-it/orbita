import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import {
  casesByOficio,
  getOficio,
  oficios,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return oficios.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const o = getOficio(slug);
  if (!o) return { title: "Oficio" };
  return {
    title: o.title,
    description: o.lead,
  };
}

export default async function OficioPage({ params }: Props) {
  const { slug } = await params;
  const o = getOficio(slug);
  if (!o) notFound();

  const related = casesByOficio(o.slug);
  const others = oficios.filter((item) => item.slug !== o.slug);

  return (
    <div className="shell pb-24">
      <PageIntro
        folio={o.folio}
        kicker="Oficio"
        title={o.title}
        lede={o.lead}
      />

      <section className="mt-14 grid gap-12 lg:grid-cols-12">
        <Reveal className="space-y-5 text-[1.05rem] leading-relaxed text-paper-dim lg:col-span-7">
          {o.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </Reveal>
        <aside className="border border-line bg-ink p-7 lg:col-span-5">
          <p className="kicker">Cuándo viene</p>
          <ul className="mt-5 grid gap-3">
            {o.when.map((item) => (
              <li
                key={item}
                className="border-b border-line pb-3 text-[0.95rem] text-paper-dim last:border-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="kicker mt-8">Cuándo no</p>
          <ul className="mt-5 grid gap-3">
            {o.not.map((item) => (
              <li
                key={item}
                className="border-b border-line pb-3 text-[0.95rem] text-paper-dim last:border-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-20">
        <p className="kicker">Qué incluye</p>
        <ul className="mt-6 grid gap-px bg-line sm:grid-cols-2">
          {o.work.map((item) => (
            <li key={item} className="bg-void px-5 py-5 text-paper-dim">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {related.length ? (
        <section className="mt-20">
          <p className="kicker">En la mesa</p>
          <ul className="mt-6 grid gap-8 md:grid-cols-2">
            {related.map((c) => (
              <li key={c.slug}>
                <Link href={`/trabajo/${c.slug}`} className="group block">
                  <div className="img-zoom relative aspect-[16/9] bg-ink">
                    <Image
                      src={c.cover}
                      alt=""
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 font-display text-2xl leading-tight group-hover:text-ember">
                    {c.client}
                  </p>
                  <p className="mt-1 text-paper-dim">{c.metric} {c.metricLabel}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-20 border-t border-line pt-12">
        <p className="kicker">Los otros oficios</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {others.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/oficios/${item.slug}`}
                className="inline-flex min-h-10 items-center border border-line px-4 font-mono text-[0.68rem] tracking-[0.14em] uppercase text-paper-dim hover:border-ember hover:text-ember"
              >
                {item.folio} {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/diagnostico" className="btn btn-primary mt-10">
          Pedir un diagnóstico
        </Link>
      </section>
    </div>
  );
}
