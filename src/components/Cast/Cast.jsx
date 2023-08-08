import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import {
  Container,
  CastList,
  StyledActor,
  ActorImage,
  ActorName,
  StyledCharacter,
} from './CastStyled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchApi
      .getMovieCast(movieId)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Error fetching cast:', error);
      });
  }, [movieId]);

  return (
    <Container>
      <CastList>
        {cast.map(actor => (
          <StyledActor key={actor.id}>
            <ActorImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : '/placeholder.jpg'
              }
              alt={actor.name}
            />
            <ActorName>{actor.name}</ActorName>
            <StyledCharacter>Character: {actor.character}</StyledCharacter>
          </StyledActor>
        ))}
      </CastList>
    </Container>
  );
};

export default Cast;
