import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import {
  Container,
  SearchWrapper,
  MoviesList,
  StyledButton,
  ErrorMessage,
} from './MoviesStyled';

const Movies = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('query') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleSearch = () => {
    const newSearch = `?query=${searchQuery}`;
    navigate(newSearch);

    fetchApi
      .searchMovies(searchQuery)
      .then(response => {
        if (response.data.results.length === 0) {
          setShowError(true);
        } else {
          setSearchResults(response.data.results);
          setShowError(false);
        }
      })
      .catch(error => {
        console.error('Error searching movies:', error);
      });
  };

  const handleMovieClick = movieId => {
    const newPath = `/movies/${movieId}`;
    navigate(newPath);
  };

  return (
    <Container>
      <h2>Search Movies</h2>
      <SearchWrapper>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </SearchWrapper>

      {showError && searchQuery && (
        <ErrorMessage>
          No movies found for "{searchQuery}". Please try again.
        </ErrorMessage>
      )}

      {searchResults.length > 0 && (
        <MoviesList>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <StyledButton onClick={() => handleMovieClick(movie.id)}>
                {movie.title}
              </StyledButton>
            </li>
          ))}
        </MoviesList>
      )}
    </Container>
  );
};

export default Movies;
