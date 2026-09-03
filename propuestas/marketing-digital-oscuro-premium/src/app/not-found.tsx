import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70svh] flex-col justify-center py-24">
      <p className="kicker">Folio 404</p>
      <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.92]">
        Esta pieza no está en la mesa.
      </h1>
      <p className="mt-5 max-w-[36ch] text-paper-dim">
        La página no existe o se cortó. Vuelva al índice o pida un diagnóstico.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Volver al inicio
        </Link>
        <Link href="/diagnostico" className="btn btn-ghost">
          Diagnóstico
        </Link>
      </div>
    </div>
  );
}
