import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-start justify-center pt-28 pb-24">
      <p className="kicker">404</p>
      <h1 className="font-display mt-5 text-5xl tracking-tight sm:text-7xl">
        Esta pieza no está en la mesa.
      </h1>
      <p className="mt-5 max-w-md text-tinta-suave">
        El vínculo se perdió, o la hornada se acabó. Volvamos al índice.
      </p>
      <Link href="/coleccion" className="btn btn-ink mt-10">
        Ver la colección
      </Link>
    </section>
  );
}
