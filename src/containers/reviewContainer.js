import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReviews, addReview } from '../actions/review'

class ReviewContainer extends Component {

    render() {
        return(
            <>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { getReviews, addReview })(ReviewContainer)