import React, { Component } from 'react';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import { Route } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TicTacTurn</h1>
        </header>
        <main>
          <Route exact path="/"
            component={Home}
          />
          <Route
            path='/profile'
            component={Profile}
          />
        </main>
      </div>
    )
  }
}

export default Header;
