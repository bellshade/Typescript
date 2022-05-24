export function constructSimpleSymbol (): symbol {
  // Ini adalah contoh symbol
  const sym = Symbol();
  return sym;
}

export function isImmutableSymbol (sym1: symbol, sym2: symbol): boolean {
  // Symbol merupakan immutable
  return sym1 === sym2;
}

export function isSymbolAsKey (sym: symbol, obj: {[x: symbol]: string}): string {
  // Symbol dapat digunakan sebagai key
  return obj[sym];
}
