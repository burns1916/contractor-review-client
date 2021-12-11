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
        this.setState({[target.name]: target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
        this.setState({
            username: "",
            password: "",
        })
    }

    render() {
        return(
            <>
            { !this.props.loggedIn ?
            <form onSubmit={this.handleOnSubmit}>
                <label>Name:</label>
                <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} />
                <label>Password:</label>
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="Log In" />
            </form>
            : <Redirect to='/'/> }
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { login, getCurrentUser })(Login))
