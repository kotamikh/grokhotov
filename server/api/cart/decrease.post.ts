import { useCartState } from "~/server/state/cart";
import { parseIntQueryParam } from "~/server/utils/query";
import { sleep } from "@antfu/utils";

export default defineEventHandler(async (event) => {
    await sleep(300) // latency imitation
    useCartState().decrease(parseIntQueryParam("id", getQuery(event)))
})
