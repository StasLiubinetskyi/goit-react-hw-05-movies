import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px;
`;

export const CastList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const Actor = styled.li`
  text-align: center;
  font-size: 14px;
`;

export const ActorImage = styled.img`
  width: 50%;
  height: auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Character = styled.span`
  display: block;
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

export const StyledActor = styled(Actor)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActorName = styled.span`
  font-weight: bold;
  margin-top: 10px;
`;

export const StyledCharacter = styled(Character)`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;
