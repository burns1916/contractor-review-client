import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { login, getCurrentUser } from '../actions/currentUser';

const Login = props => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please enter Email and Password")
        } else {
            props.login({ email, password })
        }
        setEmail('')
        setPassword('')
    }

        return(
            <>
            { props.loggedIn ?
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" placeholder="Email" name={email} value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="password" placeholder="Password" name={password} value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Log In" />
            </form>
            : <Redirect to='/'/> }
            </>
        )
    }

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { login, getCurrentUser })(Login))
