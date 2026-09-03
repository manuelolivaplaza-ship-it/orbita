import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-24">
      <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">
        Esta página se fue con la bruma.
      </h1>
      <p className="mt-5 max-w-md text-muted-foreground">
        El enlace no existe o cambió de sitio. Vuelve al inicio o agenda una
        hora.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-12 rounded-full px-6">
          <Link href="/">Inicio</Link>
        </Button>
        <Button asChild variant="outline" className="h-12 rounded-full px-6">
          <Link href="/primera-hora">Agendar hora</Link>
        </Button>
      </div>
    </Container>
  );
}
