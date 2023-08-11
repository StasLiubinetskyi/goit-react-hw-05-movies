import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px;
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledActor = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const ActorImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
`;

export const ActorName = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const StyledCharacter = styled.p`
  margin: 0;
  color: #777;
`;

export const CharacterText = styled.span`
  font-weight: bold;
  color: #333;
`;
