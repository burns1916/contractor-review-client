import { appointmentReducer } from './appointment'
import { currentUserReducer } from './currentUser'

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    appointment: appointmentReducer,
    
})

export default rootReducer