import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import {
  Container,
  SearchWrapper,
  MoviesList,
  StyledButton,
} from './MoviesStyled';

const Movies = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetchApi
      .searchMovies(searchQuery)
      .then(response => {
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.error('Error searching movies:', error);
      });
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
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
          onKeyPress={handleKeyPress}
        />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </SearchWrapper>
      <MoviesList>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <button onClick={() => handleMovieClick(movie.id)}>
              {movie.title}
            </button>
          </li>
        ))}
      </MoviesList>
    </Container>
  );
};

export default Movies;
