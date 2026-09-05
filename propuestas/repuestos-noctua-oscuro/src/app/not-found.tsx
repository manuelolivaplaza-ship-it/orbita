import Link from "next/link";
import { Arrow } from "@/components/mark";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80svh] max-w-[1480px] flex-col justify-end px-5 pb-24 pt-40 md:px-10 lg:px-16">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
        404
      </p>
      <h1 className="mt-6 max-w-2xl font-display text-6xl font-medium tracking-wide md:text-8xl">
        Esta ficha no está en bahía.
      </h1>
      <p className="mt-6 max-w-md text-mute">
        Puede que el código esté mal escrito, o que la pieza ya haya salido en
        la guía de las 05:30.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-sodium">
          Volver al inicio
          <Arrow />
        </Link>
        <Link href="/cruce" className="btn btn-ghost">
          Cruzar patente
        </Link>
      </div>
    </div>
  );
}
