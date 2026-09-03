import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getService, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Servicio" };
  return {
    title: service.name,
    description: service.lead,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="shell pb-24 pt-10 sm:pt-14">
      <Reveal>
        <p className="kicker">
          <span className="tabular mr-3 text-muted">{service.folio}</span>
          {service.duration}
        </p>
        <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.92]">
          {service.name}
        </h1>
        <p className="mt-5 max-w-[40ch] text-lg text-lantern">{service.lead}</p>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <Reveal className="img-zoom relative aspect-[4/3] lg:col-span-7">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="font-mono text-[0.78rem] tracking-[0.16em] text-muted uppercase">
            Desde
          </p>
          <p className="mt-2 font-display text-4xl tabular">{service.price}</p>
          <p className="mt-6 text-paper-dim">{service.forWho}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/hora" className="btn btn-primary">
              Pedir hora
            </Link>
            {service.slug === "urgencias" ? (
              <Link href="/urgencias" className="btn btn-ghost">
                Protocolo de urgencia
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-paper-dim lg:col-span-7">
          {service.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="lg:col-span-5">
          <p className="kicker">Incluye</p>
          <ul className="mt-4 space-y-3 text-paper-dim">
            {service.includes.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="kicker mt-10">Cuándo</p>
          <ul className="mt-4 space-y-3 text-paper-dim">
            {service.when.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-20 border-t border-line pt-12">
        <p className="kicker">También</p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <li key={s.slug}>
              <Link href={`/servicios/${s.slug}`} className="group block">
                <p className="kicker tabular">{s.folio}</p>
                <h2 className="mt-2 font-display text-2xl leading-tight group-hover:text-lantern">
                  {s.name}
                </h2>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
