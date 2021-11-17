/** 
  for(initialization; termination; increment/decrement){
    // Do something
  }

  Keterangan : 
  -Initialization = bentuk expression dan bersifat optional
  -Termination = suatu kondisi yang bertipe boolean dan bersifat optional
  -Increment/Decrement = bentuk expression dan bersifat optional
**/
let numberOne = 10;
let numberTwo = 100;

function getNumber(){
    for(let i=0; i<10; i++){
        console.log(i);
    }
}

getNumber();