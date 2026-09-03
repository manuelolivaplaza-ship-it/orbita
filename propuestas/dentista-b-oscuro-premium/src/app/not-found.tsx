import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-24">
      <p className="kicker">404</p>
      <h1 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-tight">
        Esta página no está en la ficha.
      </h1>
      <p className="mt-5 max-w-md text-muted-foreground">
        Quizá el tratamiento cambió de nombre. Vuelve al inicio o pide hora
        igual.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-12 rounded-none px-6 text-[0.72rem] tracking-[0.16em] uppercase">
          <Link href="/">Inicio</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 rounded-none px-6 text-[0.72rem] tracking-[0.16em] uppercase"
        >
          <Link href="/agenda">Agendar</Link>
        </Button>
      </div>
    </Container>
  );
}
