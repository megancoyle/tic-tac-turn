import React, { Component } from 'react';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavDrawer from '../components/NavDrawer';
import { Header, Main } from '../styled/Template';

injectTapEventPlugin()

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer/>
          <Header>
            TicTacTurn
          </Header>
          <Main>
            <Route exact path="/"
              component={Home}
            />
            <Route
              path='/profile'
              component={Profile}
            />
          </Main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template;
