import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import NavBar from './components/NavBar';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './componentes/login';


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
              
            </Switch>
        </Router>
    </div>
  );
}

export default App;
