import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { signup, getCurrentUser } from '../actions/currentUser';

const SignUp = (props) => {

    const [userName, setUserName] = useState('')

    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!userName || !password) {
            alert("Please add username and password")
        } else {
        props.signup({userName, password})
        }
        setUserName('')
        setPassword('')
    }

        return(
            <>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <label>Password:</label>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Sign Up" />
            </form>
            </>
        )

}

const mapStateToProps = state => {
    return{
        loggedIn: !!state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { signup, getCurrentUser })(SignUp))