import React, from 'react';
import { logout } from '../actions/currentUser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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