import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav>
        {props.loggedIn ? 
        <div>
        <Link to='/'>
            Home
        </Link>
        <Link to='/appointments'>
            My Appointments
        </Link>
        <Link to='/reviews'>
            My Reviews
        </Link>
        <Link to='/contractors'>
            Contractors
        </Link>
        </div>
        :
        <div>
        <Link to='/'>
            Home
        </Link>
        <Link to='/signup'>
            Sign Up
        </Link>
        <Link to='/login'>
            Login
        </Link>
        </div>
        }
        </nav>
    )
}

const mapStateToProps = state => {
    return ({
    loggedIn: !!state.currentUser
    })
}

export default connect(mapStateToProps)(NavBar)