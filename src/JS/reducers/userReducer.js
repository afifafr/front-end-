import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL
}
    from "../constants/actions-types";

const initialState = {
    userList: [],
    user: {},
    isLoading: false,
    error: []
};
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                isLoading: true,
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userList: payload
            }
        case GET_USERS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }

}
export default userReducer;