import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import languageReducer from "./languageReducer";

const rootReducer = combineReducers({
    categories: categoryReducer,
    language: languageReducer
});

export default rootReducer;