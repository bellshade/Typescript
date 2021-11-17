// Tipe Basic => tipe data standard atau simple

let namee : string = "aku";
let isTrue : boolean = false;

// Tipe Union => gabungan dari beberapa tipe data ada number dan string

let umur : number | string = 19;
umur = "19";


// Tipe Literal => custom tipe yang kita definisikan sendiri
type GolonganDarah = "A" | 100 | "O" | "AB";

function checkGolonganDarah(gd : GolonganDarah) : void{
    console.log(gd);
}

checkGolonganDarah("AB");




