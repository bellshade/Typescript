import rgbToHex from './rgbToHex';

test('Mengecek isi string', () => {
  expect(rgbToHex(255, 255, 255).toUpperCase()).toBe('#FFFFFF');
  expect(rgbToHex(3, 25, 24).toUpperCase()).toBe('#031918');
  expect(rgbToHex(88, 150, 77).toUpperCase()).toBe('#58964D');
  expect(rgbToHex(145, 22, 137).toUpperCase()).toBe('#911689');
});