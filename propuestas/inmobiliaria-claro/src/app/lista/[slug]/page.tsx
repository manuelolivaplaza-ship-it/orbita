import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Compass } from "@/components/compass";
import { ConsultForm } from "@/components/consult-form";
import { Gallery } from "@/components/gallery";
import { LightMeter } from "@/components/light-meter";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import {
  getProperty,
  properties,
  similarTo,
  specList,
  statusLabel,
  team,
  typeLabel,
} from "@/lib/data";
import { formatUf } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return { title: "Planta" };
  return {
    title: `${p.name} · ${p.comuna}`,
    description: p.lede,
    openGraph: {
      images: [{ url: p.cover, width: 1600, height: 1200 }],
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();

  const agente = team.find((person) => person.slug === p.agente);
  const similares = similarTo(p.slug);
  const specs = specList(p);

  return (
    <article>
      <Gallery images={p.gallery} />

      <div className="shell py-12 sm:py-16">
        <Reveal>
          <p className="kicker">
            {p.folio} · {p.comuna} · {p.barrio}
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h1 className="max-w-[14ch] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-medium leading-[0.92] tracking-tight">
              {p.name}
            </h1>
            <div className="text-right">
              <p className="font-display nums text-[clamp(1.8rem,3vw,2.6rem)] leading-none font-semibold text-sol">
                UF {formatUf(p.uf)}
              </p>
              <p className="font-mono mt-2 text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                {statusLabel[p.status]} · {typeLabel[p.type]}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-[48ch] text-[1.08rem] leading-relaxed text-muted">
            {p.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href={`/visita?folio=${p.folio}`} className="btn btn-sol">
              Agendar visita de sol
            </Link>
            <Compass bearing={p.orientacion} label={p.orientacionLabel} />
          </div>
        </Reveal>

        <dl className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((item) => (
            <div key={item.label} className="bg-luz px-5 py-5">
              <dt className="kicker">{item.label}</dt>
              <dd className="font-display nums mt-2 text-2xl leading-tight font-medium">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {p.body.map((para) => (
              <p
                key={para}
                className="mt-5 max-w-[58ch] text-[1.05rem] leading-relaxed text-muted first:mt-0"
              >
                {para}
              </p>
            ))}
            <div className="mt-10 border-l-2 border-sol pl-5">
              <p className="kicker">Por qué se vende</p>
              <p className="mt-2 max-w-[50ch] text-[0.98rem] leading-relaxed text-ink">
                {p.porQue}
              </p>
            </div>
            <ul className="mt-10 space-y-2 text-[15px] text-muted">
              {p.facts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-sol" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-line bg-luz-2/60 p-7 lg:col-span-5">
            <LightMeter invierno={p.solInvierno} verano={p.solVerano} />
            <div className="mt-8 border-t border-line pt-6">
              <p className="kicker">A la vuelta</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {p.metro}
                <br />
                {p.cafe}
              </p>
              <p className="font-mono mt-4 text-[12px] tracking-wide text-norte">
                {p.coords}
              </p>
              <p className="mt-3 text-[14px] text-muted">
                Contribuciones {p.contribuciones}. {p.dfl2 ? "DFL2." : ""}{" "}
                {p.bodega ? "Bodega incluida." : "Sin bodega."}
              </p>
            </div>
            {agente ? (
              <Link
                href={`/mesa/${agente.slug}`}
                className="mt-8 flex items-center gap-4 border-t border-line pt-6"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-luz-3">
                  <Image
                    src={agente.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="kicker">{agente.role}</p>
                  <p className="font-display mt-1 text-xl leading-tight">
                    {agente.name}
                  </p>
                  <p className="text-sm text-muted">{agente.beat}</p>
                </div>
              </Link>
            ) : null}
            <Link
              href={`/visita?folio=${p.folio}`}
              className="btn btn-sol mt-8 w-full"
            >
              Pedir esta ficha
            </Link>
          </aside>
        </div>
      </div>

      <section className="border-t border-line bg-luz-2/50">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">Visita de sol</p>
            <h2 className="font-display mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-[0.95] tracking-tight">
              {p.visitaIdeal}. Esa es la hora de esta planta.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ConsultForm defaultFolio={p.folio} />
          </div>
        </div>
      </section>

      {similares.length ? (
        <section className="shell py-20">
          <p className="kicker">También en lista</p>
          <h2 className="font-display mt-4 text-3xl font-medium">Cerca de este folio.</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {similares.map((item) => (
              <li key={item.slug}>
                <PropertyCard property={item} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
