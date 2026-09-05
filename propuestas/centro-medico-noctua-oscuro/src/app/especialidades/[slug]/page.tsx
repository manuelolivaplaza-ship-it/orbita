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
  return specialties.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = specialties.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.lead,
  };
}

export default async function SpecialtyPage({ params }: Props) {
  const { slug } = await params;
  const service = specialties.find((item) => item.slug === slug);
  if (!service) notFound();

  const doctor = team.find((person) => person.slug === service.doctorSlug);
  const others = specialties.filter((item) => item.slug !== slug);

  return (
    <>
      <section className="shell grid gap-12 pb-16 pt-32 md:grid-cols-12 md:pb-20 md:pt-40">
        <div className="md:col-span-6">
          <p className="kicker">
            {service.n} · {service.room}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6.2rem)] font-semibold leading-[0.9] tracking-tight">
            {service.title}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-paper-dim">
            {service.lead}
          </p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            {service.duration} · desde {formatCLP(service.priceFrom)}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/agenda?especialidad=${service.slug}`}
              className="btn btn-amber"
            >
              Pedir hora
              <Arrow />
            </Link>
            <Link href="/valores" className="btn btn-ghost">
              Valores
            </Link>
          </div>
        </div>
        <div className="frame relative aspect-[4/5] md:col-span-5 md:col-start-8">
          <Image
            src={service.image}
            alt={service.alt}
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
              Para quién es.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
              {service.forWhom}
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-paper-dim">
              {service.body}
            </p>
            {doctor ? (
              <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                {doctor.name} · {doctor.focus}
              </p>
            ) : null}
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={80}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Incluye
            </p>
            <ul className="mt-6 space-y-4">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-4 text-sm leading-relaxed text-paper-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Cuándo venir
            </p>
            <ul className="mt-6 space-y-4">
              {service.when.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-4 text-sm leading-relaxed text-paper-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24">
        <div className="shell">
          <p className="kicker">Otras salas</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {others.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/especialidades/${item.slug}`}
                className="group"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                  {item.n}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                  {item.lead}
                </p>
                <span className="link-line mt-5 inline-flex items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.24em]">
                  Leer
                  <Arrow className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
