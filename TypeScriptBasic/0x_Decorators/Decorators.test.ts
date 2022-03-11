import { StringUtility } from "./Decorators";

test("[TypeScriptBasic/0x_Decorators] Pengecekan Class Decorator", () => {
    expect(new StringUtility(["Test"]).data[0]).toBe("Teks pengganti argumen pertama");
})

test("[TypeScriptBasic/0x_Decorators] Pengecekan Property Decorator", () => {
    // @ts-expect-error
    expect(new StringUtility("abc")).toThrowError();
})

test("[TypeScriptBasic/0x_Decorators] Pengecekan Method Decorator", () => {
    expect(StringUtility.prototype.sambungData = () => { return "" }).toThrowError();
})
