// Kalian dapat menentukan tipe data pada Variable, Function Parameter, dan Function Return.
// Tipe data dideklarasikan setelah tanda colon/titik dua(:) pada nama variabel ceperti pada contoh di bawah ini
// var num: number = 5;
// Ketika kalian mencoba untuk merubah isi variabelnya dengan tipe data lain akan terjadi error
// num = "Ini tipe data string"; // error: Type 'string' is not assignable to type 'number'

// Berikut adalah Basic Data type pada TypeScript:
// number
// string
// boolean

// Array. Dalam array kalian dapat menentukan tipe data dari elemen array tersebut. Ada 2 cara mendefinisikan tipe data pada array
//  Array<T> dan T[]. Sebagai contoh:
//   let numArr: number[] - Array of number
//   let strArr: Array<string> - Array of string

// Tuples. Tuples jumlahnya tetap dengan tipe data tertentu
//  let boolAndNum: [boolean, number] - Elemen pertama tuple bertipe data boolean sedangkan elemen kedua bertipe data number

// {} - Object. Kamu dapat mendefinisikan tipe data pada setiap atribut atau index
//  {name: string, age: number} - Object dengan key nama yang datatype valuenya adalah string, dan key age yang datatype valuenya adalah number
//  {[key: string]: number} - Object dengan key bertipe data string dengan value bertipe data number

// Enum. Enum memungkinkan developer untuk mendefinisikan satu set konstanta dengan nama tertentu
//  enum Direction { Up = 1, Down, Left, Right } - Jika kita menginisialisasikan 1 pada member pertama, Maka semua member dari Enum Direction yang
//                                                 belum di inisialisasikan akan secara otomatis melakukan auto-increment dari nilai 1 ke semua member
//                                                 Dengan kata lain Direction.Up = 1, Direction.Down = 2, Direction.Left = 3, Direction.Right = 4
//  enum Direction { Up, Down, Left, Right } - Tanpa inisialisasi pada member pertama secara default enum akan menginisialisasikan value 0
//                                             pada member pertamanya dan akan secara otomatis melakukan auto-increment kepada member lainnya
//  enum Shape { Square = "SQUARE", Circle = "CIRCLE", Triangle = "TRIANGLE" } - Enum juga dapat di inisialisasikan dengan String

// Function. Kamu dapat menspesifikasikan tipe data pada parameter maupun hasil dari return function
//  (param: number): string - Sebuah fungsi yang menerima parameter number dan mengembalikan string
//  (): number - Sebuah fungsi yang tidak menggunakan parameter apapun dan mengembalikan number
//  (a: string, b?: boolean): void - Sebuah fungsi yang membutuhkan parameter a dan b sebagai parameter opsional lalu tidak mengembalikan apapun

// any - Sebuah tipe data yang mengizinkan tipe data apapun
// void - Merepresentasikan "nothing", dapat digunakan sebagai return value dari sebuah fungsi. Hanya null dan undefined lah bagian dari tipe void
// never - Sama seperti void hanya saja benar-benar tidak mengembalikan apapun
// null - null secara implisit merupakan bagian dari setiap tipe data, kecuali "strictNullChecks" diaktifkan.

// ======== Perbedaan tipe data "never" dan "void" ========
// let something: void = null; - Tidak akan terjadi error karena null adalah bagian dari void
// let nothing: never = null; - error: Type 'null' is not assignable to type 'never'. - Karena never tidak mereturn apapun
// ======== Perbedaan tipe data "never" dan "void" ========