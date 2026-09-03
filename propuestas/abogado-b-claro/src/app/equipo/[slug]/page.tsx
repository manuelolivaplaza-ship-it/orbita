import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getLawyer, getPractice, lawyers } from "@/lib/data";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return lawyers.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getLawyer(slug);
  if (!person) return {};
  return {
    title: person.name,
    description: `${person.name}, ${person.role} de ATRIO. ${person.practice}.`,
  };
}

export default async function LawyerPage({ params }: Props) {
  const { slug } = await params;
  const person = getLawyer(slug);
  if (!person) notFound();
  const practice = getPractice(person.practiceSlug);
  const others = lawyers.filter((item) => item.slug !== person.slug);

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
            <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.8rem)] font-bold leading-[0.94] tracking-tight">
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
                href={`/areas/${practice.slug}`}
                className="font-display mt-6 inline-flex text-[0.92rem] font-semibold text-barro"
              >
                Sala de {practice.title} →
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

      <section className="border-t border-line py-16">
        <div className="shell flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-2xl font-bold tracking-tight">
            Pedir una hora con {person.name.split(" ")[0]}
          </p>
          <div className="flex gap-3">
            <a
              href={site.whatsapp}
              className="font-display inline-flex h-12 items-center border border-ink px-5 text-[0.9rem] font-semibold"
            >
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="font-display inline-flex h-12 items-center bg-barro px-5 text-[0.9rem] font-semibold text-luz"
            >
              Escribir
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-20">
        <div className="shell">
          <p className="kicker">El resto de la mesa</p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {others.map((item) => (
              <Link key={item.slug} href={`/equipo/${item.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-display mt-3 font-bold group-hover:text-barro">
                  {item.name}
                </p>
                <p className="text-[13px] text-muted">{item.practice}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
