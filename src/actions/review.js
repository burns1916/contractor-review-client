import {
    GET_REVIEWS,
    ADD_REVIEW,
    DELETE_REVIEW,
} from '../actionTypes'

const URL = 'http://localhost:3001/'

export const getReviews = () => {
    return dispatch => {
        fetch(`${URL}/reviews`, {
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
                    type: GET_REVIEWS,
                    reviews: response,
                })
            }
        })
        .catch(console.log)
    }
}