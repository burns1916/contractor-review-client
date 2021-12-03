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

export default connect(mapStateToProps, { addAppointment, getAppointments, })(AppointmentContainer)