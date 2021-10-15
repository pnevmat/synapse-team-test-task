import { Switch } from 'react-router';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';

import './App.css';

function App() {
  return (
    <section>
      <Switch>
        <HomePage exact path="/" />
        <LoginPage path="/login" />
        <RegistrationPage path="/signup" />
        <MoviesPage path="movies" />
      </Switch>
    </section>
  );
};

export default App;
