import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <div className="shell">
        <p className="kicker">404</p>
        <h1 className="font-display mt-4 max-w-[12ch] text-[clamp(2.8rem,7vw,5.2rem)] font-medium leading-[0.92] tracking-tight">
          Esta sala no existe.
        </h1>
        <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
          El pasillo es corto. Vuelva al pabellón o pida una hora.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="font-sans inline-flex h-12 items-center bg-sol px-6 text-[0.88rem] font-semibold tracking-wide text-papel hover:bg-sol-deep"
          >
            Inicio
          </Link>
          <Link
            href="/agenda"
            className="font-sans inline-flex h-12 items-center border border-ink px-6 text-[0.88rem] font-semibold tracking-wide"
          >
            Pedir hora
          </Link>
        </div>
      </div>
    </section>
  );
}
