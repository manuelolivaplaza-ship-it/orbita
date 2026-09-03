import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { getLawyer, lawyers, practices } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return lawyers.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lawyer = getLawyer(slug);
  if (!lawyer) return {};
  return {
    title: lawyer.name,
    description: `${lawyer.name}, ${lawyer.role} de Estudio Alba. ${lawyer.practice}.`,
  };
}

export default async function LawyerPage({ params }: Props) {
  const { slug } = await params;
  const lawyer = getLawyer(slug);
  if (!lawyer) notFound();
  const related = practices.filter((item) => item.lawyerSlug === lawyer.slug);
  const others = lawyers.filter((item) => item.slug !== lawyer.slug);

  return (
    <>
      <section className="pt-28 lg:pt-32">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden bg-paper-2">
                <Image
                  src={lawyer.image}
                  alt={`Retrato de ${lawyer.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="overline-label">{lawyer.role}</p>
              <h1 className="font-display mt-4 text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-tight">
                {lawyer.name}
              </h1>
              <p className="mt-4 text-[15px] tracking-[0.12em] text-muted-foreground uppercase">
                {lawyer.practice}
              </p>
              <div className="mt-10 space-y-5 text-[17px] leading-[1.8] text-muted-foreground">
                {lawyer.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8">
                <a
                  href={`mailto:${lawyer.email}`}
                  className="link-underline text-[15px]"
                >
                  {lawyer.email}
                </a>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-3">
            <div>
              <p className="overline-label">Formación</p>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed">
                {lawyer.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="overline-label">Matrícula</p>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed">
                {lawyer.admissions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="overline-label">Idiomas</p>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed">
                {lawyer.languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {related.length ? (
            <div className="mt-16">
              <p className="overline-label mb-5">Prácticas</p>
              <div className="flex flex-wrap gap-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/areas/${item.slug}`}
                    className="border border-line px-4 py-2 text-[12px] tracking-[0.16em] uppercase transition-colors hover:border-ink"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-12">
            <ArrowLink href="/contacto">Escribir al estudio</ArrowLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16">
        <Container>
          <p className="overline-label mb-8">También en la mesa</p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {others.map((person) => (
              <Link key={person.slug} href={`/equipo/${person.slug}`} className="group">
                <div className="img-zoom relative aspect-[3/4] bg-paper-2">
                  <Image
                    src={person.image}
                    alt=""
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-display mt-3 text-lg tracking-tight group-hover:text-bronze">
                  {person.name}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
