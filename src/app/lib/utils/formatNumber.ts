export const formatNumber = (target: number, min = 1, max = 1) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  }).format(target);
