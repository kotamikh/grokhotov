import { CartProduct } from "~/types/cart";

let cartState: Array<CartProduct> = [
    {
        id: 0,
        img: 'https://s3-alpha-sig.figma.com/img/9dcd/2a6e/6e52f0e3db978e2972974a05e2cab1f7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4vvewioI56Qpo9a4MoOyF053q7wCjlhNbQiW3mfnk68hSFFyb6U2Wp0bmlVUE~cUzk1wEahm-cem5jxrZ8egsALjdKzMq5Xl33bRmT4wLAHJZTfJ4p0f3Y~HvliQ4ruTmmP7tRmdbhsSwCd4jO9jcsfYsRGJzgU2x38WHA-vNTJTUiYuR7bECD0QNff-NXOAtIyCQiAgcXH0f207kWxf1azUl4B8lhlSSz~PH2bTI714kjAb7p9PHSHull~GIDCAcqLp8LTq7Lny2NFO1ZiscEdkobc7LC5Bku7efeGiBBUiHbokxzQXlBcrF6tga7maOi7-rFhbNoxV6ZlXA21KQ__',
        name: 'Вытяжное устройство G2H',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'G2H1065',
        price: 12644,
        count: 1,
    },
    {
        id: 1,
        img: 'https://s3-alpha-sig.figma.com/img/c16c/179f/01e10420cfedd1db0ccc213f53f48ab7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuydCzjd6Wh4SEXucrSZUWAMsoqiFzDX9gZdhPVHRQKU2MHRpb3ZdKtqT2WfaDQHFFDeONxbapN6fa2xWGn8yPiEHiQOOCXqYYg0Krm3k5p2E8-ZuiQ1PjZVShxUbq7R~ecfMZWqo4UWXUDroZ6N6kAcgwvqmdS5uD9Ab4q9BTekp0kwknZS5e~60uHCUZr1e~4i7jAYha5fsFia71YU6ZV6QoTGaKoMT~A0j22wyixQuq2IwCJ38kyjW4hHmvs5v~~uLV3~KE-0fbMtXe77oVQTOgeFpRWdyEAHN3zerXpbXPsoevpTK49~S8jr1Hv-KyCJ7bEqaO-cgr~L~ggvDA__',
        name: 'Вытяжное устройство BXC',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'G2H1065',
        price: 12644,
        count: 2,
    },
    {
        id: 2,
        img: 'https://s3-alpha-sig.figma.com/img/2268/b19f/a3325353a0e1c66b734515429be5faca?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHQOM2LPiuzvKdcD0bB00QOm70LzYgIlNp3jLbxEsWxl93WjaNRzVWMPhFCPI6kCfKVobucFwpJSi1Cm0I9ULvlgMLwCU31nW1J7Fc5RqXpGh5OALdjXt7Eb0VNptl~UP6Pl2z2vYHbbRDE1HMw8o7SXN3l~WP1cFDkirJIUM1YqYLSoUCdneWuC-mnlH45gI1TH1cEPFIyJFFTSnoTKqdP-UFnyJErUgT2ioiv4VbTDFCbJDmCfXHzUBzk~MHzx2SRjpozgTWGZo1--VPWbrxRP1eepWLR3oMiajGjBSTebmqV9RN9V-0TneMQ8SKgZNzuhdCKzCqXaRTkpps6ZoQ__',
        name: 'Вытяжное устройство GHN',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'G2H1065',
        price: 12644,
        count: 3,
    }
]

export const useCartState = () => {
    return {
        get: () => cartState,
        decrease: (id: number) => {
            const index = cartState.findIndex(v => v.id === id)
            if (index === -1) {
                return
            }

            const product = cartState[index]
            if (product.count === 1) {
                cartState.splice(index, 1)
            } else {
                cartState[index].count--
            }
        },
        increase: (id: number) => {
            const index = cartState.findIndex(v => v.id === id)
            if (index === -1) {
                return
            }

            cartState[index].count++
        },
        clear: () => {
            cartState = []
        },
        deleteProduct: (id: number) => {
            const index = cartState.findIndex(v => v.id === id)
            if (index === -1) {
                return
            }

            cartState.splice(index, 1)
        }
    }
}
