import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import {
  Container,
  SearchWrapper,
  MoviesList,
  StyledButton,
} from './MoviesStyled';

const Movies = () => {
  const location = useLocation();
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

  return (
    <Container>
      <h2>Search Movies</h2>
      <SearchWrapper>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </SearchWrapper>
      {location.pathname !== '/movies' && <Link to="/movies">Go back</Link>}
      <MoviesList>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </MoviesList>
    </Container>
  );
};

export default Movies;
