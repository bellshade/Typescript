# Everyday Types

## Tipe Data Primitif

Variabel dalam bahasa pemrograman TypeScript dapat dideklarasikan untuk memiliki tipe statis. Variabel yang memiliki tipe statis harus selalu mempertahankan tipe data yang ia gunakan saat dijalankan. Apabila kita membuat sebuah variabel bertipe statis, misalnya dengan tipe data `string`, variabel tersebut tidak akan bisa menampung tipe data `number`, `boolean`, dan lain sebagainya.

Bahasa pemrograman TypeScript menggunakan kata kunci `var`, `let`, dan `const` yang dimiliki oleh bahasa pemrograman JavaScript untuk menginisialisasi variabel, yang kemudian dapat kita deklarasikan untuk memiliki tipe statis dengan menggunakan titik dua setelah nama variabel untuk menunjuk jenisnya.

### String

Berikut ini merupakan contoh perbedaan deklarasi variabel `string` pada bahasa pemrograman JavaScript dan TypeScript.

```typescript
// JavaScript
let pesan = "Hello World";

// TypeScript
let pesan: string = "Hello World";
```

### Number

Tipe data statis bahasa pemrograman TypeScript lainnya adalah tipe data angka. Kita dapat mendeklarasikan variabel tahunIni di TypeScript seperti ini:

```typescript
let tahunIni: number = 2021;
```

Bahasa pemrograman TypeScript tidak membedakan antara angka integer dan float seperti bahasa lainnya dalam hal sintaksis. Sama dengan integer, berikut merupakan contoh deklarasi variabel angka float.  

```typescript
let jamIni: number = 12.5;
```

Setelah kita mendeklarasikan variabel dengan tipe `number`, variabel tersebut juga harus selalu berupa tipe `number`. Jika kita mencoba untuk melakukan assignment nilai `string` untuk variabel dengan tipe `number`, program tersebut tidak akan dapat dikompilasi ke dalam JavaScript. Teks editor modern yang memiliki fitur _intellisense_ dapat mengetahui hal tersebut dan menginformasikan kepada kita bahwa program kita memiliki sebuah error.

### Boolean

Nilai sebuah `boolean` dapat berupa true atau false. Di TypeScript, kita dapat mendeklarasikan tipe variabel `boolean` dengan sintaks berikut.

```typescript
let sudahSelesai: boolean = false;
```

### Any

Variabel dengan tipe `any` pada dasarnya adalah variabel _wildcard_ (serba guna). Variabel dengan tipe `any` dapat menampung tipe nilai apa saja. Kita dapat mendeklarasikan tipe data `any` di TypeScript seperti ini:  

```typescript
let apel: any
```

Sekarang variabel `apel` dapat menampung nilai dengan tipe data apa pun.

```typescript
apel = "Apel"
console.log(apel)   // Apel

apel = 5
console.log(apel)   // 5
```

Perhatikan bahwa variabel dengan tipe data `any` dapat kita ubah value nya secara terus menerus ke tipe data lain dan tidak menghasilkan error.  
Sekarang pertanyaannya, mengapa kita membutuhkan tipe data `any`? Dalam situasi tertentu, seperti melakukan pemanggilan data sebuah user dari server, kita mungkin akan menerima tipe data variabel yang sangat acak sehingga tipe data `any` sangat berguna dalam kasus ini.

### Array

Dalam bahasa pemrograman TypeScript, untuk mendeklarasikan sebuah array, kita bisa menggunakan 2 cara:  

1. Menambahkan tanda `[]` setelah mengetikkan tipe data yang kita inginkan, atau
2. Menggunakan tipe data _generic_.

Berikut merupakan contoh deklarasi sebuah array yang menampung beberapa string.  

```typescript
// cara ke-1
const nama: string[] = ["Andi", "Budi", "Caca"];

// cara ke-2
const nama: Array<string> = ["Andi", "Budi", "Caca"];
```

## Penutup

Bagian ini menjelaskan tentang tipe data yang biasa digunakan dalam pendeklarasian variabel pada bahasa pemrograman TypeScript. Sebenarnya masih banyak tipe data lain yang bisa kita gunakan dalam bahasa pemrograman TypeScript. Berikut merupakan daftar lengkap tipe data TypeScript yang dapat kita gunakan:

* `string`
* `number`
* `boolean`
* `any`
* `array` _(`string[]`, `number[]`, dan lain sebagainya)_
* `void`
* `null`
* `undefined`
* `never`
* `symbol`
* `bigint`
* `object`
* `unknown`
* `enum`
* `tuple`
* `() => void` _(tipe data function)_

## Referensi

1. [TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
