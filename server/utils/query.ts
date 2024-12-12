import { QueryObject } from "ufo";

export const parseIntQueryParam = (key: string, query: QueryObject): number => {
    const queryValue = query[key]
    if (!queryValue || typeof queryValue !== "string") {
        throw createError({
            statusCode: 400,
            statusMessage: `query parameter ${key} is invalid or not passed`,
        })
    }

    const value = parseInt(queryValue)
    if (!Number.isInteger(value)) {
        throw createError({
            statusCode: 400,
            statusMessage: `query parameter ${key} must be a number`,
        })
    }

    return value
}
