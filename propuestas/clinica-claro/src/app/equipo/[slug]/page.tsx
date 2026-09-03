import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { doctors, getDoctor, getSpecialty } from "@/lib/data";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return doctors.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getDoctor(slug);
  if (!person) return {};
  return {
    title: person.name,
    description: `${person.name}, ${person.role} de CLARO. ${person.specialty}.`,
  };
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const person = getDoctor(slug);
  if (!person) notFound();
  const spec = getSpecialty(person.specialtySlug);
  const others = doctors.filter((item) => item.slug !== person.slug);

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
              {person.role} · {person.specialty}
            </p>
            <h1 className="font-display mt-4 text-[clamp(2.5rem,5.6vw,4.4rem)] font-medium leading-[0.94] tracking-tight">
              {person.name}
            </h1>
            <p className="font-display mt-8 text-[1.5rem] leading-snug text-muted">
              «{person.quote}»
            </p>
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/agenda?sala=${person.specialtySlug}`}
                className="font-sans inline-flex h-12 items-center bg-sol px-6 text-[0.88rem] font-semibold tracking-wide text-papel hover:bg-sol-deep"
              >
                Pedir hora
              </Link>
              {spec ? (
                <Link
                  href={`/especialidades/${spec.slug}`}
                  className="font-sans inline-flex h-12 items-center border border-ink px-6 text-[0.88rem] font-semibold tracking-wide"
                >
                  Sala de {spec.title}
                </Link>
              ) : null}
            </div>
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
            <p className="kicker mb-4">Sociedades</p>
            <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
              {person.memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker mb-4">Idiomas</p>
            <p className="text-[15px] leading-relaxed text-muted">
              {person.languages.join(" · ")}
            </p>
            <p className="mt-6 text-[13px] text-muted">
              La hora se pide a recepción, no al correo del médico. {site.phone}.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="shell">
          <p className="kicker mb-8">El resto de la mesa</p>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {others.slice(0, 4).map((item) => (
              <Link key={item.slug} href={`/equipo/${item.slug}`} className="group">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 font-medium group-hover:text-sol">{item.shortName}</p>
                <p className="text-[13px] text-muted">{item.specialty}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
