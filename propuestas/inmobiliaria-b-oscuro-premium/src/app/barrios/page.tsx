import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/reveal";
import { neighborhoods } from "@/data/neighborhoods";
import { padIndex } from "@/lib/format";

export const metadata: Metadata = {
  title: "Territorios",
  description:
    "Lo Barnechea, Vitacura, Zapallar, Puerto Varas y Casablanca. Los territorios donde Obsidiana trabaja.",
};

export default function BarriosPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <Reveal>
          <p className="kicker">Atlas</p>
          <h1 className="display mt-5 max-w-4xl text-6xl sm:text-7xl lg:text-8xl">
            Territorios que
            <br />
            <em className="text-gold">todavía tienen silencio.</em>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            No cubrimos Chile. Cubrimos cuatro geografías donde una residencia
            de autor todavía tiene sentido.
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {neighborhoods.map((n, i) => (
            <Reveal key={n.slug} delay={i * 70}>
              <Link
                href={`/barrios/${n.slug}`}
                className="group grid overflow-hidden border border-[var(--line)] lg:grid-cols-12"
                data-cursor="hot"
              >
                <div className="img-zoom relative aspect-[16/10] lg:col-span-6 lg:aspect-auto">
                  <Image
                    src={n.image}
                    alt={n.name}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-between px-6 py-8 lg:col-span-6 lg:px-12 lg:py-14">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.24em] text-gold">
                      {padIndex(i)} · {n.kicker}
                    </p>
                    <h2 className="display mt-4 text-5xl">{n.name}</h2>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
                      {n.excerpt}
                    </p>
                  </div>
                  <p className="mt-8 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
                    Entrar al territorio →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
