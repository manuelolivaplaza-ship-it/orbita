import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-[0.72rem] tracking-[0.22em] uppercase text-tide">
        404
      </p>
      <h1 className="mt-4 max-w-xl font-display text-4xl tracking-tight sm:text-6xl">
        Esta página no está en el escáner.
      </h1>
      <p className="mt-5 max-w-md text-muted-foreground">
        El enlace no existe o se movió. Vuelve al inicio o agenda una hora:
        eso sí está.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-12 rounded-xl px-6">
          <Link href="/">Volver a Cian</Link>
        </Button>
        <Button asChild variant="outline" className="h-12 rounded-xl px-6">
          <Link href="/hora">Agendar hora</Link>
        </Button>
      </div>
    </Container>
  );
}
