import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Crop } from "@/components/crop";
import { Reveal } from "@/components/reveal";
import { getPerson, team } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return {};
  return {
    title: person.name,
    description: `${person.name}, ${person.role} en NORTE. ${person.focus}`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();
  const others = team.filter((item) => item.slug !== person.slug);

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Crop
            src={person.image}
            alt={person.name}
            className="aspect-[3/4]"
            sizes="45vw"
            priority
          />
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col justify-end lg:col-span-6 lg:col-start-7">
          <p className="kicker">{person.role}</p>
          <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.92] tracking-tight">
            {person.name}
          </h1>
          <div className="horizon mt-7 max-w-20" />
          <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.8] text-muted">
            {person.bio}
          </p>
          <p className="mt-6 text-[14px] tracking-[0.08em] text-cielo uppercase">
            {person.focus}
          </p>
          <p className="mt-2 text-[13px] text-muted">Luz de trabajo · {person.hours}</p>
          <Link
            href="/contacto"
            className="mt-10 inline-flex h-12 w-fit items-center bg-norte px-6 text-[0.82rem] font-semibold tracking-[0.12em] text-nieve uppercase hover:bg-norte-deep"
          >
            Escribir a la mesa
          </Link>
        </Reveal>
      </div>

      <div className="shell mt-20 border-t border-linea pt-10">
        <p className="kicker">El resto de la mesa</p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/mesa/${item.slug}`} className="group block">
                <p className="font-display text-[1.4rem] tracking-tight group-hover:text-norte">
                  {item.name}
                </p>
                <p className="mt-1 text-[13px] text-muted">{item.role}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
