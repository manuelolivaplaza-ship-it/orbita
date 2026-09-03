import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getPerson, getPractice, people } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return people.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return {};
  return {
    title: person.name,
    description: `${person.name}, ${person.role} de CLARO. ${person.practice}.`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();
  const practice = getPractice(person.practiceSlug);
  const others = people.filter((item) => item.slug !== person.slug);

  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="shell grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="relative aspect-[3/4] lg:col-span-5">
            <Image
              src={person.image}
              alt={`Retrato de ${person.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <p className="kicker">
              {person.role} · {person.practice}
            </p>
            <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.8rem)] font-medium leading-[0.94] tracking-tight">
              {person.name}
            </h1>
            <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-muted">
              {person.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8">
              <a href={`mailto:${person.email}`} className="link-line text-[16px]">
                {person.email}
              </a>
            </p>
            {practice ? (
              <Link
                href={`/servicios/${practice.slug}`}
                className="mt-6 inline-flex text-[0.92rem] font-semibold tracking-wide text-cobre"
              >
                Oficio de {practice.title} →
              </Link>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-24">
        <div className="shell grid gap-12 sm:grid-cols-3">
          <div>
            <p className="kicker mb-4">Formación</p>
            <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
              {person.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker mb-4">Colegiatura</p>
            <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
              {person.admissions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker mb-4">Idiomas</p>
            <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
              {person.languages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-24">
        <div className="shell">
          <p className="kicker">La mesa</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {others.map((item) => (
              <Link key={item.slug} href={`/equipo/${item.slug}`} className="group">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={`Retrato de ${item.name}`}
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-display mt-3 text-lg font-medium tracking-tight group-hover:text-cobre">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
