export function formatNumber(value: number) {
  return String(value.toFixed(2)).replace(".", ",");
}
