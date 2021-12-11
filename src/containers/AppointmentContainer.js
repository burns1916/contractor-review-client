import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAppointments, addAppointment } from '../actions/appointment'
import AppointmentForm from '../components/AppointmentForm';



class AppointmentContainer extends Component {

    state = {

    }

    componentDidMount() {
        this.props.getAppointments()
    }



    render() {
        return (
            <>
                <AppointmentForm />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        appointments: state.appointment,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { addAppointment, getAppointments })(AppointmentContainer)