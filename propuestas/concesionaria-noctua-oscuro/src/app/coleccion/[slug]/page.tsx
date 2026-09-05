import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/gallery";
import { Arrow } from "@/components/mark";
import { Price } from "@/components/price";
import { Reveal } from "@/components/reveal";
import { VehicleCard } from "@/components/vehicle-card";
import { VisitForm } from "@/components/visit-form";
import {
  getRelated,
  getVehicle,
  getVehicleOptions,
  statusLabel,
  vehicles,
} from "@/data/vehicles";
import { formatKm, formatPowertrain, formatTemperament } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return { title: "Pieza" };
  return {
    title: `${vehicle.brand} ${vehicle.model}`,
    description: vehicle.excerpt,
    openGraph: { images: [vehicle.image] },
  };
}

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();
  const related = getRelated(vehicle.slug);

  return (
    <>
      <section className="px-6 pb-8 pt-24 md:px-10 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <Gallery
            images={vehicle.gallery}
            alt={`${vehicle.brand} ${vehicle.model} en ${vehicle.color}`}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-16 md:grid-cols-12 md:px-10 lg:px-16">
        <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
            {statusLabel[vehicle.status]} · {formatTemperament(vehicle.temperament)}
          </p>
          <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            {vehicle.brand} · {vehicle.year} · {formatPowertrain(vehicle.powertrain)}
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {vehicle.model}
          </h1>
          <div className="mt-8">
            <Price value={vehicle.priceCLP} />
          </div>
          <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted">
            {formatKm(vehicle.km)} · {vehicle.color}
          </p>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-paper-dim">
            {vehicle.excerpt}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={`/visita?pieza=${vehicle.slug}`} className="btn btn-amber">
              Solicitar esta noche
              <Arrow />
            </Link>
            <Link href="/coleccion" className="btn btn-ghost">
              Volver a la colección
            </Link>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="text-base leading-relaxed text-paper-dim">{vehicle.story}</p>
          </Reveal>
          <Reveal className="mt-14" delay={80}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Ficha
            </p>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {vehicle.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    {spec.label}
                  </dt>
                  <dd className="text-sm tabular-nums text-paper">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="mt-14" delay={120}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Incluye
            </p>
            <ul className="mt-6 space-y-3">
              {vehicle.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-paper-dim">
                  <span className="mt-2 h-px w-6 shrink-0 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Agendar
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Ven a verla después del crepúsculo.
          </h2>
        </Reveal>
        <div className="mt-12 max-w-3xl">
          <VisitForm presetSlug={vehicle.slug} options={getVehicleOptions()} />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-28 md:px-10 lg:px-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold tracking-tight">
            Otras presencias
          </h2>
          <Link
            href="/coleccion"
            className="link-line font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Todas
          </Link>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-3">
          {related.map((item, index) => (
            <VehicleCard key={item.slug} vehicle={item} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
