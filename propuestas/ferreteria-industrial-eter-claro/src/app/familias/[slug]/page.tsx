import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { SkuNote, SkuTable } from "@/components/sku-table";
import { families, familyById, skusByFamily, type FamilyId } from "@/data/catalog";
import { formatCLP } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return families.map((family) => ({ slug: family.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const family = familyById(slug);
  if (!family) return { title: "Familia" };
  return {
    title: family.name,
    description: family.lead,
  };
}

export default async function FamilyPage({ params }: Props) {
  const { slug } = await params;
  const family = familyById(slug);
  if (!family) notFound();

  const items = skusByFamily(family.id as FamilyId);
  const others = families.filter((item) => item.id !== family.id);

  return (
    <div className="pt-[4.4rem]">
      <section className="grid md:grid-cols-12">
        <div className="relative min-h-[22rem] md:col-span-6 md:min-h-[36rem]">
          <Image
            src={family.image}
            alt={family.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between px-5 py-14 md:col-span-6 md:px-10 md:py-16 lg:px-16">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              {family.n} · {family.kicker}
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.6rem,5vw,5.2rem)] font-light leading-[0.94] tracking-tight">
              {family.name}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              {family.body}
            </p>
          </div>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                Desde
              </dt>
              <dd className="mt-2 font-display text-3xl font-light">
                {formatCLP(family.fromIva)}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                Corte
              </dt>
              <dd className="mt-2 text-ink-soft">
                {family.corte ? "En patio, con medida escrita." : "No aplica."}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Ficha
          </p>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
            Lo que está en patio.
          </h2>
        </Reveal>
        <Reveal className="mt-10" delay={80}>
          <SkuTable items={items} />
          <SkuNote href="/cotizar" />
        </Reveal>
        <Reveal className="mt-12">
          <Link
            href={`/cotizar?familia=${family.id}`}
            className="btn btn-ink"
          >
            Cotizar esta familia
            <Arrow />
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 lg:px-16">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Otras calles
          </p>
          <ul className="mt-8 grid gap-0 md:grid-cols-2">
            {others.map((item) => (
              <li key={item.id} className="border-t border-line">
                <Link
                  href={`/familias/${item.id}`}
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <span className="font-display text-2xl font-light tracking-tight">
                    {item.name}
                  </span>
                  <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
