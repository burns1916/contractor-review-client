import React, from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/currentUser';

const Logout = ({ logout }) => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            logout
            }
        }>
            <input type='submit' value="Logout" />
        </form>
    )
}

export default withRouter(connect(null, { logout })(Logout))