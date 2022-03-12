// Penjelasan akan ditulis nanti.

function gantiArgumenConstructor(constructor: typeof StringUtility): typeof StringUtility {
    return class extends constructor {
        constructor(args: string[]) {
            super(['Teks pengganti argumen pertama', ...args]);
        }
    };
}

function buatMethodTidakDapatDiubah(target: StringUtility, key: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
}

function harusBerupaArray(target: StringUtility, key: string) {
    // @ts-expect-error ignore error
    if (!Array.isArray(target[key])) {
        throw new Error(`${key} harus berupa array`);
    }
}

@gantiArgumenConstructor
class StringUtility {
    @harusBerupaArray
    public data: string[];

    constructor(data: string[]) {
        this.data = data;
    }

    @buatMethodTidakDapatDiubah
    sambungData(separator: string): string {
        return this.data.join(separator);
    }

    // Bisa digunakan juga pada accessor property
    @buatMethodTidakDapatDiubah
    get dataKapital(): string[] {
        return this.data.map(data => data.toUpperCase());
    }
}

export {
    StringUtility
};
