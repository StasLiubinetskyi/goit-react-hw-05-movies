import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #222;
  padding: 10px 0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 20px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const TrendingMoviesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
