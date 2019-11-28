/* eslint-disable import/no-named-as-default */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Page1 from './Page1';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/page1' component={Page1} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default hot(module)(App);
