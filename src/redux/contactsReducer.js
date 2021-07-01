import { GET_CONTACTS } from "./types"

const initialState = {
    contacts: [],
    fetchedContacts: []
}

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return { ...state, fetchedContacts: action.payload }
        default: return state
    }
}