import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Perspectivas",
  description:
    "Notas del estudio sobre gobierno societario, laboral y familia. Lo que estamos pensando.",
};

export default function PerspectivasPage() {
  return (
    <>
      <PageIntro overline="Perspectivas" title="Lo que estamos pensando.">
        <p>
          No es un blog de posicionamiento. Son notas que salen de asuntos
          reales, escritas para un directorio que no tiene tiempo de leer
          doctrina.
        </p>
      </PageIntro>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {articles.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <Link
                  href={`/perspectivas/${item.slug}`}
                  className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:py-14"
                >
                  <div className="md:col-span-3">
                    <p className="text-[12px] tracking-[0.16em] text-muted-foreground uppercase">
                      {item.dateLabel}
                    </p>
                    <p className="mt-2 text-[12px] tracking-[0.16em] text-bronze uppercase">
                      {item.area} · {item.read}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <h2 className="font-display text-3xl tracking-tight md:text-5xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
                      {item.dek}
                    </p>
                  </div>
                  <span className="hidden justify-end text-xl transition-transform duration-500 group-hover:translate-x-1 md:col-span-1 md:flex">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
