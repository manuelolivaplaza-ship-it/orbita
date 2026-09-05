import type { Metadata } from "next";
import Link from "next/link";
import { Crop } from "@/components/crop";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mesa",
  description:
    "Cinco personas en NORTE. Estrategia, dirección, inversión, piezas y cuenta. Sin un piso fantasma.",
};

export default function MesaPage() {
  return (
    <>
      <PageIntro
        kicker="Mesa"
        title="Cinco sillas. Nadie de más."
        lead="Si escribes, te responde alguien que va a estar en la llamada. No hay un piso de cuentas, no hay un junior que desaparece a la tercera semana."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.05}>
              <Link href={`/mesa/${person.slug}`} className="group block">
                <Crop
                  src={person.image}
                  alt={person.name}
                  className="aspect-[3/4]"
                  sizes="(min-width: 1024px) 30vw, 50vw"
                />
                <p className="kicker mt-5">{person.hours}</p>
                <h2 className="font-display mt-2 text-[1.9rem] leading-tight tracking-tight group-hover:text-norte">
                  {person.name}
                </h2>
                <p className="mt-1 text-[14px] text-muted">{person.role}</p>
                <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-muted">
                  {person.focus}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
