import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70svh] flex-col justify-center py-24">
      <p className="kicker">404</p>
      <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.92]">
        Esta página no está en la ficha.
      </h1>
      <p className="mt-5 max-w-[36ch] text-paper-dim">
        Se movió o nunca existió. Vuelve al hospital o llama si es urgente.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Volver al inicio
        </Link>
        <Link href="/urgencias" className="btn btn-ghost">
          Urgencias
        </Link>
      </div>
    </div>
  );
}
