import { combineReducers } from "redux";
import { slidesReducer } from "./slidesReducer";
import { productsReducer } from "./productReducer";

export const rootReducer = combineReducers({
    slides: slidesReducer,
    products: productsReducer
});