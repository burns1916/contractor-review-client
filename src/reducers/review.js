import {
    ADD_REVIEW,
    DELETE_REVIEW,
    GET_REVIEWS,
} from "../actionTypes"

const initialState = {
    reviews: []
}

export function reviewReducer(state = initialState, action) {
    switch(action.type) {
        case GET_REVIEWS:
            return {...state, reviews: action.reviews}
        case ADD_REVIEW:
            return {...state, reviews: [...state.reviews, action.review]}
        case DELETE_REVIEW:
            return {...state, reviews: [...state.reviews.filter((review) => review.id !== action.reviewId)]}
        default:
            return state
    }
}