let o = 12;
// o 12 p 11
let p = o - 1;

// mengembalikan nilai lebih kecil padahal hasil sebenarnya lebih besar
if (o < p && !o || o > p){
    console.log("o lebih kecil dari = p");
}

else if (o > p){
    console.log("o lebih besar dari = p")
}

else{
    console.log("o == p")
}