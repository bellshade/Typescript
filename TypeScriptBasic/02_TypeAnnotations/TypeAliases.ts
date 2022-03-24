/*
  Type Aliases adalah pemberian nama type baru secara kostum
  jika di Typescript memiliki type seperti string, number, boolean, dll.
  maka dengan type aliases kita dapat menkombinasikan type-type tersebut menjadi 1 type kostum.
*/

// Contoh
// note: nama untuk type boleh apa saja, suka suka kalian asal masih relevan dengan valuenya
type StringOrNumber = string | number;

// ------------------- Type Aliases Membuat Code Lebih Readable ---------------------

// Selain untuk membuat kostum type, type aliases juga berguna untuk membuat code kita lebih mudah dibaca.

// problem: parameter pada function terlalu panjang jadi sulit dibaca
function intro1(data: { name: string, age: number, country: string, hobby: string}): string {
  return `
    name: ${data.name}, 
    age: ${data.age} years,
    country: ${data.country},
    hobby: ${data.hobby}
  `;
}

// solving: merefactor dengan menggunakan type aliases
type Person = {
  name: string,
  age: number,
  country: string,
  hobby: string
}

// Pada parameter function kita hanya perlu mengisi nama type yang telah kita buat.
function intro2(data: Person): string {
  return `
    name: ${data.name}, 
    age: ${data.age} years,
    country: ${data.country},
    hobby: ${data.hobby}
  `;
}

// --------------- Menggabungkan Type Aliases Dengan Type Lain -------------------

// Pada kode diatas kita telah membuat type Person, sekarang kita akan menggabungkan type Person dengan type lainnya.

// untuk menggabungkannya hanya perlu menggunakan "&"
type PersonWithContact = Person & {
  phoneNumber: string,
  email: string
}

function intro3(data: PersonWithContact): string {
  return `
    name: ${data.name}, 
    age: ${data.age} years,
    country: ${data.country},
    hobby: ${data.hobby},
    phone number: ${data.phoneNumber},
    email: ${data.email}
  `;
}

export { intro1, intro2, intro3, StringOrNumber };
