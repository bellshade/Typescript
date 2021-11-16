import * as EverydayTypes from './EverydayTypes';

test('[TypeScriptBasic/EverydayTypes] pesanJs', () => {
  expect(typeof EverydayTypes.pesanJs === 'string').toBe(true);
});

test('[TypeScriptBasic/EverydayTypes] pesanTs', () => {
  expect(typeof EverydayTypes.pesanTs === 'string').toBe(true);
});

test('[TypeScriptBasic/EverydayTypes] tahunIni', () => {
  expect(typeof EverydayTypes.tahunIni === 'number').toBe(true);
});

test('[TypeScriptBasic/EverydayTypes] jamIni', () => {
  expect(typeof EverydayTypes.jamIni === 'number').toBe(true);
});

test('[TypeScriptBasic/EverydayTypes] sudahSelesai', () => {
  expect(typeof EverydayTypes.sudahSelesai === 'boolean').toBe(true);
});

test('[TypeScriptBasic/EverydayTypes] apel', () => {
  expect(typeof EverydayTypes.apel === 'string' || typeof EverydayTypes.apel === 'number').toBe(true);
});

test('[TypeScriptBasic/EverydayTypes] arrayNama', () => {
  expect(['Andi', 'Budi', 'Caca']).toEqual(expect.arrayContaining(EverydayTypes.arrayNama));
});

test('[TypeScriptBasic/EverydayTypes] arrayNama2', () => {
  expect(['Andi', 'Budi', 'Caca']).toEqual(expect.arrayContaining(EverydayTypes.arrayNama2));
});
