import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Reveal } from "@/components/reveal";
import { articles, formatArticleDate, getArticle } from "@/data/journal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Diario" };
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <article className="pt-20 pb-24">
      <div className="relative h-[62svh] min-h-[420px]">
        <Image src={a.image} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/40 to-black/25" />
        <Container className="relative flex h-full flex-col justify-end pb-12">
          <p className="kicker">
            {a.kicker} · {formatArticleDate(a.date)} · {a.read}
          </p>
          <h1 className="display mt-4 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            {a.title}
          </h1>
        </Container>
      </div>

      <Container>
        <Reveal className="mx-auto mt-16 max-w-2xl">
          <p className="font-display text-2xl italic leading-snug text-ivory-soft">
            {a.excerpt}
          </p>
          <div className="gold-rule mt-8" />
          <div className="mt-10 space-y-6 text-base leading-relaxed text-ivory-soft">
            {a.body.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
          <p className="mt-12 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
            Obsidiana · Diario
          </p>
        </Reveal>

        <div className="mt-24 border-t border-[var(--line)] pt-12">
          <p className="kicker">Seguir leyendo</p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/diario/${o.slug}`} className="group">
                <h2 className="font-display text-3xl group-hover:text-gold">{o.title}</h2>
                <p className="mt-3 text-sm text-muted">{o.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
