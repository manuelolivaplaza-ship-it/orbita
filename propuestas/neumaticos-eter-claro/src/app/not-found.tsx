import Link from "next/link";
import { Arrow } from "@/components/mark";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10 lg:px-16">
      <p className="kicker">404</p>
      <h1 className="mt-6 max-w-2xl font-display text-6xl font-light tracking-tight md:text-8xl">
        Esta medida no está en el costado.
      </h1>
      <p className="mt-6 max-w-md text-ink-soft">
        El camino puede estar mal escrito. El piso, en todo caso, sigue en La
        Reina.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-ink">
          Volver al inicio
          <Arrow />
        </Link>
        <Link href="/medida" className="btn btn-ghost">
          Buscar medida
        </Link>
      </div>
    </div>
  );
}
