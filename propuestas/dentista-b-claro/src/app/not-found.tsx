import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-tight">
        Esta página no está.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Quizá se movió. El teléfono, no: 910 32 00 32.
      </p>
      <Button asChild className="mt-8 h-12 w-fit rounded-full px-6">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </Container>
  );
}
