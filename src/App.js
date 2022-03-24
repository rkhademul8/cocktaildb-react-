import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,Switch,Route } from "react-router-dom";
import About from './components/About/About';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CocktaiDetails from './components/CocktaiDetails/CocktaiDetails';

function App() {
  return (
    <div className="App">
    
   <AuthProvider>
   <Router>
    <Header></Header>
      <Switch>
        
      <Route exact path={'/'}>
        <Home></Home>
      </Route>

      <Route path={'/home'}>
        <Home></Home>
      </Route>

      <PrivateRoute path={'/drinkdetail/:drinkid'}>
        <CocktaiDetails></CocktaiDetails>
      </PrivateRoute>

      <Route path={'/about'}>

      <About></About>

      </Route>

      {/* <Route path={'/about'}>
        <About></About>
      </Route> */}

      <Route path={'/login'}>
      <Login></Login>
      </Route>

      </Switch>
    </Router>
   </AuthProvider>
     
    </div>
  );
}

export default App;
