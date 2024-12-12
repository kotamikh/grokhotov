import { useCartState } from "~/server/state/cart";
import { sleep } from "@antfu/utils";

export default defineEventHandler(async () => {
    await sleep(300) // latency imitation
    useCartState().clear()
})
