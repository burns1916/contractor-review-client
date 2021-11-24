import {
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    GET_APPOINTMENTS,
} from "../actionTypes"

export function appointmentReducer(state = {}, action) {
    switch(action.type) {
        case ADD_APPOINTMENT:
            return
        case DELETE_APPOINTMENT:
            return
        case GET_APPOINTMENTS:
            return
        default:
            return state
    }
}