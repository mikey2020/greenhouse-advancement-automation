import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import SignIn from '../src/js/components/SignIn/';
import Advance from '../src/js/components/Advance/';
import NotFound from '../src/js/components/NotFound/';
import './App.css';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/advance" component={Advance} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
