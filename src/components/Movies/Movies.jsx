import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';

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

  const compilePosterURL = path => {
    return path
      ? `https://image.tmdb.org/t/p/w250${path}`
      : 'https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg';
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {location.pathname !== '/movies' && (
        <Link to="/movies">Go back</Link>
      )}{' '}
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={compilePosterURL(movie.poster_path)}
                alt={movie.title}
              />{' '}
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
