import React, { useState, useEffect } from 'react';
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
  const initialQuery = new URLSearchParams(location.search).get('query') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleSearch = () => {
    const newSearch = `?query=${searchQuery}`;
    navigate(newSearch);
  };

  const handleMovieClick = movieId => {
    const newPath = `/movies/${movieId}`;
    navigate(newPath, { state: { from: location } });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryFromUrl = searchParams.get('query') || '';
    setSearchQuery(queryFromUrl);

    fetchApi
      .searchMovies(queryFromUrl)
      .then(response => {
        setSearchResults(response.data.results);
        setShowError(response.data.results.length === 0 && queryFromUrl !== '');
      })
      .catch(error => {
        console.error('Error searching movies:', error);
        setShowError(true);
      });
  }, [location.search]);

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
