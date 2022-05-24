import * as TypeFile from './Type';

test('[TypeScriptBasic/03_ObjectTypes] Mengetes fungsi ApakahTrue', () => {
  expect(TypeFile.ApakahTrue(true)).toBe('benar!');
  expect(TypeFile.ApakahTrue(false)).toBe('salah');
});

test('[TypeScriptBasic/03_ObjectTypes] Mengetes fungsi ATambahB', () => {
  expect(TypeFile.ATambahB(1, 2)).toBe(3);
});
