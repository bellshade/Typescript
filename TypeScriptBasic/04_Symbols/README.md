# Symbols

Symbols merupakan tipe data primitif seperti `number` dan `string`. Symbols ini diperkenalkan oleh ECMAScript 2015. Symbois dibuat dengan cara memanggil class constructor `Symboi`.

```ts
let sym1 = Symbol();
let sym2 = Symbol("key"); // opsional string key
```

Sifat Symbols merupakan immutable / tidak dapat diubah dan unik.

```ts
let sym2 = Symbol("key");
let sym3 = Symbol("key");
sym2 === sym3; // false, soalnya symbols itu unique
```

Seperti strings pada umumnya, symbols dapat digunakan sebagai **keys** untuk properti dari objek.

```ts
const sym = Symbol();
let obj = {
  [sym]: "ganteng",
};
console.log(obj[sym]); // "ganteng"
```

## `unique symbol`

Untuk memperlakukan Symbol sebagai unique literals, `unique symbol` merupakan pilihan yang tepat. Unique Symbol adalah subtipe simbol, dan hanya dihasilkan dari pemanggilan `Symbol()` atau `Symbol.for()`. Tipe ini hanya diperbolehkan pada deklarasi `const` dan properti `readonly static`, dan untuk mereferensikan simbol unik tertentu, penulis kode tersebut harus menggunakan operator `typeof`. Setiap referensi ke simbol unik menyiratkan identitas yang benar-benar unik yang terkait dengan deklarasi yang diberikan.

```ts
declare const sym1: unique symbol;
 
// sym2 hanya bisa dideklarasikan pada referensi constant
let sym2: unique symbol = Symbol();
 
// Works! Akan tetapi identitasnya terikat pada 'sym1'
let sym3: typeof sym1 = sym1;
 
// Also works....
class C {
  static readonly StaticSymbol: unique symbol = Symbol();
}
```

Untuk lebih lanjut, kalian dapat membaca dokumentasi mengenai Symbols [di sini](https://www.typescriptlang.org/docs/handbook/symbols.html).
