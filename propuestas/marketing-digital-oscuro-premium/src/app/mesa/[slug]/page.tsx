import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getOficio, getPerson, team } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) return { title: "Mesa" };
  return {
    title: p.name,
    description: `${p.name}, ${p.role} en Obsidiana. ${p.oficio}.`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) notFound();

  const oficio = getOficio(p.oficioSlug);
  const others = team.filter((item) => item.slug !== p.slug);

  return (
    <div className="shell pb-24">
      <div className="grid gap-12 border-b border-line py-12 lg:grid-cols-12 lg:py-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-surface">
            <Image
              src={p.image}
              alt={p.name}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
        <div className="flex flex-col justify-end lg:col-span-6 lg:col-start-7">
          <p className="kicker">{p.role}</p>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.92]">
            {p.name}
          </h1>
          <p className="mt-6 max-w-[36ch] text-[1.08rem] text-paper-dim">
            {p.oficio}. {p.email}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${p.email}`} className="btn btn-primary">
              Escribir
            </a>
            {oficio ? (
              <Link href={`/oficios/${oficio.slug}`} className="btn btn-ghost">
                Oficio: {oficio.title}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <section className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-paper-dim lg:col-span-7">
          {p.bio.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <aside className="border border-line bg-ink p-7 lg:col-span-5">
          <p className="kicker">Antes</p>
          <ul className="mt-5 grid gap-3">
            {p.before.map((item) => (
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

      <section className="mt-20 border-t border-line pt-12">
        <p className="kicker">La mesa</p>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/mesa/${item.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4] bg-surface">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="25vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-4 font-display text-xl leading-none group-hover:text-ember">
                  {item.name}
                </p>
                <p className="mt-2 font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                  {item.role}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
