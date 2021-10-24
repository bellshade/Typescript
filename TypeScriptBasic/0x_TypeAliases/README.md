# Type Aliases
Type Aliases adalah pemberian nama type baru secara kostum jika di Typescript memiliki type seperti string, number, boolean, dll maka dengan type aliases kita dapat menkombinasikan type-type tersebut menjadi 1 type kostum. Sebagai contoh:

```ts
type StringOrNumber = string | number;

const value1: StringOrNumber = 'value 1';
const value2: StringOrNumber = 1;

console.log(value1, value2);
```

Type Aliases membuat kode lebih readable atau lebih dapat dibaca oleh programmer lain. Selain untuk membuat kostum type, type aliases juga berguna untuk membuat code kita lebih mudah dibaca. Permasalahan dari metode ini adalah parameter pada function terlalu panjang sehingga sulit untuk dibaca. Sebagai contoh:

```ts
function intro1(data: { name: string, age: number, country: string, hobby: string}) {
  return `
    name: ${data.name}, 
    age: ${data.age} years,
    country: ${data.country},
    hobby: ${data.hobby}
  `;
}
intro1({name: 'huda', age: 22, country: 'indonesia', hobby: 'ngoding'});
```

Dapat kita lihat parameter terlalu panjang untuk dibaca sehingga diperlukan type alias untuk menjelaskan data tersebut seperti contoh di bawah ini:

```ts
// solving: merefactor dengan menggunakan type aliases
type Person = {
  name: string,
  age: number,
  country: string,
  hobby: string
}

// Pada parameter function kita hanya perlu mengisi nama type yang telah kita buat.
function intro2(data: Person) {
  return `
    name: ${data.name}, 
    age: ${data.age} years,
    country: ${data.country},
    hobby: ${data.hobby}
  `;
}

intro2({name: 'huda', age: 22, country: 'indonesia', hobby: 'ngoding'});
```

## Mengabungkan Type Aliases dengan Type Lain
Pada kode sebelumnya kita telah membuat type yang bernama Person. Type Person tersebut dapat digabungkan dengan beberapa tipe lain sehingga kita dapat melakukan **extension** terhadap tipe data yang lain. Sebagai contoh:

```ts
// untuk menggabungkannya hanya perlu menggunakan "&"
type PersonWithContact = Person & {
  phoneNumber: string,
  email: string
}

function intro3(data: PersonWithContact) {
  return `
    name: ${data.name}, 
    age: ${data.age} years,
    country: ${data.country},
    hobby: ${data.hobby},
    phone number: ${data.phoneNumber},
    email: ${data.email}
  `;
}

intro3({
  name: 'huda',
  age: 22,
  country: 'indonesia',
  hobby: 'ngoding',
  phoneNumber: '08111112222',
  email: 'hudaexample@gmail.com',
});
```
