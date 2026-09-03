import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function PageIntro({
  overline,
  title,
  children,
}: {
  overline: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
      <Container>
        <Reveal>
          <p className="overline-label">{overline}</p>
          <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-ink">
            {title}
          </h1>
          {children ? (
            <div className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              {children}
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
