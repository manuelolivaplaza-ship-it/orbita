import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/content";
import { formatCLP } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.lead,
  };
}

export default async function OficioSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== slug);

  return (
    <>
      <section className="shell grid gap-12 pb-16 pt-32 md:grid-cols-12 md:pb-20 md:pt-40">
        <div className="md:col-span-6">
          <p className="kicker">
            Oficio · {service.n}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3rem,7vw,6.2rem)] font-light leading-[0.9] tracking-tight">
            {service.title}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-tinta-suave">
            {service.lead}
          </p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris">
            {service.duration} · desde {formatCLP(service.priceFrom)}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={`/agenda?enfoque=${service.slug}`} className="btn btn-ink">
              Agendar evaluación
              <Arrow />
            </Link>
            <Link href="/valores" className="btn btn-ghost">
              Valores
            </Link>
          </div>
        </div>
        <div className="frame relative aspect-[4/5] md:col-span-5 md:col-start-8">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-t border-linea py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl font-light tracking-tight">
              Para quién es.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
              {service.forWhom}
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-tinta-suave">
              {service.body}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={100}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-teal">
              En la sesión
            </p>
            <ul className="mt-6 space-y-4 border-t border-linea">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="border-b border-linea py-4 text-tinta-suave"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-linea py-20">
        <div className="shell">
          <p className="kicker">Otros enfoques</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {others.slice(0, 3).map((item) => (
              <Link key={item.slug} href={`/oficio/${item.slug}`} className="group">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-teal">
                  {item.n}
                </p>
                <h3 className="mt-3 font-display text-3xl font-light tracking-tight group-hover:text-teal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gris">{item.forWhom}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
