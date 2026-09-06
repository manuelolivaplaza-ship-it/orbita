import Link from "next/link";

export default function NotFound() {
  return (
    <div className="frame flex min-h-[70svh] flex-col justify-center py-24">
      <p className="kicker">Fuera de mira</p>
      <h1 className="display mt-4 text-[clamp(2.8rem,8vw,5.5rem)]">
        Esta página no está en el limbo.
      </h1>
      <p className="mt-6 max-w-[40ch] text-[1.08rem] leading-relaxed text-niebla">
        El rumbo se perdió. Vuelva al taller o tome una de las cuatro miras.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Volver al taller
        </Link>
        <Link href="/obra" className="btn btn-ghost">
          Ver la obra
        </Link>
      </div>
    </div>
  );
}
