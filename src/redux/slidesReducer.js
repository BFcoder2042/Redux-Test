import { GET_SLIDES } from "./types"

const initialState = {
    slides: [],
    fetchedSlides: []
}

export const slidesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SLIDES:
            return { ...state, fetchedSlides: action.payload }
        default: return state
    }
}