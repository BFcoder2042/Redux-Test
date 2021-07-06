import { GET_SIDE_BAR } from "./types";
import { OPEN_SIDEBAR_CHILD_LIST } from "./types";
import { CLOSED_SIDEBAR_CHILD_LIST } from "./types";

const initialState = {
    sideBar: [],
    fetchedSideBar: []
}

export const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SIDE_BAR:
            return { ...state, fetchedSideBar: action.payload }
        case OPEN_SIDEBAR_CHILD_LIST:
            return state.fetchedSideBar = action.payload
        case CLOSED_SIDEBAR_CHILD_LIST:
            return state.fetchedSideBar = action.payload
        default: return state
    }
}