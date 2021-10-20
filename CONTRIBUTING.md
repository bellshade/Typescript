# Contributing

## Contributor

Kami sangat senang Anda telah ikut berkontribusi dalam implementasi algoritma, struktur data, atau memperbaiki error.
Semua boleh ikut berkontribusi walaupun hal kecil dengan pengecualian sebagai berikut:

- Hasil pekerjaan kamu adalah buatan kamu sendiri dan tidak ada hak cipta dari orang lain
	- Jika kami menemukan kesamaan maka kami tidak `merged`.
- Hasil kerja kamu akan berlisensi [MIT](LICENSE) ketika permintaan _pull_ kamu sudah di-merged
- Hasil kerja kamu wajib mengikuti standard dan _style_ koding dari kami
- Penggunaan nama file yang bersifat **camelCase** dan berlaku juga untuk variabel dan _identifier_
- Menggunakan output `console.log()`

## Skema Folder

Dalam repositori TypeScript, kami menggunakan standarisasi folder di bawah ini:
```
root
|  Category1
   |  Subcategory1
      |  SubCategory1.ts
      |  SubCategory1.test.ts
      |  README.md
   |  Subcategory2
      |  SubCategory2.ts
      |  SubCategory2.test.ts
      |  Index.ts
      |  README.md
|  Category2
   |  Subcategory1
      |  SubCategory1.ts
      |  SubCategory1.test.ts
      |  Index.ts
      |  README.md
      |  Executor
         |  Beberapa.ts
         |  Fungsi.ts
         |  DiSini.ts
   |  Subcategory2
```
Adapun beberapa aturan untuk skema folder yang kami buat untuk menjaga kualitas kode dan teroganisasinya kode yaitu:
1. Setiap folder **wajib** menyediakan **Unit Test** seperti pada contoh di atas.
2. Setiap folder **wajib** menyediakan **README** untuk menjelaskan secara rinci mengenai kode tersebut.
3. Apabila anda ingin memberikan contoh cara mengeksekusi kode yang anda jelaskan, anda dapat membuat **Index.ts** sebagai *deploy point* dari kode anda.

## Unit Test
Kami menggunakan Jest dan ESLint untuk menjaga bahwa kode yang ditulis di dalam repositori ini dapat dijalankan dengan baik dan juga kode tersebut dapat dibaca dengan mudah oleh banyak orang.

Anda dapat menggunakan `npm test` untuk menggunakan Jest, `npm run lint` untuk menggunakan ESLint, ataupun `npm run tl` yang merupakan shorthand dari Jest dan ESLint.

Sedikit catatan, sebaiknya kalian mengecek apakah kode anda lolos dari Unit Test dan Linter agar Pull Request anda nantinya tidak ditolak oleh Github Actions.

## Gaya Penulisan
Untuk gaya penulisan dari repositori ini, kami menggunakan TypeScript Eslint dengan beberapa modifikasi yang dapat kalian lihat aturannya [di sini](./.eslintrc.js).

## Pull Request

### Pull request yang baik

- Lakukan _fork_ pada repositori kami
- Setelah melakukan _fork_, kamu dibebaskan untuk mengubah atau menambah algoritma
  - Untuk _pull request_ mengubah, diusahakan kamu menerapkan algoritma yang lebih baik dan lebih mudah
- Setelah mengubah, menambah, atau memperbaiki dokumentasi, usahakan kamu membuat _branch_ baru

```bash
git checkout -b <branch_name>
git add .
git commit -m "add: menambahkan algoritma baru"
```

- Lakukan _push_ ke _branch_ kamu, kemudian _open pull request_

### Saran pesan _commit_

- `add` untuk menambah algoritma atau tambahan lainnya
- `fix` untuk mengubah algoritma yang sudah ada atau memperbaiki
- `docs` untuk mengubah atau membuat dokumentasi
- `style` untuk mengubah atau memperbaiki style kode untuk contohnya bisa dilihat pada _commit_ yang di atas

_pull request_ `merged` jika:

- Mengikuti standar dan arahan dari `CONTRIBUTING.md`
- Lulus tes dari Github Action yang berjalan otomatis

## Tambahan

- Jika ada kendala atau masalah dalam _pull request_, kamu bisa laporkan masalah pada [issue](https://github.com/bellshade/Typescript/issues)
- Jika ada tes yang tidak lewat atau gagal, kami akan mengecek kembali perubahan.

Untuk pull request, kami sarankan untuk menjelaskan secara detail yang kamu ubah atau tambahkan, dan bersikap sopan, serta selalu berterima kasih, itu salah satu bentuk tata krama yang baik terhadap sesama contributor dan programmer lainnya. Terima kasih sudah berkontribusi di **Typescript**
