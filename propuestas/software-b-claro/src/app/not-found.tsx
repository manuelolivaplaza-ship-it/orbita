import Link from "next/link";

export default function NotFound() {
  return (
    <section className="sheet flex min-h-[70vh] flex-col justify-center py-24">
      <p className="kicker">
        <span className="text-norte">404</span>
        <span className="mx-2">·</span>
        Fuera de carta
      </p>
      <h1 className="display mt-6 max-w-[12ch] text-[clamp(3rem,8vw,6.4rem)]">
        Esta latitud no está en el plano.
      </h1>
      <p className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-muted">
        El enlace no existe o se movió. Volvamos al eje.
      </p>
      <Link href="/" className="btn btn-ink mt-10 w-fit">
        Ir al inicio
      </Link>
    </section>
  );
}
