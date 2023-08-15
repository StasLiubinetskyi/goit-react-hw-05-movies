import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: block;
  flex-direction: column;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
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

export const StyledLink = styled(Link)`
  margin-right: 10px;
  padding: 5px 10px;
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

export const AdditionalInfo = styled.div`
  margin-top: 20px;
`;

export const GoBackLink = styled(Link)`
  padding: 5px 10px;
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

export const OverviewContainer = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 50px;
`;

export const GenreContainer = styled.div`
  font-size: 16px;
  margin-top: 50px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const GenreList = styled.span`
  font-weight: normal;
`;
