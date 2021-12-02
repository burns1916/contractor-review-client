import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Header />
        <Router>
          <NavBar />
            <Switch>

            </Switch>
        </Router>
    </div>
  );
}

export default App;
