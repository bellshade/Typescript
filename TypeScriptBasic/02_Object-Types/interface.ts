/**
 * Interface adalah Object Types hanya untuk menentukan tipe data object.
 * seperti variable object, function parameter yang membutuhkan object, dan function return yang mengembalikan object.
 */

/**
 * Syntax, cara penggunaan keyword interface

    interface <nama interface> {
        [key object]?: <tipe data>
    }

 * interface merupakan keyword
 * <nama interface>, nama interface mu
 * [key object] adalah nama key pada object
 * ?, tanda tanya ini digunakan ketika key pada object mempunyai kemungkinan tidak bernilai atau undefined
 * <tipe data>, tipe data bisa berupa tipe data dasar builtin Typescript (string, number, boolean) bisa juga tipe data interface atau type

 */

interface Pelajar { // interface dengan nama Pelajar
    nama: string; // pada interface ini, dan object yang memiliki tipe data interface Pelajar akan mempunyai key object nama dengan tipe data string
    umur: number; // key object umur dengan tipe data number (nomor)
    sudahDiVaksin?: boolean; // key object dengan nama sudahDiVaksin dengan tipe data boolean, dan menggunakan `?` (tanda tanya) yang berarti ada kemungkinan data ini bukan boolean melainkan undefined

    // kita juga dapat mendefinisikan fungsi dalam interface jika pada variable object membutuhkan sebuah fungsi!
    getNamaPelajar(): string; // artinya pada object yang akan di definisikan tipe datanya pada interface Pelajar akan memiliki fungsi bernama getNamaPelajar yang mengeluarkan tipe data string

}

const Udin: Pelajar = {
    nama: 'Udin',
    umur: 19,
    getNamaPelajar: function() {
        return this.nama;
    }
    // key object sudahDiVaksin tidak ada dan tidak terjadi error di sini tampaknya teman-teman!
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Udon: Pelajar = {
    nama: 'Udon',
    getNamaPelajar() {
        return this.nama;
    }
    /*
    key object umur tidak ada dan terjadi error:
    "Property 'umur' is missing in type '{ nama: string; }' but required in type 'Pelajar'."
    yang artinya : "Properti 'umur' tidak ada dalam tipe '{ nama: string; }' tetapi diperlukan dalam jenis 'Pelajar'."

    */
    // key object sudahDiVaksin tidak ada, dan tidak terjadi error di sini tampaknya teman-teman!

    ,
    umur: 0
};

// contoh pengaplikasian lainnya adalah menggunakan interface pada parameter function atau nilai yang dikembalikan function

interface ParameterFunctionPertambahanAdanB { // kita mendefinisikan interface dengan nama ParameterFunctionPertambahanAdanB
    a: number; // pada interface ini artinya kita akan mempunyai object dengan key a dengan tipe data number
    b: number; // pada interface ini artinya kita akan mempunyai object dengan key b dengan tipe data number
}

function PertambahanAdanB(input: ParameterFunctionPertambahanAdanB): number {  // mendefinisikan fungsi PertambahanAdanB yang mengembalikan data number, dengan parameter input yang merupakan object dan memiliki tipe data interface ParameterFunctionPertambahanAdanB
    return input.a + input.b;
}
/*
    Dengan mendefinisikan parameter input kepada interface ParameterFunctionPertambahanAdanB, itu sama saja dengan kode yang di bawah ini 👇👇

    function PertambahanAdanB(input: {a: number; b: number}): number {
    }
*/


/*
    keyword `extends` adalah salah satu keyword lainnya yang dapat digunakan untuk interface.
    keyword extends digunakan untuk memiliki tipe data interface yang sama.

    Pada kode di bawah 👇👇
    kita mendefinisikan interface dengan nama registeredUser
    kita extends interface Pelajar kepada interface registeredUser, dengan demikian konten yang dimiliki interface Pelajar akan juga dimiliki oleh interface registeredUser.

*/
interface registeredUser extends Pelajar{
    dibuatPada: number; // pada interface ini artinya kita akan mempunyai object dengan key dibuatPada dengan tipe data number
}

function RegisterUser(user: Pelajar): registeredUser {  // mendefinisikan fungsi PertambahanAdanB yang mengembalikan data number, dengan parameter input yang merupakan object dan memiliki tipe data interface ParameterFunctionPertambahanAdanB

    // return user <- jika kita hanya return user akan terjadi error karena tipe data user adalah interface Pelajar dan tidak memiliki object key dibuatPada

    return { // return berhasil karena tipe data yang dikembalikan function RegisterUser mengikuti tipe data registeredUser
        ...user,
        dibuatPada: Date.now(),
        /*
            tipe data yang kita definisikan pada pengembalian function sangat sensitif terhadap nilai yang dikembalikan, jika nilai yang dikembalikan tidak mengikuti tipe data pengembalian function maka akan terjadi error

            kunciMisterius: "ABC" <- jika kita uncomment ini dan menaruhnya pada object return maka akan terjadi error karena key `kunciMisterius` tidak ada dalam definisi interface registeredUser
        */
    };
}

/*
fungsi RegisterUser yang ada diatas sama saja dengan yang ada di bawah, yang membedakan ialah return type.
Fungsi di bawah tidak menggunakan interface baru sedangkan fungsi di atas menggunakan interface baru dengan menggunakan keyword `extends`, akan tetapi fungsi bawah menggunakan `&`

function RegisterUser(user: Pelajar): Pelajar & {
    dibuatPada: number;
} {

    return {
        ...user,
        dibuatPada: Date.now(),

    }
}

*/

export {Pelajar, Udin, Udon, registeredUser, RegisterUser, PertambahanAdanB, ParameterFunctionPertambahanAdanB};