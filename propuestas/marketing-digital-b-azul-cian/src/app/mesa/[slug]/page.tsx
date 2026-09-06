import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getPerson, mesa } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mesa.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return {};
  return {
    title: person.name,
    description: `${person.name}, ${person.role} en MAREA. ${person.station} en Valparaíso.`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();
  const others = mesa.filter((item) => item.slug !== person.slug);

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="mark">
            {person.role} · estación {person.station}
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.8rem,7vw,5.4rem)] font-medium leading-[0.92] tracking-tight">
            {person.name}
          </h1>
          <div className="rule mt-7 w-16" />
          {person.bio.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="mt-6 max-w-xl text-[17px] leading-[1.8] text-muted"
            >
              {p}
            </p>
          ))}
          <p className="mt-8 text-[16px]">
            <a href={`mailto:${person.email}`} className="link-line">
              {person.email}
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
          <div
            className="flex h-24 w-24 items-center justify-center border border-line font-mono text-[1.4rem] text-cyan-deep"
            aria-hidden
          >
            {person.initials}
          </div>
          <p className="mark mt-10">Formación</p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
            {person.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mark mt-8">Firma</p>
          <p className="mt-3 text-[15px] text-muted">{person.signs.join(" · ")}</p>
          <Link
            href={`/canales/${person.stationSlug}`}
            className="mt-8 inline-block text-[15px] font-medium link-line"
          >
            Canal {person.station}
          </Link>
          <p className="mark mt-14">El resto de la mesa</p>
          <ul className="mt-4">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/mesa/${item.slug}`}
                  className="group flex items-baseline justify-between gap-4 border-t border-line py-3"
                >
                  <span className="font-display text-[1.25rem] tracking-tight group-hover:text-blue">
                    {item.name}
                  </span>
                  <span className="text-[13px] text-muted">{item.role}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
