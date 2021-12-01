import { combineReducers } from 'redux';
import { appointmentReducer } from './appointment'
import { currentUserReducer } from './currentUser'
import { reviewReducer } from './review'

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    appointment: appointmentReducer,
    review: reviewReducer,

})

export default rootReducer