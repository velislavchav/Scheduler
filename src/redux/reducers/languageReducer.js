import initialState from "../initialState";
import { languageAction } from "../actions/actionTypes";

const languageReducer = (state = initialState.language, action) => {
    debugger
    switch (action.type) {
        case languageAction:
            return action.selectedLanguage;
        default:
            return state;
    }
}

export default languageReducer;