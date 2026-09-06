import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPerson, mesa } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mesa.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return {};
  return {
    title: person.name,
    description: `${person.name}, ${person.role} de SEÑAL. ${person.band}.`,
  };
}

export default async function PersonaPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  return (
    <div className="shell grid gap-12 pb-24 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:pt-14">
      <div className="img-zoom relative aspect-[3/4] max-h-[80vh]">
        <Image
          src={person.image}
          alt={`Retrato de ${person.name}, ${person.role} de SEÑAL`}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div>
        <p className="kicker">{person.role}</p>
        <h1 className="mt-4 text-[clamp(2.6rem,6vw,4.8rem)]">{person.name}</h1>
        <p className="mt-4 font-mono text-[0.78rem] tracking-[0.16em] uppercase text-carrier">
          {person.band}
        </p>
        <div className="font-serif mt-8 max-w-[52ch] space-y-5 text-[1.08rem] text-paper-dim">
          {person.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="border-t border-line pt-4">
            <dt className="kicker">Formación</dt>
            <dd className="mt-3 space-y-2 text-sm text-paper-dim">
              {person.education.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="kicker">Firma</dt>
            <dd className="mt-3 space-y-2 text-sm text-paper-dim">
              {person.signs.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </dd>
          </div>
        </dl>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href={`mailto:${person.email}`} className="link-line">
            {person.email}
          </a>
          <Link href={`/bandas/${person.bandSlug}`} className="btn btn-ghost">
            Banda {person.band}
          </Link>
        </div>
      </div>
    </div>
  );
}
