import { intro1, intro2, intro3, StringOrNumber } from './TypeAliases';

test('Mengecek intro1', () => {
  const data = intro1({name: 'huda', age: 22, country: 'indonesia', hobby: 'ngoding'});
  expect(typeof data === 'string').toBe(true);
});

test('Mengecek intro2', () => {
  const data = intro2({name: 'huda', age: 22, country: 'indonesia', hobby: 'ngoding'});
  expect(typeof data === 'string').toBe(true);
});

test('Mengecek intro3', () => {
  const data = intro3({
    name: 'huda',
    age: 22,
    country: 'indonesia',
    hobby: 'ngoding',
    phoneNumber: '08111112222',
    email: 'hudaexample@gmail.com',
  });
  expect(typeof data === 'string').toBe(true);
});

test('Mengecek apakah tipe ini dapat dimasukkan string atau number', () => {
  const vaStr: StringOrNumber = 'a';
  const vaNum: StringOrNumber = 1;
  expect(typeof vaStr === 'string' && typeof vaNum === 'number').toBe(true);
});
