import { defineStore } from "pinia";


import type { ViewedProduct } from "~/types/viewed";

export const useViewedStore = defineStore("viewed", () => {
    const appStore = useAppStore()
    const viewed = ref<ViewedProduct[] | null>([])

    const update = () => {
        appStore.addLoading()
        useFetch('/api/viewed').then(res => {
            viewed.value = res.data.value
        }).finally(appStore.decLoading)
    }

    return {
        viewed,
        update
    }
})
