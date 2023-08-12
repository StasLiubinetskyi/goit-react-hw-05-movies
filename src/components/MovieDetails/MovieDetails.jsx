import React, { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import {
  Container,
  Content,
  MoviePoster,
  MovieText,
  ToggleButtons,
  OverviewContainer,
  GenreContainer,
  Label,
  GenreList,
  StyledLink,
  AdditionalInfo,
  GoBackLink,
} from './MovieDetailsStyled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [releaseDate, setReleaseDate] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchApi
      .getMovieDetails(movieId)
      .then(response => {
        setMovieDetails(response.data);
        // Assuming the release date is available as a separate property in response.data
        setReleaseDate(response.data.release_date);
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

  const shouldDisplayCastReviews =
    location.pathname.endsWith('/cast') ||
    location.pathname.endsWith('/reviews');

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <GoBackLink onClick={handleGoBack}>Go back</GoBackLink>
      <Content>
        <MoviePoster
          src={compilePosterURL(movieDetails.poster_path)}
          alt={movieDetails.title}
        />
        <MovieText>
          <h2>
            {movieDetails.title}
            {releaseDate && ` (${releaseDate.substring(0, 4)})`}
          </h2>
          <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <OverviewContainer>
            <Label>Overview: </Label>
            <GenreList>{movieDetails.overview}</GenreList>
          </OverviewContainer>
          <GenreContainer>
            <Label>Genres: </Label>
            <GenreList>
              {movieDetails.genres?.map((genre, index) =>
                index === 0 ? genre.name : `, ${genre.name}`
              )}
            </GenreList>
          </GenreContainer>
        </MovieText>
      </Content>

      <AdditionalInfo>
        <h3>Additional Information:</h3>
      </AdditionalInfo>

      <ToggleButtons>
        <StyledLink to={`/movies/${movieId}/cast`}>Cast:</StyledLink>
        <StyledLink to={`/movies/${movieId}/reviews`}>Reviews:</StyledLink>
      </ToggleButtons>

      {shouldDisplayCastReviews && <Outlet />}
    </Container>
  );
};

export default MovieDetails;
