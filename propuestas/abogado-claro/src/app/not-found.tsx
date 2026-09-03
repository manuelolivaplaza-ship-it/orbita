import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <Container>
        <p className="overline-label">404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
          Esta página no está en el expediente.
        </h1>
        <p className="mt-6 max-w-md text-[17px] text-muted-foreground">
          El vínculo no existe o el asunto se archivó. Volvamos al estudio.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center bg-ink px-7 text-[11px] tracking-[0.22em] text-paper uppercase transition-colors hover:bg-bronze"
        >
          Volver al inicio
        </Link>
      </Container>
    </section>
  );
}
