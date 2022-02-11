import { formatCategoryData } from "../../utils/helpers";
import { categoryActions } from "./actionTypes";
import { getActivityCategories } from "../../api/activitiesApi";
import { handleApiError } from "../../utils/errorHandling"

const loadCategoriesSuccess = (categories) => {
    return { type: categoryActions.LOAD_CATEGORIES, categories }
}

export const loadCategories = () => {
    return (dispatch) => {
        return getActivityCategories()
            .then(data => {
                // const formattedData = formatCategoryData(data);
                dispatch(loadCategoriesSuccess(data))
                return data;
            })
            .catch(() => handleApiError("Problem with loading categories"))
    }
}