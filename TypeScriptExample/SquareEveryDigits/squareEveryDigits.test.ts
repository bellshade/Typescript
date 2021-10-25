import sqrtDig from './squareEveryDigits';

test('Mengkuadratkan tiap digit dalam angka', () => {
  expect(sqrtDig(6162)).toBe(361364);
});