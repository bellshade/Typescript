let a = 200 + 2;
let b = a % 2;

// incerement akan ditambah 1
// decrement akan dikurang 1
let c =  a++ + b++;

let d = 100;
d++; // hasilnya d = 101 is equal d = d + 1

//dinamis
d = d + 5;
d += 1;

// comparison
let e = 10;
let g = 5;

// e lebih besar dari g maka hasilnya akan bernilai boolean false
let h = e < g;
// e lebih besar dari g maka hasilnya akan bernilai boolean true
let i = e > g;

let j = true;
let k = false;

// true and false = false
let l = j && k;
// akan true karena salah satunya ada yang bernilai true yaitu j
let m = j || k;
// negasi bukan !true artinya ture
let n = !k;

console.log(n);