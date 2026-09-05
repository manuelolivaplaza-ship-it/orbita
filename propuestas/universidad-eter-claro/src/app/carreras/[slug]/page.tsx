import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { careers, getCareer, getFaculty } from "@/data/content";
import { formatCLP } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careers.map((career) => ({ slug: career.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) return {};
  return {
    title: career.title,
    description: career.lead,
  };
}

export default async function CareerPage({ params }: Props) {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) notFound();

  const person = getFaculty(career.faculty);
  const others = careers.filter((item) => item.slug !== slug);

  return (
    <>
      <section className="shell grid gap-12 pb-16 pt-32 md:grid-cols-12 md:pb-20 md:pt-40">
        <div className="md:col-span-6">
          <p className="kicker">
            {career.school} · {career.n}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6.2rem)] font-light leading-[0.9] tracking-tight">
            {career.title}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-tinta-suave">
            {career.lead}
          </p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris">
            {career.years} años · {career.jornada} · {career.cupos} cupos ·{" "}
            {formatCLP(career.arancel)}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/admision?carrera=${career.slug}`}
              className="btn btn-ink"
            >
              Postular
              <Arrow />
            </Link>
            <Link href="/carreras" className="btn btn-ghost">
              Las ocho
            </Link>
          </div>
        </div>
        <div className="frame relative aspect-[3/4] md:col-span-5 md:col-start-8">
          <Image
            src={career.image}
            alt={career.alt}
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
              El oficio.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
              {career.body}
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-tinta-suave">
              {career.forWhom}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={100}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-cielo">
              Título
            </p>
            <p className="mt-3 font-display text-3xl font-light">{career.degree}</p>
            <dl className="mt-10 space-y-6">
              {career.plan.map((row) => (
                <div key={row.year} className="border-t border-linea pt-5">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                    Año {row.year}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-tinta-suave">
                    {row.items}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-linea py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Admisión</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              Ponderaciones 2027
            </h2>
            <p className="mt-5 max-w-sm text-tinta-suave">
              PAES 2026, NEM y ranking.{" "}
              {career.portfolio
                ? "Esta carrera pide además un portafolio de diez láminas."
                : "Entrevista de 25 minutos en el campus."}
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {career.weights.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-6 border-t border-linea py-5 last:border-b"
              >
                <span className="text-tinta-suave">{row.label}</span>
                <span className="font-display text-2xl font-light nums">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {person ? (
        <section className="border-t border-linea">
          <div className="grid md:grid-cols-12">
            <div className="relative min-h-[420px] md:col-span-5 md:min-h-[560px]">
              <Image
                src={person.image}
                alt={person.alt}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-16 md:col-span-6 md:col-start-7 md:px-12">
              <Reveal>
                <p className="kicker">{person.role}</p>
                <h2 className="mt-4 font-display text-5xl font-light tracking-tight">
                  {person.name}
                </h2>
                <p className="mt-6 max-w-md text-tinta-suave">
                  {person.credential}. {person.extra}
                </p>
                <p className="mt-6 font-display text-2xl font-light italic text-tinta-suave">
                  {person.line}
                </p>
                <Link
                  href="/cuerpo"
                  className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
                >
                  El cuerpo
                  <Arrow />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-linea py-24">
        <div className="shell">
          <p className="kicker">Egreso</p>
          <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {career.outcomes.map((item) => (
              <li
                key={item}
                className="font-display text-2xl font-light text-tinta-suave"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-linea py-16">
        <div className="shell">
          <p className="kicker">Otras carreras</p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/carreras/${item.slug}`}
                  className="link-line font-display text-2xl font-light"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
