import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getLawyer, getPractice, practices } from "@/lib/data";

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
  const lawyer = getLawyer(practice.lawyerSlug);
  const others = practices.filter((item) => item.slug !== practice.slug);

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="shell">
          <Reveal>
            <p className="kicker">Sala {practice.room}</p>
            <h1 className="font-display mt-4 max-w-[14ch] text-[clamp(2.8rem,7vw,5.6rem)] font-bold leading-[0.92] tracking-tight">
              {practice.title}
            </h1>
            <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-muted">
              {practice.lead}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-[21/9]">
            <Image
              src={practice.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-[17px] leading-[1.8] text-muted">{practice.body}</p>
            <ul className="mt-10 space-y-0">
              {practice.work.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-t border-line py-3 text-[15px]"
                >
                  <span className="text-barro" aria-hidden>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="kicker">Cuándo venir</p>
            <ul className="mt-6 space-y-4">
              {practice.when.map((item) => (
                <li key={item} className="border-l-2 border-barro pl-4 text-[16px] leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            {lawyer ? (
              <Link href={`/equipo/${lawyer.slug}`} className="group mt-12 flex items-center gap-4">
                <span className="relative h-16 w-16 overflow-hidden">
                  <Image
                    src={lawyer.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="font-display block text-lg font-bold group-hover:text-barro">
                    {lawyer.name}
                  </span>
                  <span className="text-[13px] text-muted">
                    {lawyer.role} · lleva esta sala
                  </span>
                </span>
              </Link>
            ) : null}
            <Link
              href="/contacto"
              className="font-display mt-10 inline-flex h-12 items-center bg-barro px-6 text-[0.9rem] font-semibold text-luz hover:bg-barro-deep"
            >
              Pedir una hora
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-20">
        <div className="shell">
          <p className="kicker">Otras salas</p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/areas/${item.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-5"
                >
                  <span className="font-display text-2xl font-bold tracking-tight group-hover:text-barro">
                    {item.title}
                  </span>
                  <span className="text-barro transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
