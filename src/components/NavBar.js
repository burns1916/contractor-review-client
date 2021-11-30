import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav>
        {props.loggedIn ? 
        <div>
            
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