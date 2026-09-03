import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Medicina preventiva, interna, cirugía, imagen, felinos, exóticos, odontología, hospitalización y urgencias 24 h en Valdivia.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageIntro
        kicker="Servicios"
        title="Un menú corto."
        italic="Hecho a conciencia."
        lead="No hacemos de todo. Hacemos lo que un hospital de Los Ríos tiene que poder resolver sin mandarte a Santiago a las once de la noche."
      />
      <Container className="pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
              <Link href={`/servicios/${s.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <p className="mt-4 text-[0.7rem] tracking-[0.18em] uppercase text-moss">
                  {s.species}
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-tight">
                  {s.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <p className="mt-3 text-sm text-foreground">{s.price}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm text-moss">
                  Ver ficha
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
