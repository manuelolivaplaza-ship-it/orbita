export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function uf(n: number) {
  return `${new Intl.NumberFormat("es-CL").format(n)} UF`;
}
