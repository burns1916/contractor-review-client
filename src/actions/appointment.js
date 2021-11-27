import {
    GET_APPOINTMENTS,
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
} from "../actionTypes"

const URL = "http://localhost:3001/"

export const getAppointments = () => {
    return dispatch => {
        fetch(`${URL}/appointments`, {
            crednetials: "include",
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
                type: GET_APPOINTMENTS,
                appointment: response,
            })
            }
        })
    }
}

export const addAppointment = (credentials) => {
    return (dispatch) => {
        fetch(`${URL}/appointment`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                console.log(response.error)
            } else {
                dispatch({
                    type: ADD_APPOINTMENT,
                    appointment: response,
                })
            }
        })
        .catch(console.log)
    }
}