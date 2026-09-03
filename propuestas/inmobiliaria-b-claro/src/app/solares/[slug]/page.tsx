import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConsultForm } from "@/components/consult-form";
import { LotPlan } from "@/components/lot-plan";
import { Reveal } from "@/components/reveal";
import { SolarCard } from "@/components/solar-card";
import { TitleBlock } from "@/components/title-block";
import { getSolar, solares } from "@/lib/data";
import { formatUf } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return solares.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solar = getSolar(slug);
  if (!solar) return { title: "Solar" };
  return {
    title: solar.title,
    description: solar.lead,
    openGraph: { images: [solar.image] },
  };
}

export default async function SolarPage({ params }: Props) {
  const { slug } = await params;
  const solar = getSolar(slug);
  if (!solar) notFound();

  const others = solares.filter((item) => item.slug !== solar.slug).slice(0, 2);

  return (
    <>
      <section className="pt-28 lg:pt-36">
        <div className="shell">
          <TitleBlock
            plate={solar.lamina}
            place={solar.comuna}
            extra={solar.orientacion}
          />
          <div className="mt-8 grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="kicker">
                {solar.type} · {solar.barrio}
              </p>
              <h1 className="font-display mt-3 text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.92] tracking-tight">
                {solar.title}
              </h1>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
                {solar.lead}
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="font-display nums text-4xl font-semibold tracking-tight lg:text-5xl">
                UF {formatUf(solar.uf)}
              </p>
              <p className="font-mono mt-2 text-[12px] tracking-wide text-muted">
                {solar.status === "reservado" ? "Reservado" : "Disponible"} ·
                valores en UF
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="shell grid gap-4 lg:grid-cols-12">
          <div className="img-zoom relative aspect-[3/4] lg:col-span-7 lg:aspect-auto lg:min-h-[72vh]">
            <Image
              src={solar.image}
              alt={solar.title}
              fill
              priority
              sizes="60vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-5">
            <LotPlan
              lot={solar.lot}
              frente={solar.frente}
              fondo={solar.fondo}
              className="min-h-[280px] flex-1 border border-line"
            />
            <dl className="font-mono grid grid-cols-2 gap-px border border-line bg-line text-[11px] tracking-[0.1em] uppercase">
              {[
                ["Frente", `${solar.frente.toString().replace(".", ",")} m`],
                ["Fondo", `${solar.fondo.toString().replace(".", ",")} m`],
                ["Terreno", `${formatUf(solar.m2terreno)} m²`],
                ["Útil", `${solar.m2util} m²`],
                ["Patio", `${solar.patio} m²`],
                ["Orientación", solar.orientacion],
                ["Dormitorios", String(solar.dormitorios)],
                ["Baños", String(solar.banos)],
                ["Año", String(solar.year)],
                ["DFL2", solar.dfl2 ? "Sí" : "No"],
              ].map(([k, v]) => (
                <div key={k} className="bg-papel px-4 py-3">
                  <dt className="text-muted">{k}</dt>
                  <dd className="mt-1 text-[13px] text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="shell grid gap-4 sm:grid-cols-3">
          {solar.gallery.map((src) => (
            <div key={src} className="img-zoom relative aspect-[4/3]">
              <Image
                src={src}
                alt=""
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="kicker">Lectura</p>
            <p className="mt-5 max-w-xl text-[18px] leading-relaxed">{solar.body}</p>
            <ul className="mt-8 space-y-3">
              {solar.facts.map((fact) => (
                <li
                  key={fact}
                  className="border-t border-line pt-3 text-[15px] leading-relaxed text-muted"
                >
                  {fact}
                </li>
              ))}
            </ul>
            <Link
              href={`/barrios/${solar.barrioSlug === "fuera" ? "nunoa" : solar.barrioSlug}`}
              className="font-mono mt-8 inline-block text-[12px] tracking-[0.14em] uppercase link-line"
            >
              El barrio
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="kicker mb-4">Pedir esta visita</p>
            <ConsultForm />
          </Reveal>
        </div>
      </section>

      {others.length ? (
        <section className="border-t border-line py-16">
          <div className="shell">
            <p className="kicker">Otras láminas</p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {others.map((item) => (
                <SolarCard key={item.slug} solar={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
