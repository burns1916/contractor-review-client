import {
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER,
    BEGIN_AUTH,
    COMPLETE_AUTH
} from "../actionTypes"

const initialState = {
    currentUser: {},
    authComplete: false,
}

export function currentUserReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return { ...state, currentUser: action.user, }
        case CLEAR_CURRENT_USER:
            return null
        case BEGIN_AUTH:
            return { ...state, authComplete: false, }
        case COMPLETE_AUTH:
            return { ...state, authComplete: true, }
        default:
            return state
    }
}  