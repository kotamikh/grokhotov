import { defineStore } from "pinia";

import type { CartProduct, Order } from "~/types/cart";
import { FetchError } from "ofetch";

export const useCartStore = defineStore("cart", () => {
    const appStore = useAppStore()
    const cart = ref<CartProduct[]>([])

    let totalSum = computed<number>((): number => {
        return cart.value.reduce((acc, v) => acc + v.price*v.count, 0)
    })

    const installation = useCookie<boolean>("installation")

    const update = () => {
        appStore.addLoading()
        useFetch('/api/cart').then(res => {
            if (res.data.value) {
                cart.value = res.data.value
            }
        }).finally(appStore.decLoading)
    }

    // TODO: use debounce
    const decreaseCount = (productId: number) => {
        appStore.addLoading()
        $fetch('/api/cart/decrease', { method: 'post', params: { id: productId } }).then(() => {
            const index = cart.value.findIndex(v => v.id === productId)
            if (index === -1) {
                console.error("[decreaseCount] invalid findIndex result")
                return
            }

            const newCount = cart.value[index].count - 1
            if (newCount > 0) {
                cart.value[index].count = newCount
            } else {
                cart.value.splice(index, 1)
            }
        }).catch((err: FetchError) => {
            console.error("[decreaseCount] fetch error: ", err)
        }).finally(appStore.decLoading)
    }

    // TODO: use debounce
    const increaseCount = (productId: number) => {
        appStore.addLoading()
        $fetch('/api/cart/increase', { method: 'post', params: { id: productId } }).then(() => {
            const index = cart.value.findIndex(v => v.id === productId)
            if (index === -1) {
                console.error("[increaseCount] invalid findIndex result")
                return
            }

            cart.value[index].count++
        }).catch((err: FetchError) => {
            console.error("[increaseCount] fetch error: ", err)
        }).finally(appStore.decLoading)
    }

    const deleteProduct = (productId: number) => {
        appStore.addLoading()
        $fetch('/api/cart', { method: 'delete', params: { id: productId } }).then(() => {
            const index = cart.value.findIndex(v => v.id === productId)
            if (index >= 0) {
                cart.value.splice(index, 1)
            }
        }).catch((err: FetchError) => {
            console.error("[deleteProduct] fetch error: ", err)
        }).finally(appStore.decLoading)
    }

    const clearCart = () => {
        appStore.addLoading()
        $fetch('/api/cart/clear', { method: 'post' }).then(() => {
            cart.value = []
        }).catch((err: FetchError) => {
            console.error("[clearCart] fetch error: ", err)
        }).finally(appStore.decLoading)
    }

    const sendOrder = () => {
        const order: Order = {
            products: cart.value.map(v => ({ id: v.id, count: v.count })),
            installation: installation.value,
        }
        appStore.addLoading()
        $fetch('/api/cart/order', { method: 'post', body: order }).then((response: Order) => {
            alert(`Вы заказали ${getProductsNoun(response.products.length)} на сумму ${totalSum.value.toLocaleString()} ₽ `
                + (response.installation ? "с установкой" : "без установки"))
            cart.value = []
        }).finally(appStore.decLoading)
    }

    return {
        cart,
        totalSum,
        installation,
        update,
        decreaseCount,
        increaseCount,
        deleteProduct,
        clearCart,
        sendOrder
    }
})
