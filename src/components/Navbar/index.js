import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
      <NavLink to='/'>Pizza</NavLink>
      <NavIcon onClick={toggle}> 
        <p>MENU</p>
        <Bars/>
      </NavIcon>
    </Nav>
    </>
  );
};

export default Navbar;