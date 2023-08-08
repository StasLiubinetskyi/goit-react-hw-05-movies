import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    padding: 5px;
    margin-right: 10px;
  }
`;

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;

    a {
      text-decoration: none;
      color: #333;
      transition: color 0.2s;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

export const StyledButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledLink = styled(Link)`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
