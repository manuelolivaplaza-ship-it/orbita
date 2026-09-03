import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { tech } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tecnología",
  description:
    "Escáner intraoral, CBCT, diseño digital de sonrisa y cirugía guiada. En Cian el paciente mira la misma pantalla que el doctor.",
};

export default function TecnologiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Tecnología"
        title="Lo que no se ve, se escanea."
        lead="La máquina no reemplaza el criterio. Lo obliga a mostrarse. Cero silicona, tomografía cuando el hueso importa, y un mock-up antes de tallar."
      />
      <Container className="pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[1.4rem] lg:aspect-auto lg:min-h-[28rem]">
            <Image
              src="/images/scanner.jpg"
              alt="Escáner intraoral 3D"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-[1.4rem] lg:aspect-auto">
            <Image
              src="/images/corridor.jpg"
              alt="Pasillo clínico de Cian"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.4rem] bg-border sm:grid-cols-2">
          {tech.map((item) => (
            <li key={item.n} className="bg-card p-8 sm:p-10">
              <p className="font-display text-cian">{item.n}</p>
              <h2 className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
                {item.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              El paciente mira la misma pantalla.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              No hay un “después te explico”. El modelo 3D se rota entre los
              dos. Si hay una caries en el fondo, se ve. Si el implante necesita
              hueso, se ve. Esa costumbre —mostrar— es más importante que la
              marca del escáner.
            </p>
            <Button asChild className="mt-8 h-12 rounded-xl px-6">
              <Link href="/hora">Agendar diagnóstico 3D</Link>
            </Button>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-[1.4rem]">
            <Image
              src="/images/veneer.jpg"
              alt="Ceramista trabajando una carilla de porcelana"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
