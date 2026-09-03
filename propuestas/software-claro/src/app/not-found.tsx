import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[70vh] flex-col justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-5 max-w-[12ch] text-[clamp(3rem,8vw,6.5rem)]">
        Esta página se fue con la luz.
      </h1>
      <p className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-muted">
        El enlace no existe o se movió. Volvamos al estudio.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-12 w-fit items-center rounded-full bg-ink px-6 text-sm tracking-[0.04em] text-foam transition-colors hover:bg-copper"
      >
        Ir al inicio
      </Link>
    </section>
  );
}
