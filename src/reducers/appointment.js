import {
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    GET_APPOINTMENTS,
} from "../actionTypes"

const initialState = {
    appointments: [],
}

export function appointmentReducer(state = initialState, action) {
    switch(action.type) {
        case GET_APPOINTMENTS:
            return {...state, appointments: action.appointments}
        case ADD_APPOINTMENT:
            return {...state, appointments: [...state.appointments, action.appointment]}
        case DELETE_APPOINTMENT:
            return {...state, appointments: [...state.appointments.filter((appointment) => appointment.id !== action.appointmentId)]}
        default:
            return state
    }
}