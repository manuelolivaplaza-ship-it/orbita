import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { team } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mesa",
  description:
    "Emilia Lagos, Martín Ossandón, Sofía Huneeus y Joaquín Palma. La mesa de SOLAR en La Reina.",
};

export default function MesaPage() {
  return (
    <>
      <PageIntro
        plate="04"
        kicker="Casa"
        title="Cuatro oficios, una mesa."
        lead="Una socia que camina la cuadra, un arquitecto que mide el frente, una urbanista que lee el plan regulador y un abogado que no le tiene miedo al Conservador."
        place={site.address.city}
      />
      <section className="pb-10">
        <div className="shell relative min-h-[48vh]">
          <Image
            src="/images/fachada.jpg"
            alt="Fachada de la casa de SOLAR en Avenida Larraín"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>
      <section className="pb-24">
        <div className="shell grid gap-10 md:grid-cols-2">
          {team.map((person) => (
            <Reveal key={person.slug}>
              <Link href={`/mesa/${person.slug}`} className="group grid gap-5 sm:grid-cols-2">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-end pb-2">
                  <p className="kicker">{person.role}</p>
                  <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight">
                    {person.name}
                  </h2>
                  <p className="mt-2 text-[15px] text-muted">{person.beat}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {person.bio[0]}
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
