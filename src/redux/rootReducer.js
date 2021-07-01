import { combineReducers } from "redux";
import { slidesReducer } from "./slidesReducer";
import { productsReducer } from "./productReducer";
import { burgerReducer } from "./burgerReducer";
import { contactsReducer } from "./contactsReducer";

export const rootReducer = combineReducers({
    slides: slidesReducer,
    products: productsReducer,
    burger: burgerReducer,
    contacts: contactsReducer
});