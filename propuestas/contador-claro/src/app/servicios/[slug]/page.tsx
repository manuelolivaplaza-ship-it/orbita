import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getPerson, getPractice, practices } from "@/lib/data";

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
  const person = getPerson(practice.personSlug);
  const others = practices.filter((item) => item.slug !== practice.slug);

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="shell">
          <Reveal>
            <p className="kicker">Oficio {practice.room}</p>
            <h1 className="font-display mt-4 max-w-[14ch] text-[clamp(2.8rem,7vw,5.6rem)] font-medium leading-[0.92] tracking-tight">
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
                  <span className="text-cobre" aria-hidden>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="kicker">Cuándo escribir</p>
            <ul className="mt-6 space-y-4">
              {practice.when.map((item) => (
                <li key={item} className="border-t border-line pt-4 text-[16px] leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            {person ? (
              <Link
                href={`/equipo/${person.slug}`}
                className="mt-10 flex items-center gap-4 border-t border-line pt-8"
              >
                <span className="relative h-16 w-16 overflow-hidden">
                  <Image
                    src={person.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block text-[12px] tracking-[0.16em] text-muted uppercase">
                    Lo lleva
                  </span>
                  <span className="font-display mt-1 block text-xl font-medium tracking-tight">
                    {person.name}
                  </span>
                  <span className="text-[14px] text-muted">{person.role}</span>
                </span>
              </Link>
            ) : null}
            <Link
              href="/contacto"
              className="mt-8 inline-flex h-12 items-center bg-cobre px-6 text-[0.9rem] font-semibold tracking-wide text-luz hover:bg-cobre-deep"
            >
              Primera hora
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-24">
        <div className="shell">
          <p className="kicker">Las otras libretas</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/servicios/${item.slug}`}
                className="group border-t border-line pt-5"
              >
                <p className="text-[12px] tracking-[0.16em] text-muted">
                  {item.room}
                </p>
                <p className="font-display mt-2 text-2xl font-medium tracking-tight group-hover:text-cobre">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
