import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-start justify-center px-5 pt-24 md:px-8 lg:px-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl italic md:text-7xl">
        Esta página no está en el plano.
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
