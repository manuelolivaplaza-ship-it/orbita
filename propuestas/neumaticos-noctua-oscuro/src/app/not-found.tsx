import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pad flex min-h-[100svh] flex-col justify-center pt-[4.25rem]">
      <p className="kicker">404</p>
      <h1 className="display mt-4 text-6xl sm:text-8xl">Sin huella.</h1>
      <p className="serif mt-4 max-w-md text-2xl text-mute">
        Esa ruta no está en el mapa. Volvamos al asfalto.
      </p>
      <div className="mt-10 flex gap-3">
        <Link href="/" className="btn btn-solid">
          Inicio
        </Link>
        <Link href="/catalogo" className="btn btn-line">
          Catálogo
        </Link>
      </div>
    </div>
  );
}
