import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70svh] flex-col justify-center py-24">
      <p className="kicker">TX 404</p>
      <h1 className="mt-4 max-w-[12ch] text-[clamp(2.8rem,7vw,5.4rem)]">
        Esta frecuencia no está en el dial.
      </h1>
      <p className="font-serif mt-5 max-w-[36ch] text-paper-dim">
        La página no existe o se movió. Vuelva al índice o pida una lectura.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Volver al inicio
        </Link>
        <Link href="/lectura" className="btn btn-ghost">
          Pedir lectura
        </Link>
      </div>
    </div>
  );
}
