import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import { getPerson, properties, team } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return { title: "Mesa" };
  return {
    title: person.name,
    description: `${person.name}, ${person.role} en HELIO. ${person.beat}.`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();
  const list = properties.filter((item) => item.agente === person.slug);

  return (
    <article className="pt-28 pb-24">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="img-zoom relative aspect-[3/4] bg-luz-2">
            <Image
              src={person.image}
              alt={person.name}
              fill
              priority
              sizes="40vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
        <div className="flex flex-col justify-end lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="kicker">{person.role}</p>
            <h1 className="font-display mt-3 text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-[0.92] tracking-tight">
              {person.name}
            </h1>
            <p className="mt-4 text-[17px] text-muted">{person.beat}</p>
            {person.bio.map((para) => (
              <p
                key={para}
                className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-muted"
              >
                {para}
              </p>
            ))}
            <p className="mt-8 text-[15px]">
              <a href={`mailto:${person.email}`} className="link-line">
                {person.email}
              </a>
              <br />
              <a
                href={`tel:${person.phone.replace(/\s/g, "")}`}
                className="link-line"
              >
                {person.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </div>

      {list.length ? (
        <section className="shell mt-20">
          <p className="kicker">Sus folios</p>
          <h2 className="font-display mt-3 text-3xl font-medium">En lista ahora.</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {list.map((item) => (
              <li key={item.slug}>
                <PropertyCard property={item} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="shell mt-16">
        <Link
          href="/mesa"
          className="font-mono text-[12px] tracking-[0.14em] uppercase link-line"
        >
          Toda la mesa
        </Link>
      </div>
    </article>
  );
}
