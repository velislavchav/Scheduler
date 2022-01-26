const defaultActivitiesUrl = "http://localhost:3001/activities";

export const getAllActivities = () => {
    return fetch(defaultActivitiesUrl)
        .then(res => res.json())
}

export const getActivityCategories = () => {
    return fetch(defaultActivitiesUrl + "/categories")
        .then(res => res.json())
}

export const getActivitiesByCategory = (category = "", subcategory = "") => {
    return fetch(`${defaultActivitiesUrl}?category=${category}&subcategory=${subcategory}`)
        .then(res => res.json())
        .then(result => result.data)
}