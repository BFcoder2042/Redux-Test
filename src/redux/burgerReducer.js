import { SWITCH_BURGER } from "./types";

const initialState = {
    burger: false,
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_BURGER:
            return { ...state, burger: action.payload }
        default: return state
    }
}