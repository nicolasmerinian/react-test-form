import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import Visualizer from './Visualizer';
import configureStore from '../store/configureStore';
import initialState from '../reducers/initialState';

const store = configureStore(initialState);

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <main>
          <Visualizer />
          {children}
        </main>
      </Provider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
