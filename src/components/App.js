/* eslint-disable import/no-named-as-default */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Page1Form from './Page1Form';
import Page2Form from './Page2Form';
import Page3Form from './Page3Form';
import Page4Form from './Page4Form';
import Page5Form from './Page5Form';
import Page6Form from './Page6Form';
import Page7Form from './Page7Form';
import FinalPage from './FinalPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/page1' component={Page1Form} />
          <Route path='/page2' component={Page2Form} />
          <Route path='/page3' component={Page3Form} />
          <Route path='/page4' component={Page4Form} />
          <Route path='/page5' component={Page5Form} />
          <Route path='/page6' component={Page6Form} />
          <Route path='/page7' component={Page7Form} />
          <Route path='/final' component={FinalPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default hot(module)(App);
