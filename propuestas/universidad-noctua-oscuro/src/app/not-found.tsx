import Link from "next/link";
import { Arrow } from "@/components/mark";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10 lg:px-16">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
        404
      </p>
      <h1 className="mt-6 max-w-2xl font-display text-6xl font-semibold tracking-tight md:text-8xl">
        Esta página no está en el recinto.
      </h1>
      <p className="mt-6 max-w-md text-paper-dim">
        Puede que el camino esté mal escrito. Puede que la hora no sea esta. El
        seminario sigue a las 17:30.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-amber">
          Volver al inicio
          <Arrow />
        </Link>
        <Link href="/carreras" className="btn btn-ghost">
          Ver las carreras
        </Link>
      </div>
    </div>
  );
}
