import {question} from 'readline-sync';

const input: string = question('Masukkan teks yang mau dicek: ');

const inputKecil: string = input.toLowerCase();
const balik: string = inputKecil.split('').reverse().join('');

if (inputKecil == balik){
	console.log(`${input} PALINDROM`);
} else {
	console.log(`${input} BUKAN PALINDROM`);
}
