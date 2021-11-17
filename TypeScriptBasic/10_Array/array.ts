let buahArr : string[] = ["Apel", "Alpukat"];

// indeks pertama [0]
console.log(buahArr[0]);

// multidimensi 
let bangkuArr : string[][] = [];

bangkuArr.push(["Murid 1", "Murid 2"]);
bangkuArr.push(["Murid 3", "Murid 4"]);
bangkuArr.push(["Murid 5", "Murid 6"]);

// baris pertama kolom kedua dari array itu
console.log(bangkuArr[0][1]);

// print indeks dan value
for(let i=0; i<bangkuArr.length; i++){
    // console.log(bangkuArr[i]);
    for(let j=0; j<bangkuArr[i].length; j++){
        //print meja // print kursi
        console.log(bangkuArr[i][j])
    }
}

// in print indeks // of print value
for(let i of bangkuArr){
    console.log(i)
}