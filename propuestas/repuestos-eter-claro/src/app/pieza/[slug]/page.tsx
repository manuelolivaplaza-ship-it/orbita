import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConsultForm } from "@/components/consult-form";
import {
  familyBySlug,
  pieceBySlug,
  pieces,
  piecesByFamily,
  stockLabel,
} from "@/lib/data";
import { site } from "@/lib/site";
import { clp } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return pieces.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = pieceBySlug(slug);
  if (!piece) return { title: "Pieza" };
  return {
    title: piece.name,
    description: `${piece.name} ${piece.sku}. Desde ${clp(piece.priceFrom)} ${piece.unit}. ${piece.lead}`,
  };
}

export default async function PiecePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const piece = pieceBySlug(slug);
  if (!piece) notFound();
  const family = familyBySlug(piece.family);
  const related = piecesByFamily(piece.family).filter((item) => item.slug !== piece.slug);

  return (
    <article className="pt-24 lg:pt-32">
      <div className="shell grid items-start gap-12 lg:grid-cols-12">
        <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7">
          <Image
            src={piece.image}
            alt={piece.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-5 lg:pt-4">
          <p className="kicker">
            <Link href={`/familias/${piece.family}`} className="hover:text-ink">
              {family?.name}
            </Link>
          </p>
          <p className="font-sku mt-5 text-[12px] text-ether">{piece.sku}</p>
          <h1 className="font-display mt-3 text-[clamp(2.6rem,5vw,4.4rem)] font-normal leading-[0.92] tracking-tight">
            {piece.name}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">{piece.lead}</p>
          <dl className="mt-8 space-y-3 border-t border-line pt-6 text-[14px]">
            <Row label="OEM de referencia" value={piece.oem} />
            <Row label="Calza en" value={piece.fits} />
            <Row label="Disponibilidad" value={stockLabel[piece.stock]} />
            <Row label="Unidad" value={piece.unit} />
          </dl>
          <p className="font-display mt-8 text-4xl tracking-tight">
            {clp(piece.priceFrom)}
          </p>
          <p className="mt-2 text-[12px] tracking-wide text-muted uppercase">
            Desde · IVA incluido · se confirma con ficha
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/consulta"
              className="font-ui inline-flex h-12 items-center bg-ether-deep px-6 text-[0.78rem] font-medium tracking-[0.14em] text-mist uppercase"
            >
              Cotizar esta pieza
            </Link>
            <a
              href={site.whatsapp}
              className="font-ui inline-flex h-12 items-center border border-ink px-6 text-[0.78rem] font-medium tracking-[0.14em] uppercase"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {related.length ? (
        <section className="mt-24 border-t border-line py-16 lg:mt-32">
          <div className="shell">
            <p className="kicker">Misma familia</p>
            <ul className="mt-8 grid gap-px bg-line sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} className="bg-mist">
                  <Link href={`/pieza/${item.slug}`} className="block p-5 hover:bg-vapor/60">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="33vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="font-sku mt-4 text-[11px] text-ether">{item.sku}</p>
                    <p className="font-display mt-1 text-2xl">{item.name}</p>
                    <p className="mt-2 text-[14px] text-muted">{clp(item.priceFrom)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Ficha</p>
            <h2 className="font-display mt-4 text-4xl tracking-tight">
              Dinos el auto.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              El precio de sala se confirma con patente o con marca, modelo y
              año. Sin eso, no despachamos.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ConsultForm />
          </div>
        </div>
      </section>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-line pb-3">
      <dt className="text-[11px] tracking-[0.16em] text-muted uppercase">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
