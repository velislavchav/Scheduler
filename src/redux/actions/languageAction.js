import { languageAction } from "./actionTypes"

const changeLanguage = (selectedLanguage) => {
    return { type: languageAction , selectedLanguage}
}

export const selectLanguage = (selectedLanguage) => {
    return dispatch => {
        dispatch(changeLanguage(selectedLanguage))
    }
}

