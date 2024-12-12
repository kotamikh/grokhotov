import { usePositiveCounter } from "~/utils/counter";

export const useAppStore = defineStore("app", () => {
    const { value: _loadingCounter, inc, dec } = usePositiveCounter()

    return {
        loading: computed<boolean>(() => _loadingCounter.value > 0),
        addLoading: inc,
        decLoading: dec,
    }
})
