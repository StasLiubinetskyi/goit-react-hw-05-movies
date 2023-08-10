import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import {
  Container,
  Content,
  MoviePoster,
  MovieText,
  ToggleButtons,
  Overview,
  StyledLink,
  AdditionalInfo,
} from './MovieDetailsStyled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetchApi
      .getMovieDetails(movieId)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);

  const compilePosterURL = path => {
    return path
      ? `https://image.tmdb.org/t/p/w500${path}`
      : 'https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg';
  };

  return (
    <Container>
      <Link to="/movies" style={{ marginBottom: '20px' }}>
        Go back
      </Link>
      <Content>
        <MoviePoster
          src={compilePosterURL(movieDetails.poster_path)}
          alt={movieDetails.title}
        />
        <MovieText>
          <h2>{movieDetails.title}</h2>
          <p>User Score: {movieDetails.vote_average}</p>
          <Overview>{movieDetails.overview}</Overview>
        </MovieText>
      </Content>

      <AdditionalInfo>
        <h3>Additional Information:</h3>
      </AdditionalInfo>

      <ToggleButtons>
        {' '}
        <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
        <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
      </ToggleButtons>
    </Container>
  );
};

export default MovieDetails;
