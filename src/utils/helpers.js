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

export const makeStringToObjKey = (str = "") => {
    return str.toLocaleLowerCase().replaceAll("-", "_");
}

export const makeCategoryTitleToUrlSafeTitle = (str = "") => {
    return str.toLocaleLowerCase().replaceAll(" ", "-");
}

export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

export const isExistingObjectKey = (obj, searchedKey) => {
    return Object.keys(obj).findIndex(key => key === searchedKey) === -1 ? false : true;
}

// export const formatActivitiesByCategory = (activities = []) => {
//     let result = {};

//     activities.forEach(activity => {
//         const activityCategory = makeStringToObjKey(activity.category) || null;
//         const activitySubcategory = makeStringToObjKey(activity.subcategory) || null;

//         if (activityCategory && activitySubcategory) {
//             const isExistingCategoryInResult = isExistingObjectKey(result, activityCategory);
//             if (!isExistingCategoryInResult) {
//                 result[activityCategory] = {};
//                 result[activityCategory][activitySubcategory] = [];
//             }

//             result[activityCategory][activitySubcategory].push(activity);
//         }
//     })
//     return result;
// }

export const getSelectedCategoryTranslated = (selectedCategory, selectedSubcategory, categoriesData) => {
    let result = {
        category: {},
        subcategory: {}
    };

    if (!isObjectEmpty(categoriesData)) {
        const categoryFound = categoriesData.find(categoryObj => makeCategoryTitleToUrlSafeTitle(categoryObj.title) === selectedCategory);
        result.category.title = categoryFound?.title || "";
        result.category.titleBG = categoryFound?.titleBG || "";
        result.category.description = categoryFound?.description || "";
        result.category.descriptionBG = categoryFound?.descriptionBG || "";
        const subcategoryFound = categoryFound?.subcategories?.find(subcategoryObj => makeCategoryTitleToUrlSafeTitle(subcategoryObj.title) === selectedSubcategory);
        result.subcategory.title = subcategoryFound?.title || "";
        result.subcategory.titleBG = subcategoryFound?.titleBG || "";
        result.subcategory.description = subcategoryFound?.description || "";
        result.subcategory.descriptionBG = subcategoryFound?.descriptionBG || "";
    }

    return result;
}
