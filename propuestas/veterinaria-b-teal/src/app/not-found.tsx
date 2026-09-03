import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col justify-center pt-32 pb-20">
      <p className="kicker">404</p>
      <h1 className="mt-4 max-w-xl font-display text-5xl tracking-tight sm:text-6xl">
        Esta orilla
        <span className="italic text-moss"> no existe.</span>
      </h1>
      <p className="mt-5 max-w-md text-muted-foreground">
        La página se movió o nunca estuvo. El hospital, sí: Isla Teja, las 24
        horas.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-11 rounded-full px-6">
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 rounded-full px-6">
          <Link href="/urgencias">Urgencias</Link>
        </Button>
      </div>
    </Container>
  );
}
