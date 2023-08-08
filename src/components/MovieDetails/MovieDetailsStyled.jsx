import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const MoviePoster = styled.img`
  max-width: 300px;
  margin-right: 20px;
`;

export const MovieText = styled.div`
  flex: 1;
`;

export const ToggleButtons = styled.div`
  margin-bottom: 20px;

  button {
    margin-right: 10px;
  }
`;

export const Overview = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #333;
`;

export const Genres = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
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
