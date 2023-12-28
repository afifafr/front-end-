import axios from 'axios';
import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL
} from "../constants/actions-types";

export const getUsers = () => async dispatch => {
    dispatch({
        type: GET_USERS,
    });
    try {
        const response = await axios.get('http://127.0.0.1:6000/user'); // Corrected URL with http:// prefix
        const users = response.data; // Accessing the actual data from the response

        dispatch({
            type: GET_USERS_SUCCESS,
            payload: users
        });
    } catch (error) {
        dispatch({
            type: GET_USERS_FAIL,
            payload: error.response.data
        });
    }
};
