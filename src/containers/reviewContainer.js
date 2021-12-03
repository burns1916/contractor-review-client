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

export default connect(mapStateToProps, { getReviews, addReview })(ReviewContainer)