import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    categories: categoryReducer,
    user: userReducer
});

export default rootReducer;