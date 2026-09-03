import Link from "next/link";
import { Arrow } from "@/components/mark";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10 lg:px-16">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
        404
      </p>
      <h1 className="mt-6 max-w-2xl font-display text-6xl font-light tracking-tight md:text-8xl">
        Esta presencia no está en la casa.
      </h1>
      <p className="mt-6 max-w-md text-ink-soft">
        Puede que haya salido. Puede que el camino esté mal escrito. En cualquier
        caso, el piso sigue en silencio.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-gold">
          Volver al inicio
          <Arrow />
        </Link>
        <Link href="/coleccion" className="btn btn-ghost">
          Ver la colección
        </Link>
      </div>
    </div>
  );
}
