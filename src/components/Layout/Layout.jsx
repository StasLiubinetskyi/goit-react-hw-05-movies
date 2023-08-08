import React from 'react';
import { Nav, NavList, NavItem, NavLink } from './LayoutStyled';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movies">Movies</NavLink>
          </NavItem>
        </NavList>
      </Nav>
      {children}
    </div>
  );
};

export default Layout;
