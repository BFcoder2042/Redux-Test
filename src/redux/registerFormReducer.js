import { SWITCH_REGISTER_FORM } from "./types"

const initialState = {
    register: false,
}

export const registerFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_REGISTER_FORM:
            return { ...state, register: action.payload }
        default: return state
    }
}