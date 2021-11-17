// global scope
let namaa = "oppa";
let angka = 2000;

function getDataa() : void{
    // berada discope getData (internal)
    let data = 5000;
    console.log(namaa);
}

function printData() : void{
    console.log(angka);
}

getDataa();
printData();