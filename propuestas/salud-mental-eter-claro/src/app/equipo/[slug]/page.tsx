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

export default async function EquipoSlugPage({ params }: Props) {
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
          <h1 className="mt-5 font-display text-[clamp(3rem,6vw,5.6rem)] font-light leading-[0.9] tracking-tight">
            {person.name}
          </h1>
          <p className="mt-5 text-tinta-suave">{person.credential}</p>
          <p className="text-gris">{person.extra}</p>
          <p className="mt-8 max-w-md font-display text-2xl font-light italic leading-snug text-tinta-suave">
            {person.line}
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
            {person.bio}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/primera" className="btn btn-ink">
              Pedir hora con {person.name.split(" ")[0]}
              <Arrow />
            </Link>
            <Link href="/equipo" className="btn btn-ghost">
              Todo el equipo
            </Link>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-linea py-20">
          <div className="shell">
            <p className="kicker">Áreas</p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((area) => (
                <Link key={area.slug} href={`/areas/${area.slug}`} className="group">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sage-deep">
                    {area.n}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-light tracking-tight group-hover:text-sage-deep">
                    {area.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gris">{area.lead}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-linea py-20">
        <div className="shell">
          <p className="kicker">El resto de la casa</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map((item) => (
              <Reveal key={item.slug}>
                <Link href={`/equipo/${item.slug}`} className="group block">
                  <div className="frame relative aspect-[3/4]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="30vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-light tracking-tight group-hover:text-sage-deep">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-gris">{item.focus}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
