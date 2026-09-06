import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center py-24">
      <p className="font-mono text-[0.72rem] tracking-[0.14em] text-cian-deep uppercase">
        404 · span perdido
      </p>
      <h1 className="display mt-5 max-w-[14ch] text-[clamp(2.8rem,7vw,5.4rem)]">
        Esta traza no está en el registro.
      </h1>
      <p className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-muted">
        El enlace no existe o el span se cortó. Volvamos al origen.
      </p>
      <Link href="/" className="btn btn-navy mt-10 w-fit">
        Ir al inicio
      </Link>
    </section>
  );
}
