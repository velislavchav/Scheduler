import initialState from "../initialState";
import { userActions } from "../actions/actionTypes";

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case userActions.REGISTER:
            return action.userData;
        case userActions.LOGIN:
            return action.userData;
        default:
            return state;
    }
}

export default userReducer;