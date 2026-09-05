import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { specialties } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Especialidades",
  description:
    "Ocho especialidades en una casa de Providencia: medicina interna, pediatría, ginecología, traumatología, dermatología, otorrino, cardiología y procedimientos.",
};

export default function EspecialidadesPage() {
  return (
    <>
      <PageIntro
        kicker="Especialidades"
        title="Ocho oficios. Una ficha."
        lead="No somos un mall médico. Cada especialidad tiene sala, tiempo y un médico que no rota. Si el caso no es de esta casa, se deriva con nombre."
      />

      <section className="pb-28">
        <div className="shell grid gap-px bg-linea md:grid-cols-2">
          {specialties.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={(index % 2) * 80}
              className="bg-papel"
            >
              <Link href={`/especialidades/${item.slug}`} className="group block">
                <div className="frame relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-8 md:px-10 md:py-10">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
                    {item.n} · {item.room}
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-light tracking-tight group-hover:text-eter">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-tinta-suave">
                    {item.lead}
                  </p>
                  <p className="mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
                    {item.duration} · desde {formatCLP(item.priceFrom)}
                    <Arrow />
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
