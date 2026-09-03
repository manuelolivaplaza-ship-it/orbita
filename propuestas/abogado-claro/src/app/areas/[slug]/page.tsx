import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { getLawyer, getPractice, practices } from "@/lib/data";

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
  const lawyer = getLawyer(practice.lawyerSlug);
  const others = practices.filter((item) => item.slug !== practice.slug);

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40">
        <Container>
          <Reveal>
            <p className="overline-label">
              Área {practice.number} · Práctica
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              {practice.title}
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              {practice.lead}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="relative aspect-[16/9] overflow-hidden bg-paper-2 lg:aspect-[21/9]">
            <Image
              src={practice.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="text-[17px] leading-[1.8] text-muted-foreground">
                {practice.body}
              </p>
              <ul className="mt-10 space-y-3">
                {practice.work.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-line pt-3 text-[15px]"
                  >
                    <span className="text-bronze" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <p className="overline-label">Asuntos típicos</p>
              <ul className="mt-6 space-y-5">
                {practice.matters.map((item) => (
                  <li
                    key={item}
                    className="font-display text-2xl leading-snug tracking-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {lawyer ? (
                <Link
                  href={`/equipo/${lawyer.slug}`}
                  className="mt-12 flex items-center gap-4 border-t border-line pt-8"
                >
                  <span className="relative block h-16 w-16 overflow-hidden">
                    <Image
                      src={lawyer.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block text-[12px] tracking-[0.18em] text-muted-foreground uppercase">
                      Responsable
                    </span>
                    <span className="font-display mt-1 block text-2xl">
                      {lawyer.name}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {lawyer.role}
                    </span>
                  </span>
                </Link>
              ) : null}
              <div className="mt-10">
                <ArrowLink href="/contacto">Consultar esta práctica</ArrowLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16">
        <Container>
          <p className="overline-label mb-8">Otras prácticas</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/areas/${item.slug}`}
                className="group border-t border-line pt-5"
              >
                <p className="font-display text-bronze text-sm">{item.number}</p>
                <p className="font-display mt-2 text-2xl tracking-tight group-hover:text-bronze">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
