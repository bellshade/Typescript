// Penjelasan akan ditulis nanti.

function gantiArgumenConstructor(constructor: typeof StringUtility): typeof StringUtility {
    return class extends constructor {
        constructor(args: string[]) {
            super(['Teks pengganti argumen pertama', ...args]);
        }
    };
}

function cekArgumen(target: StringUtility, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
        if (args.some(arg => typeof arg !== 'string')) throw Error('Argumen harus berupa string');
        return originalMethod.apply(this, [args[0], ...args.slice(1)]);
    };
}

@gantiArgumenConstructor
class StringUtility {
    public data: string[];

    constructor(data: string[]) {
        this.data = data;
    }

    @cekArgumen
    sambungData(separator: string): string {
        return this.data.join(separator);
    }

    get dataKapital(): string[] {
        return this.data.map(data => data.toUpperCase());
    }
}

export {
    StringUtility
};
