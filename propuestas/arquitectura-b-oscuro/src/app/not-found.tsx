import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70svh] flex-col justify-end pb-24 pt-36">
      <p className="kicker">404</p>
      <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl">
        Esta página no existe.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-7 text-paper-dim">
        El umbral no está. Vuelva al índice de obras o al estudio.
      </p>
      <div className="mt-10 flex flex-wrap gap-6">
        <Link href="/" className="btn">
          Inicio
        </Link>
        <Link href="/obras" className="btn-ghost link-line">
          Ver obras
        </Link>
      </div>
    </section>
  );
}
