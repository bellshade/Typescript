// Memeriksa apakah string memiliki jumlah 'x' dan 'o' yang sama.
// Metode harus mengembalikan boolean dan tidak peka huruf besar/kecil. 
// String dapat berisi karakter apa pun
// Contoh output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // ketika tidak ada 'x' dan 'o' harus mengembalikan true
// XO("zzoo") => false


function XO(str:string) {
    let strArr = str.toLowerCase().split(''); //mengubah string ke lowercase dan memisahkan string menjadi array
    let xTerhitung:number = 0;
    let oTerhitung:number = 0;

    for(let x = 0 ;x < strArr.length; x++ ){
       if(strArr[x] === 'x'){
         xTerhitung += 1;
       }else if(strArr[x] === 'o'){
         oTerhitung += 1;         
       }
    }

    if(xTerhitung === oTerhitung){
      return true
    }else{
      return false
    }

}

// cek Exes and Ohs
console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));