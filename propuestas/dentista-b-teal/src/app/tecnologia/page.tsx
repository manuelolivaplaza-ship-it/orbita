import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { tech } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tecnología",
  description:
    "Escáner intraoral 3D, CBCT, microscopio y laboratorio digital en Bruma, Vitacura. Sin moldes de alginato.",
};

export default function TecnologiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Tecnología"
        title="Precisión que no se oye."
        lead="La máquina no reemplaza al criterio. Lo que hace es quitar adivinanza: ves lo que vemos, y decides con datos."
      />
      <Container className="pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/scanner.jpg"
                alt="Escáner intraoral sobre piedra teal, con la laguna al fondo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/craft.jpg"
                alt="Ceramista trabajando una carilla de porcelana"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.6rem] bg-border sm:grid-cols-2">
          {tech.map((item) => (
            <div key={item.title} className="bg-card p-8 sm:p-10">
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                {item.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-xl leading-relaxed text-muted-foreground">
          Cero moldes de alginato. Cero sorpresa de laboratorio. Si un
          aparato no mejora el diagnóstico o la experiencia, no está en la
          suite.
        </p>
        <Button asChild className="mt-8 h-12 rounded-full px-6">
          <Link href="/primera-hora">Probar el escáner</Link>
        </Button>
      </Container>
    </>
  );
}
