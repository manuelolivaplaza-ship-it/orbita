import Image from "next/image";
import { cn } from "@/lib/cn";

export function Figure({
  src,
  alt,
  caption,
  className,
  imgClassName,
  priority = false,
  sizes = "(min-width: 1024px) 60vw, 100vw",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={className}>
      <div className={cn("img-frame aspect-[16/10]", imgClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
