import collatz from './collatzConjecture';

test('Cek collatz', () => {
  const num = [
    30, 15, 46, 23, 70, 35, 106,
    53, 160, 80, 40, 20, 10, 5,
    16, 8, 4, 2, 1
  ];
  expect(collatz(30).toString()).toBe(num.toString());
});