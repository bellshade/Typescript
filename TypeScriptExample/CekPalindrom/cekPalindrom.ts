export default function (input: string): boolean {
	const inputKecil: string = input.toLowerCase();
	const balik: string = inputKecil.split('').reverse().join('');

	if (inputKecil === balik){
		return true;
	} else {
		return false;
	}
}