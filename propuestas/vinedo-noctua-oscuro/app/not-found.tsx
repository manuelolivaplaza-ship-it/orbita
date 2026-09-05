import Link from "next/link";
import { OwlMark } from "@/components/OwlMark";
import { Starfield } from "@/components/Starfield";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <Starfield />
      <div className="relative z-10">
        <OwlMark className="mx-auto h-14 w-10 text-brass" />
        <p className="mt-8 kicker">404</p>
        <h1 className="mt-4 font-display text-4xl font-light md:text-6xl">
          Esta página no aparece en el cielo de esta noche.
        </h1>
        <Link href="/" className="btn mt-10">
          Volver al valle
        </Link>
      </div>
    </div>
  );
}
