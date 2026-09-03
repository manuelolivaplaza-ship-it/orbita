"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/clinic";

export function CtaBand({
  title = "Cuando haga falta, la puerta verde está.",
  text = "Pida un turno o llame si no puede esperar. El triaje de guardia atiende las veinticuatro horas.",
}: {
  title?: string;
  text?: string;
}) {
  const pathname = usePathname();
  if (pathname === "/turnos") return null;

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 className="display text-4xl sm:text-5xl">{title}</h2>
          <p className="mt-4 text-pretty text-primary-foreground/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="h-12 rounded-full bg-background px-6 text-foreground hover:bg-background/90"
          >
            <Link href="/turnos">Pedir turno</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-primary-foreground/25 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={`tel:${clinic.phoneTel}`}>Llamar {clinic.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
