import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAppointments, addAppointment } from '../actions/appointment'


class AppointmentContainer extends Component {

    render() {
        return (
            <>

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

export default connect(mapStateToProps, { addAppointment, getAppointments, })(AppointmentContainer)