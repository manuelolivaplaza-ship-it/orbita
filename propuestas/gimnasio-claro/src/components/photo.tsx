import Image from "next/image";
import { cn } from "@/lib/utils";

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
          "relative overflow-hidden bg-paper-2",
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
        <figcaption className="mt-3 text-[0.78rem] leading-relaxed text-ink-soft">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
