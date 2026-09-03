import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConsultForm } from "@/components/consult-form";
import { Gallery } from "@/components/gallery";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import {
  getProperty,
  properties,
  similarTo,
  specList,
  statusLabel,
  typeLabel,
} from "@/lib/properties";
import { team } from "@/lib/site";
import { formatM2, formatUF } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return { title: "Propiedad" };
  return {
    title: `${p.name} · ${p.comuna}`,
    description: p.lede,
    openGraph: {
      images: [{ url: p.cover, width: 1600, height: 900 }],
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();

  const agente = team.find((t) => t.slug === p.agente);
  const similares = similarTo(p.slug);
  const specs = specList(p);

  return (
    <article>
      <Gallery images={p.gallery} />

      <div className="shell py-12 sm:py-16">
        <Reveal>
          <p className="kicker">
            {p.folio} · {p.kicker}
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h1 className="max-w-[14ch] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.92]">
              {p.name}
            </h1>
            <div className="text-right">
              <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] tabular leading-none text-brass">
                {formatUF(p.uf)}
              </p>
              <p className="mt-2 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                {statusLabel[p.status]} · {typeLabel[p.type]}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-[46ch] text-[1.08rem] leading-relaxed text-paper-dim">
            {p.lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/consulta?folio=${p.folio}`}
              className="btn btn-primary"
            >
              Solicitar presentación
            </Link>
            <Link href="/propiedades" className="btn btn-ghost">
              Volver a la mesa
            </Link>
          </div>
        </Reveal>

        <dl className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((s) => (
            <div key={s.label} className="bg-void px-5 py-5">
              <dt className="kicker">{s.label}</dt>
              <dd className="mt-2 font-display text-2xl leading-tight tabular">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {p.body.map((para) => (
              <p
                key={para}
                className="mt-5 max-w-[58ch] text-[1.05rem] leading-relaxed text-paper-dim first:mt-0"
              >
                {para}
              </p>
            ))}
            <p className="mt-8 max-w-[50ch] border-l border-brass pl-5 text-[0.95rem] text-paper-dim">
              {p.status === "presentacion"
                ? "Por presentación: la calle y el número se entregan en el brief, con mandato o calificación previa. No hay letrero."
                : "En mesa: visitas entre semana, con cita. La dirección se confirma al agendar."}
            </p>
          </div>
          <aside className="border border-line bg-ink p-7 lg:col-span-5">
            <p className="kicker">Coordenadas de sector</p>
            <p className="mt-3 font-mono text-sm tracking-wide text-brass">
              {p.coords}
            </p>
            <p className="mt-4 text-[0.95rem] text-paper-dim">
              {p.comuna}, {p.barrio}. Orientación {p.orientacion.toLowerCase()}.{" "}
              {formatM2(p.m2)} útiles
              {p.terreno ? ` · ${formatM2(p.terreno)} de terreno` : ""}.
            </p>
            {agente ? (
              <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-surface">
                  <Image
                    src={agente.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="kicker">{agente.role}</p>
                  <p className="mt-1 font-display text-xl leading-tight">
                    {agente.name}
                  </p>
                  <p className="text-sm text-muted">{agente.territory}</p>
                </div>
              </div>
            ) : null}
            <Link
              href={`/consulta?folio=${p.folio}`}
              className="btn btn-primary mt-8 w-full"
            >
              Pedir esta ficha
            </Link>
          </aside>
        </div>
      </div>

      <section className="border-t border-line bg-ink">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">Presentación</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[0.95]">
              Si esta casa es la mesa, empecemos por el brief.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ConsultForm defaultFolio={p.folio} />
          </div>
        </div>
      </section>

      {similares.length ? (
        <section className="shell py-20">
          <p className="kicker">También en mesa</p>
          <h2 className="mt-4 font-display text-3xl">Cerca de este folio.</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {similares.map((s) => (
              <li key={s.slug}>
                <PropertyCard property={s} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
