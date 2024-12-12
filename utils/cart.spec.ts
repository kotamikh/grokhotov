import { expect, test } from 'vitest'
import { getProductsNoun } from "./cart";

test("getProductsNoun", () => {
    expect(getProductsNoun(1)).toBe("1 товар")
    expect(getProductsNoun(10)).toBe("10 товаров")
    expect(getProductsNoun(3)).toBe("3 товара")
    expect(getProductsNoun(101)).toBe("101 товар")
    expect(getProductsNoun(1024)).toBe("1024 товара")
    expect(getProductsNoun(0)).toBe("0 товаров")
    expect(getProductsNoun(9999)).toBe("9999 товаров")
})
