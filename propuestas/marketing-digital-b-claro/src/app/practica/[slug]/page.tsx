import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Crop } from "@/components/crop";
import { Reveal } from "@/components/reveal";
import { getPractice, practices } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practices.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return {};
  return {
    title: practice.title,
    description: practice.lead,
  };
}

export default async function PracticePage({ params }: Props) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();
  const others = practices.filter((item) => item.slug !== practice.slug);

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="shell">
          <Reveal>
            <p className="kicker">Práctica · {practice.kicker}</p>
            <h1 className="font-display mt-4 max-w-[12ch] text-[clamp(2.8rem,7vw,5.8rem)] leading-[0.92] tracking-tight">
              {practice.title}
            </h1>
            <div className="horizon mt-7 max-w-24" />
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-muted">
              {practice.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <Crop
            src={practice.image}
            alt=""
            className="aspect-[16/9] lg:aspect-[21/9]"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-[17px] leading-[1.8] text-muted">{practice.body}</p>
            <ul className="mt-10">
              {practice.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-t border-linea py-3 text-[15px]"
                >
                  <span className="text-norte" aria-hidden>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="kicker">Las otras horas</p>
            <ul className="mt-5 space-y-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/practica/${item.slug}`}
                    className="group flex items-baseline justify-between gap-4 border-t border-linea py-3"
                  >
                    <span className="font-display text-[1.35rem] tracking-tight group-hover:text-norte">
                      {item.title}
                    </span>
                    <span className="nums text-[13px] text-muted">{item.kicker}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="mt-10 inline-flex h-12 items-center bg-norte px-6 text-[0.82rem] font-semibold tracking-[0.12em] text-nieve uppercase hover:bg-norte-deep"
            >
              Pedir una lectura
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
