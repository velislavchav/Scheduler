export const checkIsLanguageValid = (selectedLanguage = null) => {
    const validLanguages = ["BG", "ENG"];
    return validLanguages.includes(selectedLanguage);
}
