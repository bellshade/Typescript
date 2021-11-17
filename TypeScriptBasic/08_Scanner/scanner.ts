// import semua sebagai r dari readline
import * as r from "readline"

const rl = r.createInterface({
    input : process.stdin,
    output : process.stdout
});
            // querry ? pertanyaan // dan callback nya anon function
rl.question("Masukkan umur : ", (data) => {
    console.log(`Umur anda adalah : ${data}`);
    rl.close();
})