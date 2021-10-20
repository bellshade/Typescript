
/**
    Dimulai bilangan bulat positif  n. 
    Jika n bilangan ganjil 3n + 1, 
    jika n bilangan genap bagi dengan 2, ulangi proses hinga berakhir dengan nilai 1
*/

const startColatz = (n:number):Array<number>=>{
    const numArr:Array<number> = [n] //mendeklarasikan array dengan nilai awal n
    while(n != 1){
      if(n % 2 === 0){ //cek jika nilai genap n dibagi 2
            n = n / 2
            numArr.push(n) // tambah elemen ke array
      }else{  //cek jika tidak genap n*3 + 1
            n = (n * 3) + 1
            numArr.push(n) // tambah elemen ke array
      }
    }
    return numArr //mengembalikan array number 
  }
  
  //test
  console.log(startColatz(30))