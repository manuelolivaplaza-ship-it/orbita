import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { lawyers } from "@/lib/site";

export const metadata: Metadata = {
  title: "La mesa",
  description:
    "Cuatro abogados. Quien toma la primera hora firma el escrito. Emilia, Tomás, Catalina e Ignacio.",
};

export default function EquipoPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="02"
        kicker="La mesa"
        title="Cuatro sillas. Ninguna de vitrina."
        lede="Quien lo recibe, lo lleva. WhatsApp directo del abogado, no de una secretaría que no leyó el expediente."
      />

      <div className="mt-8 divide-y divide-line border-b border-line">
        {lawyers.map((l, i) => (
          <Reveal key={l.slug} delay={i * 0.04}>
            <article className="grid items-center gap-8 py-12 md:grid-cols-[minmax(0,280px)_1fr] lg:grid-cols-[minmax(0,340px)_1fr]">
              <Link href={`/equipo/${l.slug}`} className="img-zoom relative aspect-[3/4]">
                <Image
                  src={l.image}
                  alt={`Retrato de ${l.name}`}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </Link>
              <div>
                <p className="kicker">{l.role}</p>
                <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
                  <Link href={`/equipo/${l.slug}`} className="hover:text-copper">
                    {l.name}
                  </Link>
                </h2>
                <p className="mt-3 text-copper">{l.practice}</p>
                <p className="mt-5 max-w-[46ch] text-paper-dim">{l.bio[0]}</p>
                <p className="mt-4 font-mono text-sm text-muted">{l.email}</p>
                <Link
                  href={`/equipo/${l.slug}`}
                  className="btn btn-ghost mt-8"
                >
                  Ver ficha
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
