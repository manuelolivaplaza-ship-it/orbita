import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="shell">
        <p className="kicker">Lámina 404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,5.2rem)] font-semibold leading-[0.95] tracking-tight">
          Este solar no está en el plano.
        </h1>
        <p className="mt-6 max-w-md text-[17px] text-muted">
          El vínculo no existe o la lámina se archivó. Volvamos a la mesa.
        </p>
        <Link
          href="/"
          className="font-display mt-10 inline-flex h-12 items-center bg-teja px-7 text-[0.9rem] font-semibold text-papel transition-colors hover:bg-teja-deep"
        >
          Volver a SOLAR
        </Link>
      </div>
    </section>
  );
}
