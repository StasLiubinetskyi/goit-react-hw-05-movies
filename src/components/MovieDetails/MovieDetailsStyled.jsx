import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const Overview = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #333;
`;

export const StyledLink = styled(Link)`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AdditionalInfo = styled.div`
  margin-top: 20px;
`;