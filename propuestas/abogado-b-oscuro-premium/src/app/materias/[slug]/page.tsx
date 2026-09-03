import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { getLawyer, getPractice, practices } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return { title: "Materia" };
  return {
    title: practice.title,
    description: practice.lead,
  };
}

export default async function MateriaPage({ params }: Props) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();
  const lawyer = getLawyer(practice.lawyerSlug);

  return (
    <div className="shell pb-24">
      <PageIntro
        folio={practice.folio}
        kicker="Materia"
        title={practice.title}
        lede={practice.lead}
      />

      <Reveal className="relative mt-12 aspect-[16/8] overflow-hidden border border-line">
        <Image
          src={practice.image}
          alt={`Ambiente de la práctica ${practice.title}`}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>

      <section className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-paper-dim lg:col-span-7">
          {practice.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="border border-line bg-ink p-8 lg:col-span-5">
          <p className="kicker">En esta pieza</p>
          <ul className="mt-5 grid gap-3 text-[0.98rem]">
            {practice.work.map((w) => (
              <li key={w} className="border-b border-line pb-3 last:border-0">
                {w}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-2">
        <div>
          <p className="kicker">Cuándo escribir</p>
          <ul className="mt-5 grid gap-3 text-paper-dim">
            {practice.when.map((w) => (
              <li key={w} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper" />
                {w}
              </li>
            ))}
          </ul>
        </div>
        {lawyer ? (
          <Link
            href={`/equipo/${lawyer.slug}`}
            className="group grid grid-cols-[7rem_1fr] items-center gap-5 border border-line p-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={lawyer.image}
                alt={`Retrato de ${lawyer.name}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="kicker">{lawyer.role}</p>
              <p className="mt-2 font-display text-2xl leading-tight group-hover:text-copper">
                {lawyer.name}
              </p>
              <p className="mt-1 text-sm text-muted">{lawyer.practice}</p>
            </div>
          </Link>
        ) : null}
      </section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link href="/primera-hora" className="btn btn-primary">
          Pedir la primera hora
        </Link>
        <Link href="/materias" className="btn btn-ghost">
          Todas las materias
        </Link>
      </div>
    </div>
  );
}
