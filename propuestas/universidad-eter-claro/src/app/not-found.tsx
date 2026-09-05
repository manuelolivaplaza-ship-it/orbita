import Link from "next/link";
import { Arrow } from "@/components/mark";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[80svh] flex-col justify-end pb-24 pt-40">
      <p className="kicker">404</p>
      <h1 className="mt-6 max-w-2xl font-display text-6xl font-light tracking-tight md:text-8xl">
        Esta página no está en el campus.
      </h1>
      <p className="mt-6 max-w-md text-tinta-suave">
        Puede que el camino esté mal escrito. El claustro sigue con luz.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-ink">
          Volver al inicio
          <Arrow />
        </Link>
        <Link href="/admision" className="btn btn-ghost">
          Admisión 2027
        </Link>
      </div>
    </div>
  );
}
