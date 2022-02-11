const defaultActivitiesUrl = `${process.env.REACT_APP_REST_API_URL}/activities`;
const defaultCategoriesUrl = `${process.env.REACT_APP_REST_API_URL}/categories`;

export const getAllActivities = () => {
    return fetch(defaultActivitiesUrl)
        .then(res => res.json())
}

export const getActivityCategories = () => {
    return fetch(defaultCategoriesUrl)
        .then(res => res.json())
}

export const getActivitiesByCategory = (category = "", subcategory = "") => {
    return fetch(`${defaultActivitiesUrl}?category=${category}&subcategory=${subcategory}`)
        .then(res => res.json())
}