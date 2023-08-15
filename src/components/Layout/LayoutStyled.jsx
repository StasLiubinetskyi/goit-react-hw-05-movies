import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #333;
  padding: 20px 0;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 25px;
`;

export const NavLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  font-size: 25px;
  transition: color 0.2s;

  &.active {
    color: #ccc;
    text-decoration: underline;
  }

  &:hover {
    color: #ccc;
  }
`;
