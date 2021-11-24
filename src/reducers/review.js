import {
    ADD_REVIEW,
    DELETE_REVIEW,
    GET_REVIEWS,
} from "../actionTypes"

export function reviewReducer(state = {}, action) {
    switch(action.type) {
        case ADD_REVIEW:
            return
        case DELETE_REVIEW:
            return
        case GET_REVIEWS:
            return
        default:
            return state
    }
}