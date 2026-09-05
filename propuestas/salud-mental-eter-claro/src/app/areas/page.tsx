import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { areas } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Áreas",
  description:
    "Ansiedad, ánimo, duelo, trauma, pareja, infanto-juvenil, sueño y psiquiatría. Providencia, Santiago.",
};

export default function AreasPage() {
  return (
    <>
      <PageIntro
        kicker="Áreas"
        title="Lo que se nombra, se puede trabajar."
        lead="Ocho enfoques. Un mismo criterio: cincuenta minutos, la misma persona, y decir que no cuando el caso no es nuestro."
      />

      <section className="pb-28">
        <div className="shell grid gap-16">
          {areas.map((area, index) => (
            <Reveal key={area.slug} delay={(index % 3) * 50}>
              <Link
                href={`/areas/${area.slug}`}
                className="group grid items-center gap-8 border-t border-linea pt-10 lg:grid-cols-12"
              >
                <div className="frame relative aspect-[16/10] lg:col-span-5 lg:aspect-[5/3]">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sage-deep">
                    {area.n}
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-light tracking-tight group-hover:text-sage-deep md:text-5xl">
                    {area.title}
                  </h2>
                  <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-tinta-suave">
                    {area.lead}
                  </p>
                  <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-gris">
                    {area.duration} · desde {formatCLP(area.priceFrom)}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
