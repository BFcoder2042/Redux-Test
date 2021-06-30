import { GET_PRODUCTS } from "./types"

const initialState = {
    products: [],
    fetchedProducts: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, fetchedProducts: action.payload }
        default: return state
    }
}