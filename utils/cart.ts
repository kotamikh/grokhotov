export const getProductsNoun = (n: number): string => {
    const original = n
    n = Math.abs(n);

    n %= 100;
    if (n >= 5 && n <= 20) {
        return original + ' товаров'
    }
    n %= 10;
    if (n === 1) {
        return original + ' товар'
    }
    if (n >= 2 && n <= 4) {
        return original + ' товара'
    }
    return original + ' товаров'
}
