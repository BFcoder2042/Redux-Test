import { combineReducers } from "redux";
import { slidesReducer } from "./slidesReducer";

export const rootReducer = combineReducers({
    slides: slidesReducer
});