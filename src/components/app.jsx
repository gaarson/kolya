import React from 'react';
import history from 'utils/history';
import { Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AuthForm from 'containers/Auth';
import Registration from 'containers/Registration';
import Main from 'containers/Main';

import './style.css';

const App = () => (
  <Router history={history}>
    <MuiThemeProvider>
      <React.Fragment>
        <div className="container">
          <Route path="/authorization" component={AuthForm} />
          <Route path="/registration" component={Registration} />
          <Route path="/" component={Main} exact />
        </div>
      </React.Fragment>
    </MuiThemeProvider>
  </Router>
);

export default App;
