import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/gallery";
import { PropertyCard } from "@/components/property-card";
import { Container, Reveal } from "@/components/reveal";
import { VisitForm } from "@/components/visit-form";
import {
  getProperty,
  getRelated,
  properties,
  statusLabels,
  typeLabels,
} from "@/data/properties";
import { formatM2, formatUF, whatsappHref } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return { title: "Residencia" };
  return {
    title: `${p.name} · ${p.comuna}`,
    description: p.excerpt,
    openGraph: { images: [p.images[0]] },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();
  const related = getRelated(p.slug);

  const specs = [
    ["Superficie", formatM2(p.m2)],
    ["Terreno", p.terreno ? formatM2(p.terreno) : "—"],
    ["Dormitorios", String(p.dormitorios)],
    ["Baños", String(p.banos)],
    ["Estacionamientos", String(p.estacionamientos)],
    ["Orientación", p.orientacion],
    ["Año", String(p.year)],
    ["Arquitectura", p.architect],
  ];

  return (
    <div className="pt-20">
      <Gallery images={p.images} alt={p.name} />

      <Container className="py-16">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="kicker">
                {p.kicker} · {typeLabels[p.type]}
              </p>
              <h1 className="display mt-4 text-6xl sm:text-7xl lg:text-8xl">{p.name}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-soft">
                {p.excerpt}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-6 lg:col-span-4 lg:items-end lg:text-right">
              <div>
                <p className="font-display text-4xl text-gold">{formatUF(p.uf)}</p>
                <p className="mt-2 flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted uppercase lg:justify-end">
                  <span className={`status-dot ${p.status}`} />
                  {statusLabels[p.status]}
                </p>
              </div>
              {p.status !== "entregada" ? (
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link href="#visita" className="btn-solid">
                    Pedir visita
                  </Link>
                  <a
                    className="btn-gold"
                    href={whatsappHref(
                      `Hola, me interesa ${p.name} en ${p.comuna}. ¿Podemos coordinar una visita privada?`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              ) : (
                <p className="text-sm text-muted">Esta residencia ya fue entregada.</p>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 grid grid-cols-2 gap-px bg-[var(--line)] md:grid-cols-4" delay={80}>
          {specs.map(([l, v]) => (
            <div key={l} className="bg-background px-5 py-6">
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                {l}
              </p>
              <p className="mt-2 font-display text-2xl">{v}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-20 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="kicker">La casa</p>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-ivory-soft">
              {p.story.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
            <p className="kicker">Programa</p>
            <ul className="mt-6 divide-y divide-[var(--line)]">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 py-3 text-sm text-ivory-soft"
                >
                  <span className="h-px w-5 bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>

      {p.status !== "entregada" ? (
        <section id="visita" className="border-y border-[var(--line)] py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="kicker">Visita privada</p>
                <h2 className="display mt-4 text-5xl">
                  Pedir {p.name}
                  <br />
                  <em className="text-gold">a la hora justa.</em>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
                  Coordinamos un atardecer. La casa se recorre con alguien del
                  estudio, no con un cartel en la reja.
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <VisitForm preset={p.name} />
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <Container className="py-20">
        <p className="kicker">También en la colección</p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r, i) => (
            <PropertyCard key={r.slug} property={r} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
