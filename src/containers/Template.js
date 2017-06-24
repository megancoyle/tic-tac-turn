import React, { Component } from 'react';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin()

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacTurn</h1>
            <RaisedButton
            label={'Test Button'}
            primary={true}
            onTouchTap={()=>console.log('hello, it works')}
            />
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
      </MuiThemeProvider>
    )
  }
}

export default Template;
