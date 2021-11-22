import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { login, getCurrentUser } from '../actions/currentUser';

class Login extends Component {

    state = {
        username: "",
        password: "",
    }

    componentDidMount() {
        this.props.getCurrentUser()
    }

    handleChange = ({ target }) => {

    }

    handleOnSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return(
            
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { login, getCurrentUser }){Login})
