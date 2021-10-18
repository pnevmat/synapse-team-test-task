import { Switch } from 'react-router';

import PublicRoute from './pages/PublicRoute';
import PrivateRoute from './pages/PrivateRoute';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';

import './App.css';

function App() {
  return (
    <section>
      <Switch>
        <PublicRoute exact path="/" restricted component={HomePage} redirectTo="/movies" />
        <PublicRoute path="/login" restricted component={LoginPage} redirectTo="/" />
        <PublicRoute path="/signup" restricted component={RegistrationPage} redirectTo="/" />
        <PrivateRoute path="/movies" restricted component={MoviesPage} redirectTo="/login" />
      </Switch>
    </section>
  );
};

export default App;
