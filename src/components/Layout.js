import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import Explorer from './Explorer';
import Header from './Header';
import Visualizer from './Visualizer';
import configureStore from '../store/configureStore';
import initialState from '../reducers/initialState';
import { getCharacters } from '../utils/storage';

const charactersFromStorage = getCharacters();
const store = configureStore({ ...initialState, ...charactersFromStorage });

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <main>
          <Explorer />
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
