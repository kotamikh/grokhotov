import { Order } from "~/types/cart";
import { sleep } from "@antfu/utils";
import { useCartState } from "~/server/state/cart";

export default defineEventHandler(async (event) => {
    await sleep(300) // latency imitation

    const body = await readBody<Order>(event)
    if (!body) {
        throw createError({
            statusCode: 400,
            statusMessage: 'invalid order',
        })
    }

    useCartState().clear()
    return body
})
