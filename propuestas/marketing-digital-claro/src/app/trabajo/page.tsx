import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Casos de FARO: vino, fintech, turismo, hogar y gastronomía. Números de verdad, no moodboards.",
};

export default function TrabajoPage() {
  return (
    <>
      <PageIntro
        kicker="Trabajo"
        title="Cinco marcas. Cero templates."
        lead="Elegimos pocos encargos y los llevamos hasta el número. Acá no hay casos “de awareness” que no se pueden defender."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-12 lg:gap-16">
          {works.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.04}>
              <Link
                href={`/trabajo/${item.slug}`}
                className="group grid items-center gap-8 lg:grid-cols-12"
              >
                <div
                  className={`img-zoom relative aspect-[16/10] ${
                    index % 2 === 1
                      ? "lg:col-span-6 lg:col-start-7 lg:row-start-1"
                      : "lg:col-span-6"
                  }`}
                >
                  <Image
                    src={item.cover}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className={
                    index % 2 === 1
                      ? "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                      : "lg:col-span-5 lg:col-start-8"
                  }
                >
                  <p className="kicker">
                    {item.client} · {item.year}
                  </p>
                  <h2 className="font-display mt-3 text-[clamp(1.8rem,3.4vw,2.8rem)] font-medium leading-[0.98] tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-muted">
                    {item.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6">
                    {item.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display nums text-2xl font-medium">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-[12px] text-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-[13px] font-semibold tracking-wide text-cobre">
                    Leer el caso
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
