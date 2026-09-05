import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="shell">
        <p className="kicker">404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.95] tracking-tight">
          Esta ventana no da a ninguna parte.
        </h1>
        <div className="horizon mt-8 max-w-24" />
        <p className="mt-6 max-w-md text-[17px] text-muted">
          El vínculo no existe o la luz se cortó. Volvamos a la casa.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center bg-norte px-7 text-[0.82rem] font-semibold tracking-[0.12em] text-nieve uppercase hover:bg-norte-deep"
        >
          Volver al norte
        </Link>
      </div>
    </section>
  );
}
