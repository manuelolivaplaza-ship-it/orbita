import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/reveal";
import { articles, formatArticleDate } from "@/data/journal";

export const metadata: Metadata = {
  title: "Diario",
  description:
    "Notas de oficio sobre orientación, UF, Zapallar y las casas de lago. El criterio de Obsidiana, por escrito.",
};

export default function DiarioPage() {
  const [lead, ...rest] = articles;

  return (
    <div className="pt-28 pb-24">
      <Container>
        <Reveal>
          <p className="kicker">Diario</p>
          <h1 className="display mt-5 text-6xl sm:text-7xl lg:text-8xl">
            Notas de
            <br />
            <em className="text-gold">oficio.</em>
          </h1>
        </Reveal>

        {lead ? (
          <Reveal className="mt-16" delay={60}>
            <Link
              href={`/diario/${lead.slug}`}
              className="group grid overflow-hidden border border-[var(--line)] lg:grid-cols-12"
            >
              <div className="img-zoom relative aspect-[16/10] lg:col-span-7 lg:aspect-auto">
                <Image
                  src={lead.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 58vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-10 lg:col-span-5 lg:px-12">
                <p className="kicker">
                  {lead.kicker} · {formatArticleDate(lead.date)}
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight group-hover:text-gold lg:text-5xl">
                  {lead.title}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted">{lead.excerpt}</p>
                <p className="mt-8 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
                  Leer →
                </p>
              </div>
            </Link>
          </Reveal>
        ) : null}

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={i * 70} as="article">
              <Link href={`/diario/${a.slug}`} className="group block">
                <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 30vw, 100vw"
                  />
                </div>
                <p className="kicker mt-5">
                  {a.kicker} · {a.read}
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight group-hover:text-gold">
                  {a.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
