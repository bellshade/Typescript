import * as TypeAnnotations from './TypeAnnotations';

test('[TypeScriptBasic/02_TypeAnnotations] pesanJs', () => {
  expect(typeof TypeAnnotations.pesanJs === 'string').toBe(true);
});

test('[TypeScriptBasic/02_TypeAnnotations] pesanTs', () => {
  expect(typeof TypeAnnotations.pesanTs === 'string').toBe(true);
});

test('[TypeScriptBasic/02_TypeAnnotations] tahunIni', () => {
  expect(typeof TypeAnnotations.tahunIni === 'number').toBe(true);
});

test('[TypeScriptBasic/02_TypeAnnotations] jamIni', () => {
  expect(typeof TypeAnnotations.jamIni === 'number').toBe(true);
});

test('[TypeScriptBasic/02_TypeAnnotations] sudahSelesai', () => {
  expect(typeof TypeAnnotations.sudahSelesai === 'boolean').toBe(true);
});

test('[TypeScriptBasic/02_TypeAnnotations] apel', () => {
  expect(typeof TypeAnnotations.apel === 'string' || typeof TypeAnnotations.apel === 'number').toBe(true);
});

test('[TypeScriptBasic/02_TypeAnnotations] arrayNama', () => {
  expect(['Andi', 'Budi', 'Caca']).toEqual(expect.arrayContaining(TypeAnnotations.arrayNama));
});

test('[TypeScriptBasic/02_TypeAnnotations] arrayNama2', () => {
  expect(['Andi', 'Budi', 'Caca']).toEqual(expect.arrayContaining(TypeAnnotations.arrayNama2));
});
