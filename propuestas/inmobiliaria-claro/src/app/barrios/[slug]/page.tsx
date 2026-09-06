import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import { barrios, getBarrio, properties } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return barrios.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const barrio = getBarrio(slug);
  if (!barrio) return { title: "Barrio" };
  return {
    title: barrio.name,
    description: barrio.lead,
  };
}

export default async function BarrioPage({ params }: Props) {
  const { slug } = await params;
  const barrio = getBarrio(slug);
  if (!barrio) notFound();
  const list = properties.filter((item) => item.barrioSlug === barrio.slug);

  return (
    <article>
      <div className="relative h-[52vh] min-h-[320px]">
        <Image
          src={barrio.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luz via-luz/20 to-transparent" />
        <div className="shell relative flex h-full items-end pb-10">
          <div>
            <p className="kicker">
              {barrio.n} · {barrio.comuna}
            </p>
            <h1 className="font-display mt-3 text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.92] tracking-tight">
              {barrio.name}
            </h1>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">{barrio.kicker}</p>
            <p className="font-display mt-4 text-[clamp(1.6rem,3vw,2.2rem)] leading-snug">
              {barrio.lead}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            {barrio.body.map((para) => (
              <p
                key={para}
                className="mt-5 text-[17px] leading-relaxed text-muted first:mt-0"
              >
                {para}
              </p>
            ))}
          </Reveal>
        </div>
        <div className="shell mt-16 grid gap-px bg-line md:grid-cols-3">
          {barrio.notes.map((note) => (
            <Reveal key={note.title} className="bg-luz px-6 py-8">
              <h2 className="font-display text-xl font-medium">{note.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {note.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {list.length ? (
        <section className="border-t border-line py-16 lg:py-24">
          <div className="shell">
            <p className="kicker">En este barrio</p>
            <h2 className="font-display mt-3 text-3xl font-medium">Plantas en lista.</h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {list.map((item) => (
                <li key={item.slug}>
                  <PropertyCard property={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <div className="shell pb-16">
        <Link
          href="/barrios"
          className="font-mono text-[12px] tracking-[0.14em] uppercase link-line"
        >
          Todos los barrios
        </Link>
      </div>
    </article>
  );
}
