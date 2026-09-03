import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { treatments } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tratamientos",
  description:
    "Diseño de sonrisa, carillas, implantes, ortodoncia invisible, encías e higiene. Cada tratamiento con precio orientativo en pesos y un plan por escrito.",
};

export default function TratamientosPage() {
  return (
    <>
      <PageHero
        eyebrow="Tratamientos"
        title="Un menú corto. Hecho a conciencia."
        lead="No cubrimos veintidós especialidades para parecer grandes. Hacemos bien lo que firmamos. Honorarios en pesos chilenos, cifra cerrada antes de empezar."
      />
      <Container className="pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {treatments.map((t) => (
            <Link
              key={t.slug}
              href={`/tratamientos/${t.slug}`}
              className="group overflow-hidden rounded-[1.6rem] border border-border bg-card"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={t.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-[0.7rem] tracking-[0.16em] uppercase text-lagoon">
                  {t.price}
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-tight">
                  {t.name}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {t.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
