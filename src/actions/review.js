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
        .then(response => dispatch({
                    type: GET_REVIEWS,
                    reviews: response,
                })
        )
    }
}

export const addReview = (reviewData) => {
    return dispatch => {
        const sendableReviewData = {
            rating: reviewData.rating,
            content: reviewData.content,
        }
        fetch(`${URL}/reviews`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendableReviewData),
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                console.log(response.error)
            } else {
                dispatch ({
                    type: ADD_REVIEW,
                    review: response,
                })
            }
        })
        .catch(console.log)
    }
}

export const deleteReview = (reviewId) => {
    return dispatch => {
        fetch(`${URL}/reviews/${reviewId}`, {
            credentials: "include",
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => {
            dispatch({
                type: DELETE_REVIEW,
                reviewId,
            })
        })
    }
}