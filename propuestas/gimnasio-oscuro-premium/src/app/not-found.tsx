import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col justify-end px-5 pt-32 pb-24 md:px-8 lg:px-12">
      <p className="font-mono text-[0.62rem] tracking-[0.36em] text-copper uppercase">
        404
      </p>
      <h1 className="mt-6 font-serif text-[14vw] leading-[0.85] tracking-tight md:text-8xl">
        Esta sala
        <span className="block italic text-ivory-soft"> no existe.</span>
      </h1>
      <p className="mt-8 max-w-md text-lg text-ivory-soft">
        El recinto tiene pocas puertas. Esta no es una de ellas.
      </p>
      <div className="mt-10">
        <Button href="/">Volver al umbral</Button>
      </div>
    </section>
  );
}
