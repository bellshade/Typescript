import { StringUtility } from './Decorators';

test('[TypeScriptBasic/0x_Decorators] Pengecekan Class Decorator', () => {
    expect(new StringUtility(['Test']).data[0]).toBe('Teks pengganti argumen pertama');
});

test('[TypeScriptBasic/0x_Decorators] Pengecekan Method Decorator', () => {
    expect(() => new StringUtility(['Test']).sambungData(123 as unknown as string)).toThrowError();
});
