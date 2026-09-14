import type { ImgHTMLAttributes } from 'react';

/* Ruta de assets respetando el base de Vite (import.meta.env.BASE_URL):
   las imágenes viven en public/media/ y se referencian como media/<nombre>.jpg */
export const media = (name: string): string => `${import.meta.env.BASE_URL}media/${name}`;

type MediaImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  name: string;
};

export function MediaImg({ name, decoding = 'async', ...rest }: MediaImgProps) {
  return <img src={media(name)} decoding={decoding} {...rest} />;
}
