import Link from "next/link";
import { Arrow } from "@/components/mark";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80svh] max-w-[1480px] flex-col justify-end px-5 pb-24 pt-40 md:px-10 lg:px-16">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
        404
      </p>
      <h1 className="mt-6 max-w-2xl font-display text-6xl font-light tracking-tight md:text-8xl">
        Esta medida no está en patio.
      </h1>
      <p className="mt-6 max-w-md text-ink-soft">
        Puede que el código esté mal escrito, o que la tira ya haya salido en
        la guía. Las familias siguen en su sitio.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-ink">
          Volver al inicio
          <Arrow />
        </Link>
        <Link href="/familias" className="btn btn-ghost">
          Ver familias
        </Link>
      </div>
    </div>
  );
}
