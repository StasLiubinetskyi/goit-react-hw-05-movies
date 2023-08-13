import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: block;
`;

export const SearchWrapper = styled.div`
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }
`;

export const StyledButton = styled.button`
  margin-right: 10px;
  padding: 8px 10px;
  background-color: #007bff;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
  margin-bottom: 20px;
`;
