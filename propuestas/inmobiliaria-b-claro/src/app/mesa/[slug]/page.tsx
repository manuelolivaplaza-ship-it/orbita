import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { TitleBlock } from "@/components/title-block";
import { getPerson, team } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return team.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return { title: "Mesa" };
  return {
    title: person.name,
    description: `${person.name}, ${person.role} en SOLAR. ${person.beat}.`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  return (
    <section className="pt-28 pb-24 lg:pt-36">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <TitleBlock plate="M" place="La Reina" extra={person.role} />
          <div className="img-zoom relative mt-6 aspect-[3/4]">
            <Image
              src={person.image}
              alt={person.name}
              fill
              priority
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>
        <Reveal className="flex flex-col justify-end lg:col-span-6 lg:col-start-7">
          <p className="kicker">
            {person.role} · {person.beat}
          </p>
          <h1 className="font-display mt-3 text-[clamp(2.6rem,5vw,4.6rem)] font-semibold leading-[0.94] tracking-tight">
            {person.name}
          </h1>
          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-muted">
            {person.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 text-[16px]">
            <a href={`mailto:${person.email}`} className="link-line">
              {person.email}
            </a>
            <br />
            <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="link-line">
              {person.phone}
            </a>
          </p>
          <Link
            href="/mesa"
            className="font-mono mt-10 text-[12px] tracking-[0.14em] uppercase link-line"
          >
            Toda la mesa
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
