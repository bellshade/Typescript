export default function (red: number, green: number, blue: number): string {
  // Kita lakukan pengecekan terhadap nilai yang diberikan karena nilai RGB maksimal adalah 255
  if (red > 255 || green > 255 || blue > 255) {
    throw Error('Nilai tidak dapat lebih dari 255');
  }

  // Kita konversikan nilai Desimmal pada warna merah, hijau, dan biru menjadi angka Hexadesimal
  const r =
    red.toString(16).length > 1 ? red.toString(16) : `0${red.toString(16)}`;
  const g =
    green.toString(16).length > 1
      ? green.toString(16)
      : `0${green.toString(16)}`;
  const b =
    blue.toString(16).length > 1 ? blue.toString(16) : `0${blue.toString(16)}`;

  // Lalu kita gabungkan nilai dari R G B menjadi satu
  return `#${[r, g, b].join('')}`;
}