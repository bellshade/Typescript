import * as InterfaceFile from './interface';

test('Mengecek fungsi PertambahanAdanB', () => {
    const dataInputParameter: InterfaceFile.ParameterFunctionPertambahanAdanB = {
        a: 1,
        b: 2
    };
    const dataHasilFungsi = InterfaceFile.PertambahanAdanB(dataInputParameter);

    expect(typeof dataHasilFungsi === 'number').toBe(true);
    expect(dataHasilFungsi === 3).toBe(true);
});

test('Mengecek fungsi RegisterUser', () => {
    const dataHasilFungsi = InterfaceFile.RegisterUser(InterfaceFile.Udin);
    expect(typeof dataHasilFungsi === 'object').toBe(true);
    expect(Object.keys(dataHasilFungsi).length === 4 && ('nama' in dataHasilFungsi && 'umur' in dataHasilFungsi && 'getNamaPelajar' in dataHasilFungsi && 'dibuatPada' in dataHasilFungsi)).toBe(true);

});