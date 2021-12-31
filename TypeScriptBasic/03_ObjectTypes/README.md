# Object Types pada Typescript

Object Types sendiri adalah tipe data untuk menentukan tipe data pada Variable, Function, Object, dan Array. Object Types terdiri dari 2 bagian yaitu `interface` dan `type`

## Perbedaan Interface dan Type

Perbedaan dari keduanya ialah `interface` digunakan **hanya** untuk menentukan tipe data object, seperti variable object. Sedangkan `type` dapat digunakan untuk menentukan tipe data variable, tipe data function, dan tipe data object.

---

## interface

interface sendiri adalah _keyword_ pada Typescript, dan ia adalah Object Types. Keyword ini digunakan **hanya** untuk menentukan tipe data object, seperti variable object, function parameter yang membutuhkan object, dan function return yang mereturn object.

### Syntax, cara penggunaan keyword interface

```typescript
interface NamaInterface {
  [keyObject]?: TipeData;
}
```

- interface merupakan _keyword_
- `NamaInterface`, nama interface mu
- `KeyObject` adalah nama key pada object
- ?, tanda tanya ini digunakan ketika key pada object mempunyai kemungkinan tidak bernilai atau undefined
- `TipeData`, tipe data bisa berupa tipe data dasar builtin Typescript (string, number, boolean, any, array, void, null, undefined, [dan lain-lain](https://github.com/bellshade/Typescript/tree/main/TypeScriptBasic/02_TypeAnnotations)) bisa juga tipe data `interface` atau `type`.

### Contoh Penggunaan

Semisal contoh pengaplikasiannya, kita mempunyai _Object Types_
interface bernama Pelajar, dan konten dari interface tersebut dapat dilihat dibawah ini:

```Typescript
interface Pelajar {
  nama: string; // pada interface ini, dan object yang memiliki tipe data interface Pelajar akan mempunyai key object nama dengan tipe data string
  umur: number; // key object umur dengan tipe data number (nomor)
  sudahDiVaksin?: boolean; // key object dengan nama sudahDiVaksin dengan tipe data boolean, dan menggunakan `?` (tanda tanya) yang berarti ada kemungkinan data ini bukan boolean melainkan undefined

  // kita juga dapat mendefinisikan fungsi dalam interface jika pada variable object membutuhkan sebuah fungsi!
  getNamaPelajar(): string; // artinya pada object yang akan di definisikan tipe datanya pada interface Pelajar akan memiliki fungsi bernama getNamaPelajar yang mengeluarkan tipe data string
}
```

lalu dengan interface yang ada di atas kita dapat menggunakannya dengan cara:

```Typescript

// misal kita mendefinisikan variabel object dengan nama Udin
const Udin: Pelajar = {
  nama: 'Udin',
  umur: 19,
  getNamaPelajar: function () {
    return this.nama;
  },
  // key object `sudahDiVaksin` tidak ada dan tidak terjadi error di sini dikarenakan ia menggunakan `?`, yang dimana key dari interface ini tidak wajib ada.
};

// lalu dibawah ini kita juga mendefinisikan variabel object dengan nama Udon akan tetapi tidak menggunakan key `sudahDivaksin`

const Udon: Pelajar = {
  nama: 'Udon',
  getNamaPelajar() {
    return this.nama;
  },
  /*
    key object umur tidak ada dan terjadi error:
    "Property 'umur' is missing in type '{ nama: string; }' but required in type 'Pelajar'."
    yang artinya : "Properti 'umur' tidak ada dalam tipe '{ nama: string; }' tetapi diperlukan dalam jenis 'Pelajar'."

  */

  // key object `sudahDiVaksin` tidak ada dan tidak terjadi error di sini dikarenakan ia menggunakan `?`, yang dimana key dari interface ini tidak wajib ada.
};

```

### Contoh Penggunaan Interface Pada Fungsi

Kali ini kita akan mengetahui penggunaan interface pada funsi.

Misal kita mendefinisikan interface dengan nama `ParameterFunctionPertambahanAdanB`, seperti dibawah ini:

```Typescript
interface ParameterFunctionPertambahanAdanB {
  // kita mendefinisikan interface dengan nama ParameterFunctionPertambahanAdanB
  a: number; // pada interface ini artinya kita akan mempunyai object dengan key a dengan tipe data number
  b: number; // pada interface ini artinya kita akan mempunyai object dengan key b dengan tipe data number
}
```

Lalu kita dapat menggunakan interface `ParameterFunctionPertambahanAdanB` pada parameter fungsi, seperti yang dibawah ini:

```Typescript
function PertambahanAdanB(input: ParameterFunctionPertambahanAdanB): number {
  // mendefinisikan fungsi PertambahanAdanB yang mengembalikan data number, dengan parameter input yang merupakan object dan memiliki tipe data interface ParameterFunctionPertambahanAdanB
  return input.a + input.b;
}
```

Dengan mendefinisikan parameter input kepada interface `ParameterFunctionPertambahanAdanB`, itu sama saja dengan kode yang di bawah ini 👇👇

```Typescript
function PertambahanAdanB(input: {a: number; b: number}):number {
}
```

### Keyword `extends`

keyword `extends` adalah salah satu keyword lainnya yang dapat digunakan untuk interface.

Keyword `extends` digunakan untuk memiliki tipe data interface yang sama (_inheritance_).

Pada contoh dibawah ini kita mendefinisikan interface `Pelajar` dan interface `registeredUser`:

```Typescript
interface Pelajar {
  nama: string;
  umur: number;
  sudahDiVaksin?: boolean;
  getNamaPelajar(): string;
}

interface registeredUser extends Pelajar {
  dibuatPada: number;
}
```

- Pada interface `registeredUser`, mempunyai key `dibuatPada` dengan tipe data number.
- Interface `registeredUser` akan mempunyai seluruh key yang dimiliki interface `Pelajar`

Lalu setelah itu kita dapat menggunakan dua interface tersebut (`Pelajar` dan `registeredUser`) pada fungsi.

```Typescript
function RegisterUser(user: Pelajar): registeredUser {
  // mendefinisikan fungsi RegisterUser yang mengembalikan data object yang sesuai pada interface `registeredUser`, dengan parameter yang merupakan object dan memiliki tipe data interface Pelajar.


  // return user <- jika kita hanya return user akan terjadi error karena tipe data user adalah interface Pelajar dan tidak memiliki object key dibuatPada

  return {
    // return berhasil karena tipe data yang dikembalikan function RegisterUser mengikuti tipe data registeredUser
    ...user,
    dibuatPada: Date.now(),
    /*
      tipe data yang kita definisikan pada pengembalian function sangat sensitif terhadap nilai yang dikembalikan, jika nilai yang dikembalikan tidak mengikuti tipe data pengembalian function maka akan terjadi error

      kunciMisterius: "ABC" <- jika kita uncomment ini dan menaruhnya pada object return maka akan terjadi error karena key `kunciMisterius` tidak ada dalam definisi interface registeredUser
    */
  };
}
```

Fungsi RegisterUser yang ada diatas sama saja dengan yang ada di bawah ini, yang membedakan ialah return type.

Fungsi di bawah ini tidak menggunakan interface baru sedangkan fungsi di atas menggunakan interface baru dengan menggunakan keyword `extends`, akan tetapi fungsi bawah menggunakan `&`

```Typescript
function RegisterUser(user: Pelajar): Pelajar & {
    dibuatPada: number;
} {

    return {
        ...user,
        dibuatPada: Date.now(),

    }
}
```

---

## Type

`type` sendiri adalah _keyword_ pada Typescript, dan ia adalah Object Types. Keyword ini dapat digunakan untuk menentukan tipe data variable, tipe data function, dan tipe data object.

### Contoh Penggunaan Pada Variable Yang Bukan Object

```Typescript
type NilaiBoolean = boolean;
const benar: NilaiBoolean = true; // jika kita deklarasikan variable benar ke nilai yang bukan tipe data boolean maka akan terjadi error.


function ApakahTrue(inputBenar: NilaiBoolean) {
  return inputBenar ? 'benar!' : 'salah';
}

console.log(ApakahTrue(benar)); // "benar!"
```

### Contoh Penggunaan `type` Untuk Tipe Data Fungsi

```Typescript
type fungsiPertambahan = (a: number, b: number) => number;

// untuk menggunakan fungsi tipe data kita harus menggunakan fungsi variable seperti di bawah ini
const ATambahB: fungsiPertambahan = (a, b) => {
  return a + b;
};
```

### Contoh Penggunaan `type` Untuk Tipe Data Object

```Typescript
type Manusia = {
  // type dengan nama Manusia
  nama: string; // pada type ini, dan object yang memiliki tipe data type Mahasiswa akan mempunyai key object nama dengan tipe data string
  umur: number; // key object umur dengan tipe data number (nomor)
  sudahDiVaksin?: boolean; // key object dengan nama sudahDiVaksin dengan tipe data boolean, dan menggunakan `?` (tanda tanya) yang berarti ada kemungkinan data ini bukan boolean melainkan undefined

  // kita juga dapat mendefinisikan fungsi dalam type jika pada variable object membutuhkan sebuah fungsi!
  getNamaMahasiswa(): string; // artinya pada object yang akan di definisikan tipe datanya pada type Mahasiswa akan memiliki fungsi bernama getNamaMahasiswa yang mengeluarkan tipe data string
};

const Jordan: Manusia = {
  nama: 'Jordan',
  umur: 20,
  getNamaMahasiswa() {
    return this.nama;
  },
  // key object sudahDiVaksin tidak ada dan tidak terjadi error di sini tampaknya teman-teman!
};

type Mahasiswa = {
  jurusan: string;
} & Manusia; // jika interface menggunakan keyword extends untuk mendapatkan konten dari interface lainnya, pada type gunakan `&` untuk mendapatkan konten dari type lainnya.

const Marsaw: Mahasiswa = {
  nama: 'Marsaw',
  umur: 20,
  getNamaMahasiswa() {
    return this.nama;
  },
  jurusan: 'Teknik Komputer',
  // key object sudahDiVaksin tidak ada dan tidak terjadi error di sini tampaknya teman-teman!
};
```

---

## Referensi

1. [TypeScript, ObjectTypes](https://www.typescriptlang.org/docs/handbook/2/objects.html)
