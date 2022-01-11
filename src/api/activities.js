const defaultActivitiesUrl = "http://localhost:3001/activities";

export const getAllActivities = () => {
    return fetch(defaultActivitiesUrl)
        .then(res => res.json())
}

export const getActivityCategories = () => {
    return fetch(defaultActivitiesUrl + "/categories")
        .then(res => res.json())
}