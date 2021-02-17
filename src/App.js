import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
// import './App.css';
import Home from './pages/Home'
import Detail from './pages/Detail';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <>
      <AppNavbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/details/:id'>
          <Detail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
