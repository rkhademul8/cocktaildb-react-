import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,Switch,Route } from "react-router-dom";
import About from './components/About/About';
import Login from './components/Login/Login';

function App() {
  return (
    <div >
    
    <Router>
    <Header></Header>
      <Switch>
        
      <Route exact path={'/'}>
        <Home></Home>
      </Route>

      <Route path={'/home'}>
        <Home></Home>
      </Route>

      <Route path={'/about'}>
        <About></About>
      </Route>

      <Route path={'/login'}>
      <Login></Login>
      </Route>

      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
