import { userActions } from "./actionTypes";
import { registerUser } from "../../api/activitiesApi";
import { handleApiError } from "../../utils/errorHandling"

const registerUserSuccess = (userData) => {
    return { type: userActions.REGISTER, userData }
}

export const register = () => {
    return (dispatch) => {
        return registerUser()
            .then(data => {
                dispatch(registerUserSuccess(data))
                return data;
            })
            .catch(() => handleApiError("Problem with registering."))
    }
}

const loginUserSuccess = (userData) => {
    return { type: userActions.LOGIN, userData }
}

export const login = () => {
    return (dispatch) => {
        return loginUser()
            .then(data => {
                dispatch(loginUserSuccess(data))
                return data;
            })
            .catch(() => handleApiError("Problem with logging."))
    }
}