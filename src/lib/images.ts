/** Deriva el .webp hermano de un jpg/jpeg de /public. */
export function webpSrc(src: string): string | undefined {
  if (/\.jpe?g$/i.test(src)) return src.replace(/\.jpe?g$/i, '.webp');
  return undefined;
}
