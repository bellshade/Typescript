/*

Di dalam Typescript, kita bisa menambahkan anotasi
tipe data di dalam parameter seperti: String,
Number, Array, dan lainnya.

**Tetap fokus di kode yang ada di dalam keyword
namespace**

*/
function nyapa(waktu: number, nama: string, ucapanSelamat: string[]) {
    if (waktu >= 5 && waktu <= 12) {
        console.log(`Halo ${nama}, ${ucapanSelamat[0]}`);
    } else if (waktu >= 13 && waktu <= 15) {
        console.log(`Halo ${nama}, ${ucapanSelamat[1]}`);
    } else if (waktu >= 16 && waktu <= 4) {
        console.log(`Halo ${nama}, ${ucapanSelamat[2]}`);
    }
}

const ucapanSelamat: string[] = [
    'Selamat Pagi',
    'Selamat Siang',
    'Selamat Malam'
];

/*

Parameter yang dimasukkan harus memiliki tipe data
yang sama dengan argumen fungsi di atas

*/
nyapa(12, 'Iqbal', ucapanSelamat);


/*

Di dalam Typescript, kita bisa menentukan tipe
data tertentu untuk nilai kembalian(return) fungsi,
fitur ini juga dikenal dengan Return Type
Annotations, anotasi tipe data tersebut bisa kita
tambahkan setelah parameter ketika menulis fungsi
function name(): <tulis-di-sini> {}

*/
function CapitalizedName(name: string): string {
    /*

    Nilai kembaliannya harus string juga. Jika
    tidak maka akan terjadi error

    */
    return name.toUpperCase();
}

console.log(CapitalizedName('iqbal'));