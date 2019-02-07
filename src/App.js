import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Main from './containers/Main';
import Dashboard from './containers/Dashboard';

const darkPink = '#ED145A';
const lightPink = '#F090C0';
const middleTeal = '#22ABC7';
const lightBlue = '#18D8F0';
const darkBlue = '#18C0F0';

const publicTheme = createMuiTheme({
  shadows: ['none'],
  palette: {
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: darkPink,
    },
  },
});

const dashboardTheme = createMuiTheme({
  palette: {
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: darkPink,
    },
  },
});

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Main} />
      </Switch>
    </div>
  </BrowserRouter>
);

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
