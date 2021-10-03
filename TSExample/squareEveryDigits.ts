// mengkuadratkan setiap digit angka dan menggabungkannya.
// contoh input 6162 
// output : 6^2,1^2,6^2,2^2 => '36','1','36','4' => 361364
  function pangkatkanPerDigit(num: number):number {
    const arrayNum:string = Array.from(String(num),Number).map((value)=>{
      return Math.pow(value,2)
    }).join('')
    return parseInt(arrayNum)
  }

  console.log(pangkatkanPerDigit(6162))
  console.log(pangkatkanPerDigit(76543))