import Image from "next/image";
import { cn } from "@/lib/cn";

export function Photo({
  src,
  alt,
  className,
  figureClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  caption,
  zoom = true,
}: {
  src: string;
  alt: string;
  className?: string;
  figureClassName?: string;
  sizes?: string;
  priority?: boolean;
  caption?: string;
  zoom?: boolean;
}) {
  return (
    <figure className={figureClassName}>
      <div
        className={cn(
          "relative overflow-hidden bg-papel-2",
          zoom && "img-zoom",
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
