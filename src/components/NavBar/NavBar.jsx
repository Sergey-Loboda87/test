import React from 'react';
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className = {style.navBar}>
      <div className = {style.navBar_items}>
          <NavLink to = '/profile'>Profile</NavLink>
          <NavLink to = '/account'>Account</NavLink>
          <NavLink to = '/prisePlans'>Prise Plans</NavLink>
      </div>
    </div>
  );
}

export default NavBar;