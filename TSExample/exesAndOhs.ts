 /**
  * Memeriksa apakah string memiliki jumlah 'x' dan 'o' yang sama.
  * Metode harus mengembalikan boolean dan tidak peka huruf besar/kecil. 
  * String dapat berisi karakter apa pun
  * 
  * Contoh output:
  * xAndO("ooxx") => true
  * xAndO("xooxx") => false
  * xAndO("ooxXm") => true
  * xAndO("zpzpzpp") => true // ketika tidak ada 'x' dan 'o' harus mengembalikan true
  * xAndO("zzoo") => false
  */ 



function xAndO(str:string):boolean  {
    const strArr:Array<string> = str.toLowerCase().split(''); //mengubah string ke lowercase dan memisahkan string menjadi array
    let xTerhitung = 0;
    let oTerhitung = 0;

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
console.log(xAndO('xo'));
console.log(xAndO("xxOo"));
console.log(xAndO("xxxm"));
console.log(xAndO("Oo"));
console.log(xAndO("ooom"));
