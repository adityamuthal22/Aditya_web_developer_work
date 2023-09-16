import { CHANGE_INPUT } from "./actionType"

export const ChangeInput = (payload) => {
    return {
        type: CHANGE_INPUT,
        payload
    }
}