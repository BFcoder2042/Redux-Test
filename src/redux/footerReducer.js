import { GET_FOOTER } from "./types"

const initialState = {
    footer: [],
    fetchedFooter: []
}

export const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOOTER:
            return { ...state, fetchedFooter: action.payload }
        default: return state
    }
}