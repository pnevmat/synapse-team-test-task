import { Switch } from 'react-router';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'

function App() {
  return (
    <section>
      <Switch>
        <HomePage exact path="/" />
        <LoginPage path="/login" />
        <RegistrationPage path="/signup" />
      </Switch>
    </section>
  );
};

export default App;
