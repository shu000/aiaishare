export const localize = (n: number | string): string => String(n).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
