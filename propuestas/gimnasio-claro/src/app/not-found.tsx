import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center py-24">
      <p className="kicker">404</p>
      <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-7xl">
        Esta sala no existe.
      </h1>
      <p className="mt-5 max-w-md text-ink-soft">
        El vínculo se perdió, como una toalla en el locker equivocado. Volvamos
        al salón.
      </p>
      <div className="mt-10">
        <ButtonLink href="/">Ir al inicio</ButtonLink>
      </div>
    </Container>
  );
}
