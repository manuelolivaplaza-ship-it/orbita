import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { examenes, examenesRelacionados, getExamen } from "@/data/examenes";
import { clp } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return examenes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const examen = getExamen(slug);
  if (!examen) return { title: "Examen" };
  return {
    title: examen.nombre,
    description: examen.resumen,
  };
}

export default async function ExamenPage({ params }: Props) {
  const { slug } = await params;
  const examen = getExamen(slug);
  if (!examen) notFound();
  const relacionados = examenesRelacionados(examen);

  return (
    <article className="pt-32">
      <header className="wrap grid gap-10 pb-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow">
            {examen.categoria} · {examen.codigo}
          </p>
          <h1 className="display mt-5 text-[clamp(2.8rem,7vw,6rem)]">{examen.nombre}</h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink-soft">
            {examen.resumen}
          </p>
        </div>
        <aside className="border border-line bg-cream p-7 md:col-span-4 md:col-start-9">
          <p className="font-serif text-5xl">{clp(examen.precio)}</p>
          <p className="mt-2 text-sm text-mute">Precio particular</p>
          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-t border-line pt-4">
              <dt className="text-mute">Plazo</dt>
              <dd>{examen.plazo}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-line pt-4">
              <dt className="text-mute">Muestra</dt>
              <dd className="text-right">{examen.muestra}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-line pt-4">
              <dt className="text-mute">Ayuno</dt>
              <dd>{examen.ayuno}</dd>
            </div>
          </dl>
          <Link href="/contacto" className="btn btn-ink mt-8 w-full">
            Agendar este examen
          </Link>
        </aside>
      </header>

      <div className="wrap grid gap-12 pb-20 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-serif text-3xl">Para qué se pide</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{examen.paraQue}</p>
          <h2 className="mt-12 font-serif text-3xl">Preparación</h2>
          <ul className="mt-4 space-y-3 text-ink-soft">
            {examen.preparacion.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
          {examen.notas ? (
            <p className="mt-8 border border-line bg-paper-2/60 px-5 py-4 text-sm text-ink-soft">
              {examen.notas}
            </p>
          ) : null}
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <div className="img-frame aspect-[3/4]">
            <Image
              src="/images/bottles.jpg"
              alt="Tres frascos de vidrio con líquidos claros sobre piedra blanca."
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {relacionados.length > 0 ? (
        <section className="border-t border-line py-16">
          <div className="wrap">
            <p className="eyebrow">También se pide</p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {relacionados.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/examenes/${item.slug}`}
                    className="flex items-baseline justify-between gap-4 py-5 text-ink no-underline"
                  >
                    <span className="font-serif text-2xl">{item.nombre}</span>
                    <span className="font-mono text-sm">{clp(item.precio)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}
