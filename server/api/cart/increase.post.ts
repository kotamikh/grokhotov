import { useCartState } from "~/server/state/cart";
import { parseIntQueryParam } from "~/server/utils/query";
import { sleep } from "@antfu/utils";

export default defineEventHandler(async (event) => {
    await sleep(300) // latency imitation
    useCartState().increase(parseIntQueryParam("id", getQuery(event)))
})
