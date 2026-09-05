import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { areas } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Áreas",
  description:
    "Ansiedad, ánimo, duelo, trauma, pareja, infanto-juvenil, sueño y psiquiatría. Centro de salud mental NOCTUA, Las Condes.",
};

export default function AreasPage() {
  return (
    <>
      <PageIntro
        kicker="Áreas"
        title="Lo que se nombra, se puede trabajar."
        lead="Ocho lecturas. Una casa. Si el caso no es nuestro, te lo decimos en la primera hora — y te derivamos con nombre."
      />

      <section className="pb-28">
        <div className="shell grid gap-px bg-line">
          {areas.map((area, index) => (
            <Reveal key={area.slug} delay={(index % 2) * 40} className="bg-void">
              <Link
                href={`/areas/${area.slug}`}
                className="group grid items-center gap-8 p-8 md:grid-cols-12 md:p-12"
              >
                <div className="frame relative aspect-[16/10] md:col-span-5">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                    {area.n} · {area.thought}
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight group-hover:text-amber md:text-5xl">
                    {area.title}
                  </h2>
                  <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-paper-dim">
                    {area.lead}
                  </p>
                  <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    {area.duration} · desde {formatCLP(area.priceFrom)}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl font-display text-3xl font-semibold">
            Si no sabes el nombre, igual se puede empezar.
          </p>
          <Link href="/primera" className="btn btn-amber">
            Pedir primera hora
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
