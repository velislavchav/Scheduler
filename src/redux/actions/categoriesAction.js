import { categoryActions } from "./actionTypes";
import { getActivityCategories } from "../../api/activitiesApi";
import { handleApiError } from "../../utils/errorHandling"

const loadCategoriesSuccess = (categories) => {
    return { type: categoryActions.LOAD_CATEGORIES, categories }
}

export const loadCategories = () => {
    return (dispatch) => {
        return getActivityCategories()
            .then(data => dispatch(loadCategoriesSuccess(data.categories)))
            .catch(() => handleApiError("Problem with loading categories"))
    }
}