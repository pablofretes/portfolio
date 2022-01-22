import './App.css';
import { Switch, Route } from 'react-router';
import SunsetHills from './components/sunset-hills/SunsetHills';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Home from './components/Home';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Switch>
        <Route path='/sunset-hills' component={SunsetHills} />
      </Switch>
    </div>
  );
}

export default App;