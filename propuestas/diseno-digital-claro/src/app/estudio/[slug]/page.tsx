import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/cta";
import { getPerson, team } from "@/lib/team";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return team.map((person) => ({ slug: person.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return { title: "Estudio" };
  return {
    title: person.name,
    description: `${person.name}, ${person.role} en Nítida. ${person.short}`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  const others = team.filter((item) => item.slug !== person.slug);

  return (
    <>
      <article className="wrap grid gap-12 pb-8 pt-12 md:grid-cols-12 md:gap-8 md:pb-16 md:pt-20">
        <div className="img-frame relative aspect-[3/4] md:col-span-5">
          <Image
            src={person.photo}
            alt={person.photoAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-between md:col-span-6 md:col-start-7 md:py-4">
          <div>
            <p className="eyebrow">{person.role}</p>
            <h1 className="display mt-4 text-[clamp(2.8rem,6vw,5.2rem)]">
              {person.name}
            </h1>
            <p className="mt-6 text-[1.12rem] leading-[1.7] text-muted">
              {person.short}
            </p>
            <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.75]">
              {person.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {person.focus.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1 text-xs tracking-[0.08em] text-muted uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <nav aria-label="La mesa" className="wrap border-t border-line py-16 md:py-20">
        <p className="eyebrow">La mesa</p>
        <ul className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">
          {others.map((other) => (
            <li key={other.slug}>
              <Link href={`/estudio/${other.slug}`} className="group block">
                <div className="img-frame relative aspect-[3/4]">
                  <Image
                    src={other.photo}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </div>
                <p className="mt-3 text-sm tracking-[-0.01em]">{other.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Cta />
    </>
  );
}
