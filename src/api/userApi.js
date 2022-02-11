const defaultActivitiesUrl = `${process.env.REACT_APP_REST_API_URL}/user`;

export const registerUser = (userData) => {
    return fetch(defaultActivitiesUrl + "/register", {
        method: "POST",
        body: userData
    }).then(res => res.json())
}

export const loginUser = (userData) => {
    return fetch(defaultActivitiesUrl + "/login", {
        method: "POST",
        body: userData
    }).then(res => res.json())
}
