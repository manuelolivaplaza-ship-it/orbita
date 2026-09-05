import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[80vh] flex-col justify-center py-32">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 max-w-3xl text-[clamp(3rem,8vw,6.5rem)]">
        Esta página se volvió etérea.
      </h1>
      <p className="mt-6 max-w-md text-lg text-ink-soft">
        El enlace no existe o se mudó. Volvamos a lo sólido.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-ink">
          Inicio
        </Link>
        <Link href="/examenes" className="btn btn-ghost">
          Exámenes
        </Link>
      </div>
    </section>
  );
}
