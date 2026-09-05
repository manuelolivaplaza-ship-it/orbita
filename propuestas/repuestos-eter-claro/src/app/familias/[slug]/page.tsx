import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { families, familyBySlug, piecesByFamily, stockLabel } from "@/lib/data";
import { clp } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return families.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const family = familyBySlug(slug);
  if (!family) return { title: "Familia" };
  return {
    title: family.name,
    description: family.lead,
  };
}

export default async function FamilyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const family = familyBySlug(slug);
  if (!family) notFound();
  const list = piecesByFamily(slug);

  return (
    <>
      <PageIntro kicker={family.kicker} title={family.name} lead={family.lead} />
      <section className="py-16 lg:py-24">
        <div className="shell grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {list.map((piece) => (
            <Link
              key={piece.slug}
              href={`/pieza/${piece.slug}`}
              className="group bg-mist p-5 transition-colors hover:bg-vapor/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={piece.image}
                  alt={piece.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="font-sku mt-5 text-[11px] text-ether">{piece.sku}</p>
              <h2 className="font-display mt-2 text-3xl tracking-tight">
                {piece.name}
              </h2>
              <p className="mt-3 text-[15px] text-muted">
                {clp(piece.priceFrom)}
                <span className="text-[13px]"> {piece.unit}</span>
              </p>
              <p className="mt-1 text-[12px] tracking-wide text-muted uppercase">
                {stockLabel[piece.stock]}
              </p>
            </Link>
          ))}
        </div>
        <p className="shell mt-10 text-[13px] text-muted">
          Valores referenciales, IVA incluido. Se confirman con marca, modelo,
          año y motor.
        </p>
      </section>
    </>
  );
}
