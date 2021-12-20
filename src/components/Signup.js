import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, getCurrentUser } from '../actions/currentUser';

const SignUp = (props) => {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [metaType, setMetaType] = useState('client')

    const [name, setName] = useState('')

    const [businessName, setBusinessName] = useState('')

    const [licenseNumber, setLicenseNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !password) {
            alert("Please add username and password")
        } else {
        props.signup({email, password, metaType, name, businessName, licenseNumber})
        }
        setEmail('')
        setPassword('')
        setMetaType('client')
        setName('')
        setBusinessName('')
        setLicenseNumber('')
    }

        return(
            <>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" placeholder="Email" name={email} value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" placeholder="Password" autoComplete="on" name={password} value={password} onChange={(e) => setPassword(e.target.value)} />
                <br /> 
                <label>Account Type:</label>
                <br />
                <input type="radio" name={metaType} value="client" checked={metaType === "client"} onChange={(e) => setMetaType(e.target.value)} />
                <label>Client</label>
                <br />
                <input type="radio" name={metaType} value="contractor" checked={metaType === "contractor"} onChange={(e) => setMetaType(e.target.value)} />
                <label>Contractor</label>
                <br />
                {metaType === "client" ?
                    <>
                    <label>Name: </label>
                    <input type="text" placeholder="Name" name={name} value={name} onChange={(e) => setName(e.target.value)} />
                    </>
                    :
                    <>
                    <label>Business Name: </label>
                    <input type="text" placeholder="Business Name" name={businessName} value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                    <br />
                    <label>License Number: </label>
                    <input type="text" placeholder="License Number" name={licenseNumber} value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} />
                    </>
                    }
                <br />
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