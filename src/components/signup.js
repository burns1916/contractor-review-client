import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { signup, getCurrentUser } from '../actions/currentUser';

class SignUp extends Component {

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
        e.preventDefault();
        this.props.signup(this.state)
        this.setState({
            username: "",
            password: "",
        })

    }

    render() {
        return(
            <>
            { !this.props.loggedIn ?
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                <label>Password:</label>
                <input type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="Sign Up" />
            </form>
            : <Redirect to='/' />}
            </>
        )
    }

}

const mapStateToProps = state => {
    return{
        loggedIn: !!state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { signup, getCurrentUser })(SignUp))