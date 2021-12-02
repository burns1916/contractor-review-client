import {
    GET_APPOINTMENTS,
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
} from "../actionTypes"

const URL = "http://localhost:3001/"

export const getAppointments = () => {
    return dispatch => {
        fetch(`${URL}/appointments`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(resp => resp.json())
        .then(appointments => dispatch({
                type: GET_APPOINTMENTS,
                appointments,
            })
        })
    }
}

export const addAppointment = (appointmentData) => {
    return (dispatch) => {
        const sendableAppointmentData = {
            jobName: appointmentData.jobName,
            jobDescription: appointmentData.jobDescription,
            appointmentTime: appointmentData.appointmentTime,
        }
        fetch(`${URL}/appointment`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendableAppointmentData)
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

export const deleteAppointment = (appointmentId) => {
    return dispatch => {
        fetch(`${URL}/appointment/${appointmentId}`, {
        credentials: "include",
        method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => {
                dispatch ({
                    type: DELETE_APPOINTMENT,
                    appointmentId,
                })
            })
    }
}