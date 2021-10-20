import cekPalindrom from './cekPalindrom';

test('Cek apakah kata ini palindrom apa tidak dan sebaliknya', () => {
	expect(cekPalindrom('aba')).toBe(true);
	expect(cekPalindrom('babi')).toBe(false);
});