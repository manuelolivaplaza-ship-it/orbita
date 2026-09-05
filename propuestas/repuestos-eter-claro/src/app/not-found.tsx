import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="shell">
        <p className="kicker">404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,5.2rem)] font-normal leading-[0.92] tracking-tight">
          Esta pieza no está en ficha.
        </h1>
        <p className="mt-6 max-w-md text-[17px] text-muted">
          El vínculo no existe o la referencia se movió. Volvamos al índice.
        </p>
        <Link
          href="/"
          className="font-ui mt-10 inline-flex h-12 items-center bg-ether-deep px-7 text-[0.78rem] font-medium tracking-[0.14em] text-mist uppercase"
        >
          Volver a la sala
        </Link>
      </div>
    </section>
  );
}
