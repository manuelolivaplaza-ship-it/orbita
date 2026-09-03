import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import {
  getTerritory,
  propertiesIn,
  territories,
} from "@/lib/properties";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return territories.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTerritory(slug);
  if (!t) return { title: "Territorio" };
  return {
    title: t.name,
    description: t.lede,
  };
}

export default async function TerritoryPage({ params }: Props) {
  const { slug } = await params;
  const t = getTerritory(slug);
  if (!t) notFound();
  const list = propertiesIn(t.slug);

  return (
    <article>
      <section className="relative -mt-[4.5rem] min-h-[70svh] overflow-hidden">
        <Image
          src={t.image}
          alt={t.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/45 to-void/40" />
        <div className="shell relative flex min-h-[70svh] flex-col justify-end pb-12 pt-32">
          <p className="kicker">{t.coords}</p>
          <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.9]">
            {t.name}
          </h1>
          <p className="mt-5 max-w-[40ch] text-paper-dim">{t.lede}</p>
        </div>
      </section>

      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {t.body.map((para) => (
              <p
                key={para}
                className="mt-5 max-w-[58ch] text-[1.05rem] leading-relaxed text-paper-dim first:mt-0"
              >
                {para}
              </p>
            ))}
          </Reveal>
          <dl className="lg:col-span-5">
            {t.facts.map((f) => (
              <div key={f.label} className="border-t border-line py-5 first:border-t-0">
                <dt className="kicker">{f.label}</dt>
                <dd className="mt-2 font-display text-2xl leading-tight">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16">
          <p className="kicker">En este territorio</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)]">
              Lo que hay en mesa.
            </h2>
            <Link href="/propiedades" className="btn btn-ghost">
              Toda la mesa
            </Link>
          </div>
          {list.length ? (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <li key={p.slug}>
                  <PropertyCard property={p} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 text-paper-dim">
              Ahora mismo no hay folio publicado aquí. Pida presentación.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
