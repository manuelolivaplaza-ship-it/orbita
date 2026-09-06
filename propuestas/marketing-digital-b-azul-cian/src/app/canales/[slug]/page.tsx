import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Frame } from "@/components/frame";
import { Reveal } from "@/components/reveal";
import { channels, getChannel, getPerson } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return channels.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const channel = getChannel(slug);
  if (!channel) return {};
  return {
    title: channel.title,
    description: channel.lead,
  };
}

export default async function ChannelPage({ params }: Props) {
  const { slug } = await params;
  const channel = getChannel(slug);
  if (!channel) notFound();
  const person = getPerson(channel.personSlug);
  const others = channels.filter((item) => item.slug !== channel.slug);

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="shell">
          <Reveal>
            <p className="mark">
              Estación {channel.station} · {channel.title}
            </p>
            <h1 className="font-display mt-4 max-w-[14ch] text-[clamp(2.6rem,6.5vw,5.2rem)] font-medium leading-[0.94] tracking-tight">
              {channel.short}
            </h1>
            <div className="rule mt-7 w-16" />
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-muted">
              {channel.lead}
            </p>
            <p className="font-mono nums mt-6 text-[15px] text-cyan-deep">
              {channel.price}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="shell">
          <Frame
            src={channel.image}
            alt=""
            ratio="aspect-[16/9] lg:aspect-[21/9]"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            {channel.body.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-5 text-[17px] leading-[1.8] text-muted first:mt-0"
              >
                {p}
              </p>
            ))}
            <ul className="mt-10">
              {channel.work.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-t border-line py-3 text-[15px]"
                >
                  <span className="text-cyan-deep" aria-hidden>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="mark">Cuándo sí</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
              {channel.when.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mark mt-10">Cuándo no</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
              {channel.not.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-8 text-[14px] text-muted">{channel.priceNote}</p>
            {person ? (
              <p className="mt-8 text-[15px]">
                Lo lleva{" "}
                <Link href={`/mesa/${person.slug}`} className="link-line font-medium">
                  {person.name}
                </Link>
                .
              </p>
            ) : null}
            <Link
              href="/lectura"
              className="mt-10 inline-flex h-12 items-center bg-navy px-6 text-[0.92rem] font-semibold text-foam transition-colors hover:bg-ink"
            >
              Pedir una lectura
            </Link>
            <p className="mark mt-14">Las otras estaciones</p>
            <ul className="mt-4">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/canales/${item.slug}`}
                    className="group flex items-baseline justify-between gap-4 border-t border-line py-3"
                  >
                    <span className="font-display text-[1.3rem] tracking-tight group-hover:text-blue">
                      {item.title}
                    </span>
                    <span className="font-mono nums text-[12px] text-muted">
                      {item.station}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
