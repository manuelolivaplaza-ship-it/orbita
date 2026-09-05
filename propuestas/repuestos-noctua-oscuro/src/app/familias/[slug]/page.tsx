import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { SkuNote } from "@/components/sku-table";
import {
  families,
  familyById,
  piecesByFamily,
  stockLabel,
  type FamilyId,
} from "@/data/catalog";
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

  const items = piecesByFamily(family.id as FamilyId);

  return (
    <div className="pt-[4.5rem]">
      <header className="grid md:grid-cols-12">
        <div className="relative min-h-[22rem] md:col-span-6 md:min-h-[70svh]">
          <Image
            src={family.image}
            alt={family.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-end px-5 py-14 md:col-span-6 md:px-10 md:py-20 lg:px-16">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            {family.index} · {family.bay}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.88] tracking-wide">
            {family.name}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            {family.lead}
          </p>
          <Link
            href={`/cotizar?familia=${family.id}`}
            className="btn btn-sodium mt-10 w-fit"
          >
            Cotizar esta bahía
            <Arrow />
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Fichas
          </p>
        </Reveal>
        <ul className="mt-10">
          {items.map((item, index) => (
            <li key={item.slug}>
              <Reveal delay={index * 40}>
                <Link
                  href={`/pieza/${item.slug}`}
                  className="group grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-center"
                >
                  <span className="font-mono text-[0.62rem] tracking-[0.12em] text-mute md:col-span-2">
                    {item.sku}
                  </span>
                  <span className="font-display text-2xl font-medium tracking-wide md:col-span-4">
                    {item.name}
                  </span>
                  <span className="hidden text-sm text-mute md:col-span-3 md:block">
                    {stockLabel[item.stock]}
                  </span>
                  <span className="md:col-span-2 md:text-right">
                    {formatCLP(item.priceIva)}
                  </span>
                  <span className="hidden md:col-span-1 md:flex md:justify-end">
                    <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <SkuNote />
      </section>
    </div>
  );
}
