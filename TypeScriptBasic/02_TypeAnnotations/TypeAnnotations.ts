/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */

/* Everyday Types */

/*
 * Kamu bisa menjalankan command:
 * ts-node index.ts
 * untuk menjalankan file ini
 *
 * Tips : Apabila kamu menggunakan IDE dengan fitur intellisense, seperti VS Code, maka kamu
 * bisa hover mouse kamu pada sebuah variabel dan mengetahui tipe datanya secara langsung
 *
 */


/* String */

// JavaScript
const pesanJs = 'Hello World';
console.log(pesanJs);

// TypeScript
const pesanTs: string = 'Hello World';
console.log(pesanTs);


/* Number */

const tahunIni: number = 2021;
console.log(tahunIni);

const jamIni: number = 12.5;
console.log(jamIni);


/* Boolean */

const sudahSelesai: boolean = false;
console.log(sudahSelesai);


/* Any */

let apel: any;

apel = 'Apel';
console.log(apel);   // Apel

apel = 5;
console.log(apel);   // 5


/* Array */

// cara ke-1
const arrayNama: string[] = ['Andi', 'Budi', 'Caca'];
console.log(arrayNama);

// cara ke-2
const arrayNama2: Array<string> = ['Andi', 'Budi', 'Caca'];
console.log(arrayNama2);


/*
 * Latihan : Buatlah sebuah variabel yang:
 * 1. Dapat menampung banyak nilai
 * 2. Dapat menampung nilai dengan tipe data apa saja
 * tanpa menghasilkan error.
 */

// const latihan =


// Abaikan code dibawah ini
export {
  pesanJs,
  pesanTs,
  tahunIni,
  jamIni,
  sudahSelesai,
  apel,
  arrayNama,
  arrayNama2,
};
// Abaikan code diatas ini