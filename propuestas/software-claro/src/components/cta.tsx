import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Cta({
  title = "Si el software de tu empresa pide explicación, conversemos.",
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <Reveal as="section" className={cn("wrap py-24 md:py-32", className)}>
      <div className="relative overflow-hidden bg-ink px-8 py-16 text-foam md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,132,79,0.45), transparent 68%)",
          }}
          aria-hidden
        />
        <p className="eyebrow text-foam/55">Un primer correo</p>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.1rem,5vw,4.2rem)] leading-[1.02] tracking-[-0.04em]">
          {title}
        </h2>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contacto"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foam px-6 text-sm tracking-[0.04em] text-ink transition-colors hover:bg-copper hover:text-foam"
          >
            Escribir a Alba
          </Link>
          <Link
            href="/trabajo"
            className="inline-flex h-12 items-center justify-center rounded-full border border-foam/20 px-6 text-sm tracking-[0.04em] text-foam transition-colors hover:border-foam/50"
          >
            Ver el trabajo
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
