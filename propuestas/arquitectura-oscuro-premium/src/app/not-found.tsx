import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[80svh] flex-col items-start justify-center pt-24">
      <p className="kicker">404</p>
      <h1 className="mt-4 font-display text-5xl italic md:text-7xl">
        No hay nada en esta cota.
      </h1>
      <Link
        href="/"
        className="mt-8 text-[11px] uppercase tracking-[0.22em] link-line"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
