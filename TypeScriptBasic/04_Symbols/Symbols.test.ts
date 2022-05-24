import * as Symbols from './Symbols';

test('[TypeScriptBasic/04_Symbols] Construct Symbol', () => {
  // Tetap false, karena immutable
  expect(typeof(Symbols.constructSimpleSymbol) === 'symbol').toBe(false);
});

test('[TypeScriptBasic/04_Symbols] Cek immutable symbol', () => {
  const sym1 = Symbol("key");
  const sym2 = Symbol("key");
  expect(Symbols.isImmutableSymbol(sym1, sym2)).toBe(false);
});

test('[TypeScriptBasic/04_Symbols] Cek key symbol', () => {
  const sym = Symbol();
  const obj = {
    [sym]: "ganteng"
  };
  expect(Symbols.isSymbolAsKey(sym, obj)).toBe(obj[sym]);
});