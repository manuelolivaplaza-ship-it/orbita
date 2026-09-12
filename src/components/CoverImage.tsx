import { webpSrc } from '../lib/images';

type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
};

/** <picture> WebP + JPEG. width/height reservan espacio (CLS). */
export function CoverImage({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  fetchPriority,
  sizes,
}: Props) {
  const webp = webpSrc(src);
  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      sizes={sizes}
    />
  );
  if (!webp) return img;
  return (
    <picture className="contents">
      <source srcSet={webp} type="image/webp" sizes={sizes} />
      {img}
    </picture>
  );
}
