import { CHANGE_INPUT } from "./actionType"

const initialState = {
    value: ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case CHANGE_INPUT:
            return {
                ...state,
                value: payload
            }

        default:
            return state;
    }
}