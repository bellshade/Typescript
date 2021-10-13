/*
 * `type` sendiri adalah _keyword_ pada Typescript, dan ia adalah Object Types.
 * Keyword ini dapat digunakan untuk menentukan tipe data variable, tipe data function, dan tipe data object.
 */


// contoh penggunaan pada tipe data variable
type NilaiBoolean = boolean
const benar: NilaiBoolean = true // jika kita deklarasikan variable benar ke nilai yang bukan tipe data boolean maka akan terjadi error.

function ApakahTrue(inputBenar: NilaiBoolean) {
    return inputBenar ? "benar!" : "salah"
}

console.log(ApakahTrue(benar)) // "benar!"


// contoh penggunaan pada tipe data function
type fungsiPertambahan = (a: number, b: number) => number

// untuk menggunakan fungsi tipe data kita harus menggunakan fungsi variable seperti dibawah ini
const ATambahB: fungsiPertambahan = (a, b) => {
    return a+b
}



// contoh penggunaan pada tipe data object
type Manusia = { // type dengan nama Mahasiswa
    nama: string; // pada type ini, dan object yang memiliki tipe data type Mahasiswa akan mempunyai key object nama dengan tipe data string
    umur: number; // key object umur dengan tipe data number (nomor)
    sudahDiVaksin?: boolean; // key object dengan nama sudahDiVaksin dengan tipe data boolean, dan menggunakan `?` (tanda tanya) yang berarti ada kemungkinan data ini bukan boolean melainkan undefined
    
    // kita juga dapat mendefinisikan fungsi dalam type jika pada variable object membutuhkan sebuah fungsi!
    getNamaMahasiswa(): string; // artinya pada object yang akan di definisikan tipe datanya pada type Mahasiswa akan memiliki fungsi bernama getNamaMahasiswa yang mengeluarkan tipe data string

}

const Jordan: Manusia = {
    nama: "Jordan",
    umur: 20,
    getNamaMahasiswa() {
        return this.nama
    }
    // key object sudahDiVaksin tidak ada dan tidak terjadi error disini tampaknya teman-teman!
}

type Mahasiswa = {
    jurusan: string;
} & Manusia // jika interface menggunakan keyword extends untuk mendapatkan konten dari interface lainnya, pada type gunakan `&` untuk mendapatkan konten dari type lainnya.

const Marsaw: Mahasiswa = {
    nama: "Marsaw",
    umur: 20,
    getNamaMahasiswa() {
        return this.nama
    },
    jurusan: "Teknik Komputer"
    // key object sudahDiVaksin tidak ada dan tidak terjadi error disini tampaknya teman-teman!
}