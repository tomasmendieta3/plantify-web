const nf = new Intl.NumberFormat("es-AR");

export function formatNumero(valor: number): string {
  return nf.format(valor);
}

export function formatUsd(valor: number): string {
  return `USD ${nf.format(valor)}`;
}
