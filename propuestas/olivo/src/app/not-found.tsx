import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container className="max-w-xl text-center">
        <p className="text-xs tracking-[0.22em] text-primary uppercase">404</p>
        <h1 className="mt-3 font-heading text-5xl">Esta dirección no existe.</h1>
        <p className="mt-4 text-muted-foreground">
          Puede que la propiedad se haya vendido —eso sería una buena noticia—
          o que el link esté mal. Volvamos a la cartera.
        </p>
        <Button asChild className="mt-8 h-12 px-6">
          <Link href="/propiedades">Ver propiedades</Link>
        </Button>
      </Container>
    </section>
  );
}
