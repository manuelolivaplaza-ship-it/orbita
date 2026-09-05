import Link from "next/link";
import { Arrow } from "@/components/mark";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[80svh] flex-col justify-end pb-24 pt-40">
      <p className="kicker">404</p>
      <h1 className="mt-6 max-w-2xl font-display text-6xl font-light tracking-tight md:text-8xl">
        Esta página no está en la casa.
      </h1>
      <p className="mt-6 max-w-md text-tinta-suave">
        Puede que el camino esté mal escrito. El pabellón sigue con luz norte.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-ink">
          Volver al inicio
          <Arrow />
        </Link>
        <Link href="/agenda" className="btn btn-ghost">
          Agendar hora
        </Link>
      </div>
    </div>
  );
}
