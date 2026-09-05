import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { team } from "@/data/content";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Ocho médicos en ETER Providencia. El que figura en la hora es el que atiende. Sin rotación sorpresa.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="Equipo"
        title="Ocho. El mismo de principio a fin."
        lead="No hay fotos posando. Hay nombre, registro y un oficio. Si un médico no asiste, se reprograma el mismo día — no se improvisa un reemplazo."
      />

      <section className="pb-28">
        <div className="shell grid gap-px bg-linea md:grid-cols-2">
          {team.map((person, index) => (
            <Reveal
              key={person.slug}
              delay={(index % 2) * 70}
              className="grid bg-papel md:grid-cols-12"
            >
              <div className="relative aspect-[4/3] md:col-span-5 md:aspect-auto">
                <Image
                  src={person.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between px-6 py-8 md:col-span-7 md:px-8 md:py-10">
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-eter">
                    {person.focus}
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
                    {person.name}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-tinta-suave">
                    {person.credential}
                    <br />
                    {person.extra}
                  </p>
                  <p className="mt-6 font-display text-xl italic font-light text-tinta-suave">
                    {person.line}
                  </p>
                </div>
                <Link
                  href={`/especialidades/${person.specialtySlug}`}
                  className="link-eter mt-8 w-fit font-mono text-[0.62rem] uppercase tracking-[0.22em]"
                >
                  La especialidad
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
