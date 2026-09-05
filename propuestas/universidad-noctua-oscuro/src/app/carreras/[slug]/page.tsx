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
          <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6.2rem)] font-semibold leading-[0.9] tracking-tight">
            {career.title}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-paper-dim">
            {career.lead}
          </p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            {career.years} años · {career.jornada} · {career.cupos} cupos ·{" "}
            {formatCLP(career.arancel)}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/admision?carrera=${career.slug}`}
              className="btn btn-amber"
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

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl font-semibold tracking-tight">
              El oficio.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
              {career.body}
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-paper-dim">
              {career.forWhom}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={100}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
              Título
            </p>
            <p className="mt-3 font-display text-3xl font-semibold">
              {career.degree}
            </p>
            <dl className="mt-10 space-y-6">
              {career.plan.map((row) => (
                <div key={row.year} className="border-t border-line pt-5">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                    Año {row.year}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-paper-dim">
                    {row.items}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Admisión</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Ponderaciones 2027
            </h2>
            <p className="mt-5 max-w-sm text-paper-dim">
              PAES 2026, NEM y ranking.{" "}
              {career.portfolio
                ? "Esta carrera pide además un portafolio de diez láminas. "
                : ""}
              {career.vigilia
                ? "Incluye una vigilia de observación en el campus, de 20:00 a 00:30."
                : "No pide vigilia."}
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {career.weights.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-6 border-t border-line py-5 last:border-b"
              >
                <span className="text-sm text-paper-dim">{row.label}</span>
                <span className="font-display text-2xl font-semibold nums tracking-tight">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Egreso</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Dónde cabe el oficio.
            </h2>
            <ul className="mt-8 space-y-4">
              {career.outcomes.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-4 font-display text-2xl font-semibold tracking-tight"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          {person ? (
            <Reveal className="lg:col-span-5 lg:col-start-8" delay={80}>
              <p className="kicker">Titular</p>
              <div className="frame relative mt-6 aspect-[3/4] max-w-sm">
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
                {person.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {person.credential}. {person.extra}
              </p>
              <p className="mt-4 font-display text-xl italic text-paper-dim">
                {person.line}
              </p>
              <Link
                href="/cuerpo"
                className="link-line mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
              >
                El cuerpo
                <Arrow />
              </Link>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="border-t border-line py-24">
        <div className="shell">
          <p className="kicker">Las otras</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/carreras/${item.slug}`}
                className="group flex items-baseline justify-between gap-4 border-t border-line py-5"
              >
                <span className="font-display text-2xl font-semibold tracking-tight group-hover:text-amber">
                  {item.title}
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {item.n}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
