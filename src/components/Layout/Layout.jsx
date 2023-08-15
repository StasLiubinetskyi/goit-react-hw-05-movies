import React from 'react';
import { Nav, NavList, NavItem, NavLink } from './LayoutStyled';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/" isActive={location.pathname === '/'}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movies" isActive={location.pathname === '/movies'}>
              Movies
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
      {children}
    </div>
  );
};

export default Layout;
