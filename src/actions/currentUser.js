import {
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER,
    BEGIN_AUTH,
    COMPLETE_AUTH,
} from '../actionTypes'

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
                    type: SET_CURRENT_USER,
                    user: response
                })
            }
        })
        .catch(console.log)
    }
};

export const signup = (credentials) => {
    return (dispatch) => {
        fetch(`${URL}/signup`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                console.log(response.error)
            } else {
                dispatch({
                    type: SET_CURRENT_USER,
                    user: response
                })
            }
        })
        .catch(console.log)
    }
}

export const login = (credentials) => {
    return (dispatch) => {
        fetch(`${URL}/login`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                console.log(response)
            } else {
                dispatch({
                    type: SET_CURRENT_USER,
                    user: response
                })
            }
        })
        .catch(console.log)
    }
}

export const authUser = () => {
    return dispatch => {
        dispatch({ type: BEGIN_AUTH })
        return fetch(`${URL}/get_current_user`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(resp => resp.json())
        .then(response => {
            if(response.error){
                console.log(response)
                dispatch({ type: COMPLETE_AUTH })
                dispatch({ type: CLEAR_CURRENT_USER })
            } else {
                dispatch ({
                    type: COMPLETE_AUTH,
                    user: response
                })
                dispatch ({ type: SET_CURRENT_USER })
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        fetch(`${URL}/logout`, {
            credentials: "include",
            method: "DELETE",
    })
        .then(resp => resp.json())
        .then(() => {
            dispatch({ type: CLEAR_CURRENT_USER })
        })
    }
}