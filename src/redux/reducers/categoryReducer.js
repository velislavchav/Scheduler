import initialState from "../initialState";
import { categoryActions } from "../actions/actionTypes";

const categoryReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case categoryActions.LOAD_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

export default categoryReducer;