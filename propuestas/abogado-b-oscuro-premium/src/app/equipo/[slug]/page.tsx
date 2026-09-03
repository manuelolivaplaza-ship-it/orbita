import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getLawyer, getPractice, lawyers } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return lawyers.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lawyer = getLawyer(slug);
  if (!lawyer) return { title: "Abogado" };
  return {
    title: lawyer.name,
    description: `${lawyer.role} de Vigilia. ${lawyer.practice}.`,
  };
}

export default async function LawyerPage({ params }: Props) {
  const { slug } = await params;
  const lawyer = getLawyer(slug);
  if (!lawyer) notFound();
  const practice = getPractice(lawyer.practiceSlug);

  return (
    <div className="shell pb-24 pt-10 sm:pt-14">
      <Reveal>
        <p className="kicker">{lawyer.role}</p>
        <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.92]">
          {lawyer.name}
        </h1>
        <p className="mt-4 text-lg text-copper">{lawyer.practice}</p>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <Reveal className="relative aspect-[3/4] overflow-hidden lg:col-span-5">
          <Image
            src={lawyer.image}
            alt={`Retrato de ${lawyer.name}`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </Reveal>
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-paper-dim">
            {lawyer.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="kicker">Formación</dt>
              <dd className="mt-3 space-y-2 text-[0.95rem] text-paper-dim">
                {lawyer.education.map((e) => (
                  <p key={e}>{e}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="kicker">Incorporación</dt>
              <dd className="mt-3 space-y-2 text-[0.95rem] text-paper-dim">
                {lawyer.admissions.map((a) => (
                  <p key={a}>{a}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="kicker">Idiomas</dt>
              <dd className="mt-3 text-[0.95rem] text-paper-dim">
                {lawyer.languages.join(" · ")}
              </dd>
            </div>
            <div>
              <dt className="kicker">Correo</dt>
              <dd className="mt-3">
                <a href={`mailto:${lawyer.email}`} className="link-line">
                  {lawyer.email}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/primera-hora" className="btn btn-primary">
              Pedir hora con {lawyer.name.split(" ")[0]}
            </Link>
            {practice ? (
              <Link href={`/materias/${practice.slug}`} className="btn btn-ghost">
                {practice.title}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
