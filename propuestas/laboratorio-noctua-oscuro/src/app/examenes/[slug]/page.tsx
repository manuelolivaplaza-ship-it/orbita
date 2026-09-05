import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { examenes, examenBySlug } from "@/data/examenes";
import { clp } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return examenes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exam = examenBySlug(slug);
  if (!exam) return { title: "Examen" };
  return {
    title: exam.nombre,
    description: exam.resumen,
  };
}

export default async function ExamenPage({ params }: Props) {
  const { slug } = await params;
  const exam = examenBySlug(slug);
  if (!exam) notFound();

  const related = examenes
    .filter((item) => item.categoria === exam.categoria && item.slug !== exam.slug)
    .slice(0, 3);

  return (
    <>
      <PageIntro kicker={exam.codigo} title={exam.nombre} lead={exam.resumen} />
      <section className="shell grid gap-16 pb-28 md:grid-cols-12 md:pb-36">
        <Reveal className="md:col-span-7">
          <dl className="grid grid-cols-2 gap-8 border-y border-line py-10">
            <div>
              <dt className="kicker">Valor</dt>
              <dd className="mt-3 font-display text-4xl font-semibold nums">
                {clp(exam.precio)}
              </dd>
            </div>
            <div>
              <dt className="kicker">Plazo</dt>
              <dd className="mt-3 text-lg text-paper-dim">{exam.plazo}</dd>
            </div>
            <div>
              <dt className="kicker">Muestra</dt>
              <dd className="mt-3 text-lg text-paper-dim">{exam.muestra}</dd>
            </div>
            <div>
              <dt className="kicker">Ayuno</dt>
              <dd className="mt-3 text-lg text-paper-dim">{exam.ayuno}</dd>
            </div>
          </dl>
          <h2 className="mt-12 font-display text-3xl font-semibold tracking-tight">
            Para qué
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper-dim">
            {exam.paraQue}
          </p>
          <h2 className="mt-12 font-display text-3xl font-semibold tracking-tight">
            Preparación
          </h2>
          <ul className="mt-4 max-w-xl space-y-3 text-paper-dim">
            {exam.preparacion.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
          {exam.notas ? (
            <p className="mt-10 max-w-xl text-sm text-amber">{exam.notas}</p>
          ) : null}
        </Reveal>
        <Reveal className="md:col-span-4 md:col-start-9" delay={100}>
          <div className="border border-line bg-surface p-8">
            <p className="kicker">Agendar</p>
            <p className="mt-4 font-display text-2xl font-semibold tracking-tight">
              {exam.nombre}
            </p>
            <p className="mt-3 text-sm text-paper-dim">
              Amanecer o ocaso. El informe, con la primera luz.
            </p>
            <Link
              href={`/hora?examen=${exam.slug}`}
              className="btn btn-amber mt-8 w-full"
            >
              Pedir hora
              <Arrow />
            </Link>
            <Link href="/preparacion" className="btn btn-ghost mt-3 w-full">
              Cómo prepararme
            </Link>
          </div>
          {related.length ? (
            <div className="mt-10">
              <p className="kicker">En la misma constelación</p>
              <ul className="mt-4 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/examenes/${item.slug}`} className="link-line">
                      {item.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Reveal>
      </section>
    </>
  );
}
