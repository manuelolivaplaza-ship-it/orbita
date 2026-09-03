import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getDoctor, getSpecialty, specialties } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return specialties.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  if (!spec) return {};
  return {
    title: spec.title,
    description: spec.lead,
  };
}

export default async function SpecialtyPage({ params }: Props) {
  const { slug } = await params;
  const spec = getSpecialty(slug);
  if (!spec) notFound();
  const doctor = getDoctor(spec.doctorSlug);
  const others = specialties.filter((item) => item.slug !== spec.slug);

  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="shell grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="relative aspect-[4/3] lg:col-span-6">
            <Image
              src={spec.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:pt-6">
            <p className="kicker">
              Sala {spec.room} · {spec.duration}
            </p>
            <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.6rem)] font-medium leading-[0.94] tracking-tight">
              {spec.title}
            </h1>
            <p className="mt-6 text-[18px] leading-relaxed text-muted">{spec.lead}</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6">
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-muted uppercase">
                  Primera hora
                </dt>
                <dd className="font-display mt-1 text-2xl">{spec.firstVisit}</dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.16em] text-muted uppercase">
                  Control
                </dt>
                <dd className="font-display mt-1 text-2xl">{spec.control}</dd>
              </div>
            </dl>
            <Link
              href={`/agenda?sala=${spec.slug}`}
              className="font-sans mt-8 inline-flex h-12 items-center bg-sol px-6 text-[0.88rem] font-semibold tracking-wide text-papel hover:bg-sol-deep"
            >
              Pedir hora en esta sala
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="space-y-5 text-[17px] leading-[1.8] text-muted lg:col-span-6">
            {spec.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
            <div>
              <p className="kicker mb-4">En esta sala</p>
              <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
                {spec.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker mb-4">Venga si</p>
              <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
                {spec.when.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {doctor ? (
        <section className="border-t border-line py-20">
          <div className="shell grid items-center gap-10 lg:grid-cols-12">
            <div className="relative aspect-[3/4] lg:col-span-4">
              <Image
                src={doctor.image}
                alt={`Retrato de ${doctor.name}`}
                fill
                sizes="(min-width: 1024px) 33vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="kicker">{doctor.role}</p>
              <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[0.98] tracking-tight">
                {doctor.name}
              </h2>
              <p className="font-display mt-6 text-[1.4rem] leading-snug text-muted">
                «{doctor.quote}»
              </p>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">
                {doctor.bio[0]}
              </p>
              <Link
                href={`/equipo/${doctor.slug}`}
                className="font-sans mt-6 inline-flex text-[0.88rem] font-semibold tracking-wide text-sol"
              >
                Ver ficha →
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line py-16">
        <div className="shell">
          <p className="kicker mb-8">Otras salas</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/especialidades/${item.slug}`}
                className="border border-line bg-papel p-5 transition-colors hover:border-sol"
              >
                <p className="font-sans nums text-[12px] text-sol">{item.room}</p>
                <p className="font-display mt-2 text-[1.25rem] font-medium">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
