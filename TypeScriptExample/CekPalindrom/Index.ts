import cekPalindrom from './cekPalindrom';
import { question } from 'readline-sync';

const input = question('Masukkan kata yang ingin dicek: ');

if (cekPalindrom(input)) {
	console.log(`${input} PALINDROM`);
} else {
	console.log(`${input} BUKAN PALINDROM`);
}