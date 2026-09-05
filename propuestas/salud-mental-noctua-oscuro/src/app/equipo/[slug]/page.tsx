import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { areas, team } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = team.find((item) => item.slug === slug);
  if (!person) return {};
  return {
    title: person.name,
    description: person.line,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = team.find((item) => item.slug === slug);
  if (!person) notFound();

  const related = areas.filter((area) =>
    (person.areas as readonly string[]).includes(area.slug),
  );
  const others = team.filter((item) => item.slug !== slug);

  return (
    <>
      <section className="shell grid gap-12 pb-16 pt-32 md:grid-cols-12 md:pb-20 md:pt-40">
        <div className="frame relative aspect-[3/4] md:col-span-5">
          <Image
            src={person.image}
            alt={person.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-end md:col-span-6 md:col-start-7">
          <p className="kicker">{person.focus}</p>
          <h1 className="mt-5 font-display text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-[0.9] tracking-tight">
            {person.name}
          </h1>
          <p className="mt-6 text-lg text-paper-dim">{person.credential}</p>
          <p className="mt-2 text-sm text-muted">{person.extra}</p>
          <p className="mt-8 max-w-md font-display text-2xl italic leading-snug text-paper-dim">
            {person.line}
          </p>
          <p className="mt-8 max-w-md text-[16px] leading-relaxed text-paper-dim">
            {person.bio}
          </p>
          <Link
            href={`/primera?area=${person.areas[0]}`}
            className="btn btn-amber mt-10 w-fit"
          >
            Pedir hora con {person.name.split(" ")[0]}
            <Arrow />
          </Link>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-line py-20">
          <div className="shell">
            <p className="kicker">Áreas</p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((area) => (
                <Link key={area.slug} href={`/areas/${area.slug}`} className="group">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                    {area.n}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight group-hover:text-amber">
                    {area.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{area.thought}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line py-20">
        <div className="shell">
          <Reveal>
            <p className="kicker">El resto de la casa</p>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((item) => (
              <Link key={item.slug} href={`/equipo/${item.slug}`} className="group">
                <div className="frame relative aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight group-hover:text-amber">
                  {item.name}
                </h3>
                <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted">
                  {item.focus}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
