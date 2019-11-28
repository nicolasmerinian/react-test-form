import Header from './Header';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
