export const useCounter = () => {
    const value = ref<number>(0)
    const _readonly = computed<number>((): number => value.value)

    return {
        value: _readonly,
        inc: (): void => { value.value++ },
        dec: (): void => { value.value-- },
    }
}

export const usePositiveCounter = () => {
    const { value, inc, dec } = useCounter()

    return {
        value: value,
        inc: inc,
        dec: () => {
            if (value.value > 0) {
                dec()
            }
        }
    }
}
