import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
`;

export const TrendingMoviesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  margin: 5px 0;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
