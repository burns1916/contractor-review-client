import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/Signup';
import Login from './components/Login';
import AppointmentContainer from './containers/AppointmentContainer';
import ReviewContainer from './containers/ReviewContainer';



function App() {
  return (
    <div>
      <Header />
        <Router>
          <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/appointments' component={AppointmentContainer} />
              <Route exact path='/reviews' component={ReviewContainer} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
