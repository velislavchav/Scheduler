export const checkIsLanguageValid = (selectedLanguage = null) => {
    const validLanguages = ["BG", "ENG"];
    return validLanguages.includes(selectedLanguage);
}

export const changeLanguage = (selectedLanguage = null) => {
    return checkIsLanguageValid(selectedLanguage) ? localStorage.setItem("language", selectedLanguage) : "";
}

export const getSelectedLanguage = () => {
    return localStorage.getItem("language");
}
