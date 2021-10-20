import { readdirSync, lstatSync } from 'fs';

// List mode, tambahin semisalnya perlu
type CheckDistMode = 'UNIT_TEST' | 'README';

const checkDirectory = (mode: CheckDistMode): boolean => {
  // Exclude folder
  let ret = false;
  const excludedFolder = [
    'node_modules', '.git', 'dumped', '.git', '.github',
    '.vscode'
  ];

  // Cari di kategori
  readdirSync('./').forEach(category => {
    if (lstatSync(category).isDirectory() && !excludedFolder.includes(category)) {
      // Cari di modul
      readdirSync(`./${category}`).forEach(modules => {
        if (lstatSync(`./${category}/${modules}`).isDirectory() && !excludedFolder.includes(category)) {
          let code = readdirSync(`./${category}/${modules}`);

          if (mode === 'UNIT_TEST') {
            code = code.filter(v => v.split('.').splice(1, 2).join('.') === 'test.ts');
            if (code.length === 0) ret = true;
          }

          if (mode === 'README') {
            code = code.filter(v => v === 'README.md' || v === 'README.txt');
            if (code.length === 0) ret = true;
          }
        }
      });
    }
  });

  return ret;
};

test('Hello world', () => {
  expect(typeof 'foo' === 'string').toBe(true);
});

test('Mengecek tiap kategori apakah memiliki file test', () => {
  // Seharusnya, apabila anda telah membuat file test.ts di bagian module
  // error ini akan tidak muncul
  expect(checkDirectory('UNIT_TEST')).not.toBe(true);
});

test('Mengecek tiap kategori apakah memiliki file readme', () => {
  // Seharusnya, apabila anda telah membuat file README di bagian module
  // error ini akan tidak muncul
  expect(checkDirectory('README')).not.toBe(true);
});