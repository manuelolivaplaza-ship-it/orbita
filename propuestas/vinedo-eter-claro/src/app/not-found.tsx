import Link from "next/link";
import { Arrow } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[80svh] flex-col justify-end pb-24 pt-40">
      <p className="kicker">404</p>
      <h1 className="mt-6 max-w-2xl font-display text-6xl tracking-tight md:text-8xl">
        Esta página se la llevó la niebla.
      </h1>
      <p className="mt-6 max-w-md text-tinta-suave">
        El camino no existe. La cava sí.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-ink">
          Volver al fundo
          <Arrow />
        </Link>
        <Link href="/vinos" className="btn btn-ghost">
          Ver vinos
        </Link>
      </div>
    </div>
  );
}
