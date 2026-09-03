import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
      <div>
        <p className="kicker">404</p>
        <h1 className="display mt-5 text-5xl sm:text-6xl">
          Esta página se fue a dormir.
        </h1>
        <p className="mt-5 max-w-md text-pretty text-muted-foreground">
          El enlace no existe o se mudó. El animal, en cambio, sí puede estar
          acá: pida un turno o vuelva al inicio.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full px-6">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <Link href="/turnos">Pedir turno</Link>
          </Button>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
        <Image
          src="/images/dog-sleep.jpg"
          alt="Perro dormido sobre lino"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
