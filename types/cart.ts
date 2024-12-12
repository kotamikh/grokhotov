export interface CartProduct {
    id: number,
    img: string,
    name: string,
    description: string,
    article: string,
    price: number,
    count: number,
}

export interface Order {
    products: {
        id: number,
        count: number,
    }[],
    installation: boolean,
}
