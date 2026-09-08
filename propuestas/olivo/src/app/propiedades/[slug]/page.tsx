import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Bath,
  BedDouble,
  CalendarClock,
  Car,
  Compass,
  Layers,
  MapPin,
  Maximize,
  Trees,
} from "lucide-react";

import { Container } from "@/components/container";
import { LeadForm } from "@/components/lead-form";
import { PropertyCard } from "@/components/property-card";
import { PropertyGallery } from "@/components/property-gallery";
import { Button } from "@/components/ui/button";
import { formatCLP, formatUF, ufPerM2, ufToClp } from "@/lib/format";
import {
  agents,
  getProperty,
  neighborhoods,
  properties,
  similarProperties,
} from "@/lib/properties";
import { waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Propiedad" };
  return {
    title: `${property.title} · ${formatUF(property.priceUF)}`,
    description: property.headline,
    openGraph: { images: [property.images[0]] },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const agent = agents[property.agent];
  const similar = similarProperties(property);
  const barrio = neighborhoods.find((n) => n.name === property.comuna);
  const price =
    property.operation === "venta"
      ? formatUF(property.priceUF)
      : `${formatUF(property.priceUF)} / mes`;
  const clp = formatCLP(ufToClp(property.priceUF));
  const m2 = property.operation === "venta" ? ufPerM2(property.priceUF, property.area) : null;
  const wa = waLink(
    `Hola Olivo, me interesa ${property.title} (${property.comuna}). ¿Puedo coordinar una visita?`,
  );

  return (
    <section className="py-10 md:py-16">
      <Container>
        <p className="text-sm text-muted-foreground">
          <Link href="/propiedades" className="hover:text-primary">
            Propiedades
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/propiedades?comuna=${encodeURIComponent(property.comuna)}`}
            className="hover:text-primary"
          >
            {property.comuna}
          </Link>
          <span className="mx-2">/</span>
          {property.sector}
        </p>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <PropertyGallery images={property.images} title={property.title} />

          <aside className="lg:sticky lg:top-24">
            <p className="text-xs tracking-[0.18em] text-primary uppercase">
              {property.operation === "venta" ? "Venta" : "Arriendo"} · {property.type}
              {property.badge ? ` · ${property.badge}` : ""}
            </p>
            <h1 className="mt-2 font-heading text-4xl md:text-[2.6rem]">{property.title}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="size-4" />
              {property.sector}, {property.comuna}
            </p>
            <p className="mt-5 font-heading text-4xl text-primary">{price}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              ≈ {clp} {property.operation === "arriendo" ? "mensuales" : ""}
              {m2 ? ` · ${m2} UF/m²` : ""} · valor UF referencial
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Fact icon={Maximize} label={`${property.area} m²`} hint="útiles" />
              <Fact icon={BedDouble} label={`${property.bedrooms}`} hint="dorm." />
              <Fact icon={Bath} label={`${property.bathrooms}`} hint="baños" />
              <Fact
                icon={property.terrain ? Trees : Car}
                label={property.terrain ? `${property.terrain}` : `${property.parking}`}
                hint={property.terrain ? "m² terr." : "est."}
              />
            </dl>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button asChild className="h-12 flex-1">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  Pedir visita por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 flex-1">
                <a href="#consultar">Escribir al corredor</a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-secondary/70 p-4">
              <Image
                src={agent.photo}
                alt={agent.name}
                width={56}
                height={56}
                className="size-14 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{agent.name}</p>
                <p className="text-sm text-muted-foreground">{agent.role}</p>
                <a href={`tel:${agent.phone.replace(/\s/g, "")}`} className="text-xs text-primary">
                  {agent.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="font-heading text-3xl">{property.headline}</h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              {property.description}
            </p>

            <h3 className="mt-10 font-heading text-2xl">Ficha técnica</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <Detail icon={Compass} label="Orientación" value={property.orientation ?? "A confirmar en visita"} />
              <Detail icon={CalendarClock} label="Año" value={String(property.year)} />
              {property.floor ? <Detail icon={Layers} label="Piso" value={property.floor} /> : null}
              <Detail
                icon={Maximize}
                label={property.operation === "arriendo" ? "Gastos / condiciones" : "Gastos"}
                value={property.commonExpenses ?? "Consultar"}
              />
              <Detail icon={MapPin} label="Cerca de" value={property.near ?? property.sector} />
              {property.available ? (
                <Detail icon={CalendarClock} label="Disponible" value={property.available} />
              ) : null}
              <Detail icon={Car} label="Estacionamientos" value={String(property.parking)} />
            </ul>

            <h3 className="mt-10 font-heading text-2xl">Lo que importa</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {property.highlights.map((h) => (
                <li key={h} className="rounded-xl bg-card px-4 py-3 text-sm ring-1 ring-border">
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-heading text-2xl">Características</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {property.amenities.map((a) => (
                <li
                  key={a}
                  className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {a}
                </li>
              ))}
              {property.terrain ? (
                <li className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">
                  Terreno {property.terrain} m²
                </li>
              ) : null}
              <li className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">
                Año {property.year}
              </li>
            </ul>

            <h3 className="mt-10 font-heading text-2xl">Cómo es la visita</h3>
            <ol className="mt-4 grid gap-4">
              {[
                {
                  n: "01",
                  t: "Escribes por WhatsApp",
                  d: "Con el link de esta ficha. Te confirmamos si está disponible ese día.",
                },
                {
                  n: "02",
                  t: "Agendamos con cédula",
                  d: "Horario fijo, no turismo de domingo. El corredor te espera en el hall o el portón.",
                },
                {
                  n: "03",
                  t: "Cuarenta minutos, con criterio",
                  d: "Te mostramos defectos y virtudes. Si no calza, te lo decimos ahí mismo.",
                },
              ].map((s) => (
                <li key={s.n} className="flex gap-4 border-t border-border pt-4">
                  <span className="font-heading text-xl text-primary">{s.n}</span>
                  <div>
                    <p className="font-medium">{s.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            {barrio ? (
              <div className="mt-10 rounded-2xl bg-card p-6 ring-1 ring-border">
                <p className="text-xs tracking-[0.16em] text-primary uppercase">La comuna</p>
                <h3 className="mt-2 font-heading text-2xl">{barrio.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{barrio.pitch}</p>
                <p className="mt-3 text-sm text-primary">
                  {barrio.priceM2} UF/m² venta · {barrio.rentM2.toLocaleString("es-CL")} CLP/m²
                  arriendo (referencia 2025–2026)
                </p>
                <Link
                  href="/barrios"
                  className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Ver las seis comunas →
                </Link>
              </div>
            ) : null}
          </div>

          <div id="consultar" className="rounded-3xl bg-card p-6 ring-1 ring-border md:p-8">
            <LeadForm intent="visita" propertyTitle={property.title} />
          </div>
        </div>

        {similar.length > 0 ? (
          <div className="mt-20">
            <h2 className="font-heading text-3xl">Parecidas, si esta no calza</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p) => (
                <PropertyCard key={p.slug} property={p} />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function Fact({
  icon: Icon,
  label,
  hint,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl bg-card p-3 ring-1 ring-border">
      <Icon className="size-4 text-primary" />
      <p className="mt-2 font-medium">{label}</p>
      <p className="text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex gap-3 rounded-xl bg-card px-4 py-3 ring-1 ring-border">
      <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
      <div>
        <p className="text-[11px] tracking-[0.12em] text-muted-foreground uppercase">{label}</p>
        <p className="mt-0.5 text-sm">{value}</p>
      </div>
    </li>
  );
}
