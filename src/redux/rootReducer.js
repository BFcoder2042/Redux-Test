import { combineReducers } from "redux";
import { slidesReducer } from "./slidesReducer";
import { productsReducer } from "./productReducer";
import { burgerReducer } from "./burgerReducer";
import { contactsReducer } from "./contactsReducer";
import { footerReducer } from "./footerReducer";
import { logInFormReducer } from "./logInFormReducer";
import { registerFormReducer } from "./registerFormReducer";

export const rootReducer = combineReducers({
    slides: slidesReducer,
    products: productsReducer,
    burger: burgerReducer,
    contacts: contactsReducer,
    footer: footerReducer,
    log_in: logInFormReducer,
    register: registerFormReducer
});