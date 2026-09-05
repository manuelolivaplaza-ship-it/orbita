import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col justify-center px-5 md:px-10">
      <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
        404
      </p>
      <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.92] font-semibold tracking-[-0.03em]">
        Esta página se enfrió demasiado rápido.
      </h1>
      <p className="mt-6 max-w-md text-stone">
        No hay cristal aquí. Volvamos a la mesa.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex w-fit border border-gold px-6 py-3 font-mono text-[11px] tracking-[0.22em] text-gold uppercase transition-colors hover:bg-gold hover:text-void"
      >
        Volver al estudio
      </Link>
    </section>
  );
}
