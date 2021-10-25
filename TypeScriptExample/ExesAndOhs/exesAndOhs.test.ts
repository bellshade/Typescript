import xAndO from './exesAndOhs';

test('Mengecek isi string', () => {
  expect(xAndO('xo')).toBe(true);
  expect(xAndO('xooxx')).toBe(false);
  expect(xAndO('ooxXm')).toBe(true);
  expect(xAndO('zpzpzpp')).toBe(true);
  expect(xAndO('zzoo')).toBe(false);
});