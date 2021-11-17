let nama = "Samuel";

function getNama() : string {
    return nama;
}

function getNoReturn() : void{
    console.log("function void")
}


// anonymous function
let f = function() : string{
    return nama
}

let fVoid = function() : void{
    console.log("function void")
}

console.log(f());
fVoid();