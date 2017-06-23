import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Template from '../containers/Template';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const createRoutes = () => {
  return (
    <Router>
      <Route
        path='/'
        component={Template}
      >
      <Route exact path="/"
        component={Home}
      />
      <Route
        path='/profile'
        component={Profile}
      />
  </Route>
    </Router>
  )
}

const Routes = createRoutes()

export default Routes;
