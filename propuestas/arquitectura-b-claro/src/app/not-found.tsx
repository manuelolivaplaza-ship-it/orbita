import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="shell">
        <p className="kicker">Cota 404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,5.2rem)] font-semibold leading-[0.95] tracking-tight">
          Esta lámina no está en el corte.
        </h1>
        <p className="mt-6 max-w-md text-[17px] text-muted">
          El vínculo no existe o la cota se archivó. Volvamos al taller.
        </p>
        <Link
          href="/"
          className="font-display mt-10 inline-flex h-12 items-center bg-cobre px-7 text-[0.9rem] font-semibold text-cal transition-colors hover:bg-cobre-deep"
        >
          Volver a COTA
        </Link>
      </div>
    </section>
  );
}
