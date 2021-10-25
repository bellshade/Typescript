import * as TypeFile from './type';

test('Mengetes fungsi ApakahTrue' , () => {
    expect(TypeFile.ApakahTrue(true)).toBe('benar!');
    expect(TypeFile.ApakahTrue(false)).toBe('salah');
});

test('Mengetes fungsi ATambahB' , () => {
    expect(TypeFile.ATambahB(1,2)).toBe(3);
});