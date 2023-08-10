import React, { useState, useEffect } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import { Container, TrendingMoviesList, StyledLink } from './HomeStyled'; 

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchApi
      .getTrendingMovies()
      .then(response => {
        setTrendingMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
      });
  }, []);

  return (
    <Container>
      <h2>Trending Movies</h2>
      <TrendingMoviesList>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <StyledLink as={ReactRouterLink} to={`/movies/${movie.id}`}>
              {movie.title}
            </StyledLink>
          </li>
        ))}
      </TrendingMoviesList>
    </Container>
  );
};

export default Home;
