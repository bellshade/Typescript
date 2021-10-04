/*
===== Mengenal color Hex code =====
Melakukan konversi dari RGB ke Hex itu mudah karena pada dasarnya Hex code pada kode warna merepresentasikan Red, Green, Blue
Sebagai contoh kita punya Hex code #0affaf. Kita dapat memecah hex code tersebut menjadi 3 yaitu 0a, ff, af. Nah ketiga hex code inilah
yang merepresentasikan nilai Red(0a), green(ff), blue(af)

Nah dari contoh di atas kita dapat simpulkan bahwa kita hanya perlu merubah angka desimal pada RGB menjadi Hexa dan menyatukannya
** Perlu diketahui bahwa
Hex Code memiliki 16 radix yaitu 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f dan
Desimal memiliki 10 radix yaitu 0,1,2,3,4,5,6,7,8,9
*/

const rgbToHex = (red: number, green: number, blue: number) => {
  // Kita lakukan pengecekan terhadap nilai yang diberikan karena nilai RGB maksimal adalah 255
  if (red > 255 || green > 255 || blue > 255) {
    throw Error("Nilai tidak dapat lebih dari 255");
  }

  // Kita konversikan nilai Desimmal pada warna merah, hijau, dan biru menjadi angka Hexadesimal
<<<<<<< HEAD
  let r =
    red.toString(16).length > 1 ? red.toString(16) : `0${red.toString(16)}`;
  let g =
    green.toString(16).length > 1
      ? green.toString(16)
      : `0${green.toString(16)}`;
  let b =
=======
  const r =
    red.toString(16).length > 1 ? red.toString(16) : `0${red.toString(16)}`;
  const g =
    green.toString(16).length > 1
      ? green.toString(16)
      : `0${green.toString(16)}`;
  const b =
>>>>>>> f0de88558581b1bdc1b7c6f8cbe32a532647e675
    blue.toString(16).length > 1 ? blue.toString(16) : `0${blue.toString(16)}`;

  // Lalu kita gabungkan nilai dari R G B menjadi satu
  return `#${[r, g, b].join("")}`;
};

console.log(rgbToHex(10, 255, 255));
