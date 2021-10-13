import { Switch } from 'react-router';

import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <section>
      <Switch>
        <HomePage exact path="/" />
      </Switch>
    </section>
  );
}

export default App;
