import Header from './Header';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import initialState from '../reducers/initialState';

const store = configureStore(initialState);

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <Provider store={store}>
        <main>
          <div>
            {children}
          </div>
        </main>
      </Provider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
