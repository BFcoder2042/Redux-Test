import { SWITCH_LOG_IN_FORM } from "./types"

const initialState = {
    log_in: false,
}

export const logInFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LOG_IN_FORM:
            return { ...state, log_in: action.payload }
        default: return state
    }
}