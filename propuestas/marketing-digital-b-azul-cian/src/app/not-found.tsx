import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="shell">
        <p className="mark">404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,5.2rem)] font-medium leading-[0.95] tracking-tight">
          Esta estación no está en la carta.
        </h1>
        <div className="rule mt-8 w-16" />
        <p className="mt-6 max-w-md text-[17px] text-muted">
          El vínculo no existe o la boya se soltó. Volvamos a la tabla.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center bg-navy px-7 text-[0.9rem] font-semibold text-foam transition-colors hover:bg-ink"
        >
          Volver a MAREA
        </Link>
      </div>
    </section>
  );
}
