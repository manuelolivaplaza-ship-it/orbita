import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="shell">
        <p className="kicker">404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,5.2rem)] font-semibold leading-[0.95] tracking-tight">
          Este afluente no está en la carta.
        </h1>
        <div className="waterline waterline-draw mt-8 w-40" />
        <p className="mt-6 max-w-md text-[17px] text-muted">
          El vínculo no existe o el cauce se secó. Volvamos a la orilla.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center bg-navy px-7 text-[0.9rem] font-semibold text-paper transition-colors hover:bg-ink"
        >
          Volver al cauce
        </Link>
      </div>
    </section>
  );
}
