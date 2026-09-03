import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Meander } from "@/components/meander";

export function PageIntro({
  kicker,
  title,
  italic,
  lead,
  image,
  alt,
}: {
  kicker: string;
  title: string;
  italic?: string;
  lead: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="pt-36 pb-8 sm:pt-40">
      <Container>
        <p className="kicker">{kicker}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[4.6rem]">
          {title}
          {italic ? (
            <span className="italic text-moss"> {italic}</span>
          ) : null}
        </h1>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
          {lead}
        </p>
        <Meander className="mt-10 h-5 w-full max-w-md" />
        {image ? (
          <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-[1.6rem] sm:rounded-[2rem]">
            <Image
              src={image}
              alt={alt ?? ""}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
