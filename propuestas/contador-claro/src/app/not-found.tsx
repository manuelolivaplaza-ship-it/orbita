import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="shell">
        <p className="kicker">404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,5.2rem)] font-medium leading-[0.95] tracking-tight">
          Esta página no está en la libreta.
        </h1>
        <p className="mt-6 max-w-md text-[17px] text-muted">
          El vínculo no existe o la fecha ya corrió. Volvamos a la mesa.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center bg-cobre px-7 text-[0.9rem] font-semibold tracking-wide text-luz transition-colors hover:bg-cobre-deep"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
