import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const checkActive = (match, location) => {
  	if(!location) return false;
    const {pathname} = location;

    return pathname === '/' || pathname.indexOf('/_display/') !== -1;
  }

  return (
    <header>
      <h1>React Character Maker</h1>
      <nav>
        <ul className='navLinks'>
          <li>
            <NavLink to="/" isActive={checkActive}>Home</NavLink>
            <NavLink to="/page1">Gender</NavLink>
            <NavLink to="/page2">Class</NavLink>
            <NavLink to="/page3">Skin</NavLink>
            <NavLink to="/page4">Eye</NavLink>
            <NavLink to="/page5">Hair</NavLink>
            <NavLink to="/page6">Clothes</NavLink>
            <NavLink to="/page7">Name</NavLink>
            <NavLink to="/final">End</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
