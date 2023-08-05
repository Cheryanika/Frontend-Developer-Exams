import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
export const Navbar = () => {

  return (
    <nav>
        <NavLink to="/">Froms</NavLink>
        <NavLink to="/pokemon">Pokemon's</NavLink>
        <NavLink to="/function">Function</NavLink>
    </nav>
  )
}
