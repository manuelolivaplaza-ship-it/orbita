import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="shell">
        <p className="kicker">404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,5.2rem)] font-bold leading-[0.95] tracking-tight">
          Esta sala no está en el plano.
        </h1>
        <p className="mt-6 max-w-md text-[17px] text-muted">
          El vínculo no existe o la puerta está tapiada. Volvamos al patio.
        </p>
        <Link
          href="/"
          className="font-display mt-10 inline-flex h-12 items-center bg-barro px-7 text-[0.9rem] font-semibold text-luz transition-colors hover:bg-barro-deep"
        >
          Volver al patio
        </Link>
      </div>
    </section>
  );
}
