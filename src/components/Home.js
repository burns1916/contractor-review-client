import { useEffect } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../actions/currentUser';

const Home = (props) => {

    useEffect(() => {
        props.authUser()
    },[])

    return(
        <>
        </>
    )

}

const mapStateToProps = state => {
    return({
        currentUser: state.currentUser,
    })
}

export default connect(mapStateToProps, { authUser })(Home)