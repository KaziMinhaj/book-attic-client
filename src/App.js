import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import Deals from './components/Deals/Deals';
import NavigationBar from "./components/Header/NavigationBar";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Notfound from './components/NotFound/Notfound';
import Orders from './components/Orders/Orders';
import PrivateRoute from './PrivateRoute/PrivateRoute';


export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/deals">
            <Deals />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='*'>
            <Notfound/>
          </Route>
        </Switch>
    </Router>
  </UserContext.Provider>
    
  );
};

export default App;
