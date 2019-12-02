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
            <NavLink to="/page1">Page1</NavLink>
            <NavLink to="/page2">Page2</NavLink>
            <NavLink to="/page3">Page3</NavLink>
            <NavLink to="/page4">Page4</NavLink>
            <NavLink to="/page5">Page5</NavLink>
            <NavLink to="/page6">Page6</NavLink>
            <NavLink to="/final">End</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
