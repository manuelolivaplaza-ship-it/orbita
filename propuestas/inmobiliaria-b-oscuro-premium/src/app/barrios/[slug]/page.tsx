import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/property-card";
import { Container, Reveal } from "@/components/reveal";
import { getNeighborhood, neighborhoods } from "@/data/neighborhoods";
import { properties } from "@/data/properties";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) return { title: "Territorio" };
  return { title: n.name, description: n.excerpt };
}

export default async function BarrioPage({ params }: Props) {
  const { slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) notFound();
  const comunas: Record<string, string[]> = {
    "lo-barnechea": ["Lo Barnechea"],
    vitacura: ["Vitacura", "Las Condes"],
    zapallar: ["Zapallar"],
    "puerto-varas": ["Puerto Varas"],
    casablanca: ["Casablanca"],
  };
  const list = properties.filter(
    (p) =>
      p.status !== "entregada" &&
      (comunas[n.slug] ?? []).includes(p.comuna),
  );

  return (
    <div className="pt-20">
      <div className="relative h-[70svh] min-h-[480px]">
        <Image
          src={n.image}
          alt={n.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/30 to-black/20" />
        <Container className="relative flex h-full flex-col justify-end pb-14">
          <p className="kicker">{n.kicker}</p>
          <h1 className="display mt-4 text-6xl sm:text-8xl">{n.name}</h1>
        </Container>
      </div>

      <Container className="py-20">
        <Reveal className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {n.body.map((p) => (
              <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-ivory-soft first:mt-0">
                {p}
              </p>
            ))}
          </div>
          <dl className="lg:col-span-4 lg:col-start-9">
            {n.facts.map((f) => (
              <div key={f.label} className="border-t border-[var(--line)] py-5">
                <dt className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                  {f.label}
                </dt>
                <dd className="mt-2 font-display text-2xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-20">
          <p className="kicker">En este territorio</p>
          {list.length ? (
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p, i) => (
                <PropertyCard key={p.slug} property={p} index={i} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-muted">
              No hay residencias vivas en este territorio.{" "}
              <Link href="/visita" className="text-gold">
                Escriba al atelier
              </Link>
              .
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
