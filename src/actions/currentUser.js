import {
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER,
    AUTH_USER,
    COMPLETE_AUTH,
} from './actionTypes'

const URL = 'http://localhost:3001'

export const getCurrentUser = () => {
    return dispatch => {
        fetch(`${URL}/get_current_user`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                console.log(response.error)
            } else {
                dispatch({
                    type: SET_CURRENT_USER
                    user: response
                })
            }
        })
        .catch(console.log)
    }
};

export const signup = (credentials) => {
    return (dispatch) => {
        fetch(`${URL}/signup`)
    }
}