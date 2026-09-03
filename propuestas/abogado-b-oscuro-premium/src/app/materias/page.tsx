import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { getLawyer, practices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Materias",
  description:
    "Civil, laboral, familia, recursos constitucionales y derecho administrativo. Cinco materias. Las que leemos de verdad.",
};

export default function MateriasPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="01"
        kicker="Materias"
        title="Cinco piezas. Ninguna de relleno."
        lede="No cubrimos el Código de punta a punta. Tomamos lo que litigamos: civil, laboral, familia, recursos y administrativo. Penal no."
      />

      <div className="mt-4 divide-y divide-line border-b border-line">
        {practices.map((p, i) => {
          const lawyer = getLawyer(p.lawyerSlug);
          return (
            <Reveal key={p.slug} delay={i * 0.04}>
              <article className="grid gap-8 py-12 lg:grid-cols-12">
                <div className="relative aspect-[16/10] overflow-hidden border border-line lg:col-span-5 lg:aspect-auto">
                  <Image
                    src={p.image}
                    alt={`Imagen de la materia ${p.title}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center lg:col-span-7 lg:pl-4">
                  <p className="kicker">
                    {p.folio} · {lawyer?.name}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[0.95]">
                    {p.title}
                  </h2>
                  <p className="mt-4 max-w-[44ch] text-lg text-paper-dim">
                    {p.lead}
                  </p>
                  <ul className="mt-6 grid gap-1 text-[0.95rem] text-muted">
                    {p.work.slice(0, 4).map((w) => (
                      <li key={w}>· {w}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/materias/${p.slug}`}
                    className="btn btn-ghost mt-8 w-fit"
                  >
                    Ver pieza {p.folio}
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
