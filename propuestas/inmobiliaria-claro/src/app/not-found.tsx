import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="shell">
        <p className="kicker">Folio 404</p>
        <h1 className="font-display mt-5 max-w-2xl text-[clamp(2.6rem,7vw,5.2rem)] font-medium leading-[0.95] tracking-tight">
          Esta planta no está en la lista.
        </h1>
        <p className="mt-6 max-w-md text-[17px] text-muted">
          El vínculo no existe o el folio se archivó. Volvamos a la luz.
        </p>
        <Link href="/" className="btn btn-sol mt-10">
          Volver a HELIO
        </Link>
      </div>
    </section>
  );
}
