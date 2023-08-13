import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import PropTypes from 'prop-types'; // Додано PropTypes
import {
  Container,
  CastList,
  StyledActor,
  ActorImage,
  ActorName,
  StyledCharacter,
  CharacterText,
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
        {cast.map((actor, index) => (
          <StyledActor key={`${actor.id}-${index}`}>
            <ActorImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : 'https://www.njca.com.au/wp-content/uploads/2023/03/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
              }
              alt={actor.name}
            />
            <div>
              <ActorName>{actor.name}</ActorName>
              <StyledCharacter>
                <CharacterText>Character:</CharacterText> {actor.character}
              </StyledCharacter>
            </div>
          </StyledActor>
        ))}
      </CastList>
    </Container>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cast;
