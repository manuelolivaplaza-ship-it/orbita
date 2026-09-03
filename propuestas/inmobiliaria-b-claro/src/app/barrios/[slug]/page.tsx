import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LotPlan } from "@/components/lot-plan";
import { Reveal } from "@/components/reveal";
import { SolarCard } from "@/components/solar-card";
import { TitleBlock } from "@/components/title-block";
import { barrios, getBarrio, solares } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return barrios.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const barrio = getBarrio(slug);
  if (!barrio) return { title: "Barrio" };
  return { title: barrio.name, description: barrio.lead };
}

export default async function BarrioPage({ params }: Props) {
  const { slug } = await params;
  const barrio = getBarrio(slug);
  if (!barrio) notFound();

  const list = solares.filter((item) => item.barrioSlug === barrio.slug);
  const sample = list[0] ?? solares[0];

  return (
    <>
      <section className="pt-28 lg:pt-36">
        <div className="shell">
          <TitleBlock
            plate={barrio.lamina}
            place={barrio.name}
            extra="Radio de trabajo"
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="kicker">{barrio.kicker}</p>
              <h1 className="font-display mt-3 text-[clamp(2.8rem,6vw,5.4rem)] font-semibold leading-[0.92] tracking-tight">
                {barrio.name}
              </h1>
              <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-muted">
                {barrio.lead}
              </p>
            </div>
            <div className="relative min-h-[42vh] lg:col-span-6">
              <Image
                src={barrio.image}
                alt={barrio.name}
                fill
                sizes="50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-6 lg:col-span-7">
            {barrio.body.map((p) => (
              <p key={p} className="max-w-2xl text-[18px] leading-relaxed">
                {p}
              </p>
            ))}
          </Reveal>
          <div className="lg:col-span-5">
            <LotPlan
              lot={sample.lot}
              frente={sample.frente}
              fondo={sample.fondo}
              className="min-h-[320px] border border-line"
            />
            <p className="font-mono mt-3 text-[11px] tracking-wide text-muted">
              Un solar típico de esta mesa en {barrio.name}.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-lima/40 py-16">
        <div className="shell grid gap-8 md:grid-cols-3">
          {barrio.notes.map((note) => (
            <div key={note.title}>
              <p className="kicker">{note.title}</p>
              <p className="mt-3 text-[16px] leading-relaxed">{note.text}</p>
            </div>
          ))}
        </div>
      </section>

      {list.length ? (
        <section className="py-20">
          <div className="shell">
            <p className="kicker">En mesa</p>
            <h2 className="font-display mt-3 text-3xl font-semibold">
              Solares en {barrio.name}
            </h2>
            <div className="mt-8 grid gap-6">
              {list.map((item) => (
                <SolarCard key={item.slug} solar={item} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="shell">
            <p className="text-muted">
              No hay láminas abiertas en esta comuna.{" "}
              <Link href="/contacto" className="link-line">
                Encargue y le avisamos.
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
