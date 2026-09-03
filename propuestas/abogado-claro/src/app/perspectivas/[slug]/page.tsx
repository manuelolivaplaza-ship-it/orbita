import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { articles, getArticle } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const others = articles.filter((item) => item.slug !== article.slug);

  return (
    <article className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <Container>
        <Reveal>
          <p className="overline-label">
            {article.area} · {article.dateLabel} · {article.read}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.98] tracking-tight">
            {article.title}
          </h1>
          <p className="mt-8 max-w-2xl text-[19px] leading-relaxed text-muted-foreground">
            {article.dek}
          </p>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-16 max-w-2xl space-y-7 text-[17px] leading-[1.85] text-ink/85">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-2xl border-t border-line pt-10">
          <p className="text-[15px] text-muted-foreground">
            Esta nota no es un dictamen. Si el asunto es suyo, escríbanos.
          </p>
          <div className="mt-6">
            <ArrowLink href="/contacto">Consultar al estudio</ArrowLink>
          </div>
        </div>

        <div className="mt-24 border-t border-line pt-12">
          <p className="overline-label mb-8">También</p>
          <div className="grid gap-8 md:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/perspectivas/${item.slug}`}
                className="group border-t border-line pt-5"
              >
                <p className="text-[12px] tracking-[0.16em] text-muted-foreground uppercase">
                  {item.dateLabel}
                </p>
                <h2 className="font-display mt-3 text-3xl tracking-tight group-hover:text-bronze">
                  {item.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
