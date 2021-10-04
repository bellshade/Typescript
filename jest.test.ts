import { readdirSync, lstatSync } from 'fs'

test('[JEST-CONF] Hello world', () => {
  expect(typeof 'foo' === 'string').toBe(true);
});

test('[JEST-CONF] Mengecek tiap kategori apakah memiliki file test', () => {
  // Exclude folder
  const excludedFolder = [
    'node_modules', '.git', 'dumped', '.git', '.github',
    '.vscode'
  ]

  function checkDirectory() {
    // Cari di kategori
    readdirSync('./').forEach(category => {
      if (lstatSync(category).isDirectory() && !excludedFolder.includes(category)) {
        // Cari di modul
        readdirSync(`./${category}`).forEach(modules => {
          if (lstatSync(`./${category}/${modules}`).isDirectory() && !excludedFolder.includes(category)) {
            // Cari di kode
            const code = readdirSync(`./${category}/${modules}`)
              .filter(v => v.split('.').splice(1, 2).join('.') === 'test.ts');
            if (code.length === 0) throw TypeError("UNIT_TEST_NOT_FOUND");
          }
        });
      }
    });
  }

  // Seharusnya, apabila anda telah membuat file test.ts di bagian module
  // error ini akan tidak muncul
  expect(checkDirectory).not.toThrowError("UNIT_TEST_NOT_FOUND")
});
