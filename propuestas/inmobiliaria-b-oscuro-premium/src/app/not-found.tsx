import Link from "next/link";
import { Container } from "@/components/reveal";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] items-center pt-20">
      <Container>
        <p className="kicker">404</p>
        <h1 className="display mt-5 text-7xl">
          Esta puerta
          <br />
          <em className="text-gold">no existe.</em>
        </h1>
        <p className="mt-6 max-w-md text-sm text-muted">
          La residencia se entregó, el enlace cambió, o el umbral nunca estuvo
          en la colección.
        </p>
        <Link href="/propiedades" className="btn-gold mt-10">
          Volver a la colección
        </Link>
      </Container>
    </div>
  );
}
