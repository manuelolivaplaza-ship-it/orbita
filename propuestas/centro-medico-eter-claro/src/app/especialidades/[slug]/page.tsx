import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { specialties, team } from "@/data/content";
import { formatCLP } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return specialties.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = specialties.find((entry) => entry.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.lead,
  };
}

export default async function EspecialidadPage({ params }: Props) {
  const { slug } = await params;
  const item = specialties.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const doctor = team.find((person) => person.slug === item.doctorSlug);
  const others = specialties.filter((entry) => entry.slug !== slug);

  return (
    <>
      <section className="shell grid gap-12 pb-16 pt-32 md:grid-cols-12 md:pb-20 md:pt-40">
        <div className="md:col-span-6">
          <p className="kicker">
            Especialidad · {item.n} · {item.room}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6.2rem)] font-light leading-[0.9] tracking-tight">
            {item.title}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-tinta-suave">
            {item.lead}
          </p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris">
            {item.duration} · desde {formatCLP(item.priceFrom)}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/agenda?especialidad=${item.slug}`}
              className="btn btn-ink"
            >
              Agendar hora
              <Arrow />
            </Link>
            <Link href="/#precios" className="btn btn-ghost">
              Valores
            </Link>
          </div>
        </div>
        <div className="frame relative aspect-[4/5] md:col-span-5 md:col-start-8">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-t border-linea py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl font-light tracking-tight">
              Para quién es.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
              {item.forWhom}
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-tinta-suave">
              {item.body}
            </p>
            {doctor ? (
              <p className="mt-8 max-w-md text-sm leading-relaxed text-gris">
                Atiende {doctor.name}. {doctor.credential}. {doctor.extra}.
              </p>
            ) : null}
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={100}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
              En la hora
            </p>
            <ul className="mt-6 space-y-0 border-t border-linea">
              {item.includes.map((line) => (
                <li
                  key={line}
                  className="border-b border-linea py-4 text-tinta-suave"
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-10 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
              Cuándo venir
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-tinta-suave">
              {item.when.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-linea py-20">
        <div className="shell">
          <p className="kicker">Otras especialidades</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {others.slice(0, 3).map((entry) => (
              <Link
                key={entry.slug}
                href={`/especialidades/${entry.slug}`}
                className="group"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
                  {entry.n}
                </p>
                <h3 className="mt-3 font-display text-3xl font-light tracking-tight group-hover:text-eter">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gris">
                  {entry.forWhom}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
