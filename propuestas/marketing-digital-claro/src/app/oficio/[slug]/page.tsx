import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { services, works } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
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

  const related = works
    .filter((item) =>
      item.services.some((name) =>
        service.title.toLowerCase().includes(name.toLowerCase())
      )
    )
    .slice(0, 2);

  const fallback = related.length ? related : works.slice(0, 2);

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="shell grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="kicker">Oficio {service.kicker}</p>
            <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.92] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-muted">
              {service.lead}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[16/10] lg:col-span-5 lg:col-start-8">
            <Image
              src={service.image}
              alt=""
              fill
              priority
              sizes="45vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-luz-2 py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="kicker">Cómo lo hacemos</p>
            <p className="mt-4 text-[17px] leading-relaxed">{service.body}</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="kicker">Entregables</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {service.deliverables.map((item) => (
                <li key={item} className="py-3.5 text-[16px]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell">
          <p className="kicker">Casos</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {fallback.map((item) => (
              <Link key={item.slug} href={`/trabajo/${item.slug}`} className="group">
                <div className="img-zoom relative aspect-[16/10]">
                  <Image
                    src={item.cover}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="font-display mt-4 text-2xl font-medium tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-2 text-[15px] text-muted">{item.client}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center bg-sol px-6 text-[0.92rem] font-semibold text-ink hover:bg-sol-deep"
            >
              Pedir un brief
            </Link>
            <Link
              href="/oficio"
              className="inline-flex h-12 items-center border border-ink px-6 text-[0.92rem] font-semibold hover:border-cobre hover:text-cobre"
            >
              Todos los oficios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
